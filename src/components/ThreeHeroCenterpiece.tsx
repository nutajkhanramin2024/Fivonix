import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHeroCenterpiece: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGlFailed, setWebGlFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;

    // Detect software renderer
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // Group to hold the interconnected engineering centerpiece
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Core: Luminous crystalline multi-faceted sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0199F7,
      emissive: 0x013388,
      emissiveIntensity: 0.6,
      metalness: 0.1,
      roughness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.85,
      transparent: true,
      opacity: isSoftwareGl ? 0.75 : 0.95,
      ior: 1.52,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. Inner Quantum Core: Glowing nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x0199F7,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.5
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    rootGroup.add(nucleusMesh);

    // 3. Precision Metallic Gimbal Rings (Engineering Interconnected Systems)
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xddeeff,
      metalness: 0.95,
      roughness: 0.15
    });

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x0199F7,
      metalness: 0.85,
      roughness: 0.2
    });

    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0x88bbff,
      metalness: 0.9,
      roughness: 0.25
    });

    // Outer Torus Ring
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.045, 24, 120);
    const ring1Mesh = new THREE.Mesh(ring1Geo, ringMat1);
    rootGroup.add(ring1Mesh);

    // Middle Torus Ring (inclined)
    const ring2Geo = new THREE.TorusGeometry(1.85, 0.04, 24, 120);
    const ring2Mesh = new THREE.Mesh(ring2Geo, ringMat2);
    ring2Mesh.rotation.x = Math.PI / 3;
    ring2Mesh.rotation.y = Math.PI / 6;
    rootGroup.add(ring2Mesh);

    // Inner Torus Ring (opposing incline)
    const ring3Geo = new THREE.TorusGeometry(1.55, 0.035, 24, 120);
    const ring3Mesh = new THREE.Mesh(ring3Geo, ringMat3);
    ring3Mesh.rotation.x = -Math.PI / 4;
    ring3Mesh.rotation.z = Math.PI / 5;
    rootGroup.add(ring3Mesh);

    // 4. Orbital Satellites / Nodes (representing the 5 core engineering verticals)
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x0199F7,
      emissiveIntensity: 1.2,
      metalness: 0.9,
      roughness: 0.1
    });

    const orbitalNodes: THREE.Mesh[] = [];
    const numNodes = 5;
    for (let i = 0; i < numNodes; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      rootGroup.add(node);
      orbitalNodes.push(node);
    }

    // 5. Surrounding Geometric Wireframe Cage (Geodesic Dome / Engineering Lattice)
    const cageGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const cageWireGeo = new THREE.WireframeGeometry(cageGeo);
    const cageMat = new THREE.LineBasicMaterial({
      color: 0x0199F7,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const cageLine = new THREE.LineSegments(cageWireGeo, cageMat);
    rootGroup.add(cageLine);

    // 6. Floating Technical Data Points (Particles)
    const particleCount = isSoftwareGl ? 40 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 1.5;
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x0199F7,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particlePoints);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0a2550, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const blueRimLight = new THREE.PointLight(0x0199F7, 4.0, 15);
    blueRimLight.position.set(-4, -3, 3);
    scene.add(blueRimLight);

    const cyanAccentLight = new THREE.PointLight(0x00d4ff, 3.0, 12);
    cyanAccentLight.position.set(3, -4, -3);
    scene.add(cyanAccentLight);

    // Mouse Parallax Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.35;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (renderer) renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth interpolation for mouse parallax
      currentRotX = THREE.MathUtils.damp(currentRotX, targetRotX, 4, delta);
      currentRotY = THREE.MathUtils.damp(currentRotY, targetRotY, 4, delta);

      rootGroup.rotation.x = currentRotX + Math.sin(time * 0.3) * 0.08;
      rootGroup.rotation.y = currentRotY + time * 0.25;

      // Independent Gimbal Ring Rotations
      ring1Mesh.rotation.z = time * 0.4;
      ring2Mesh.rotation.y = time * 0.35;
      ring2Mesh.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.2;
      ring3Mesh.rotation.z = -time * 0.5;

      // Pulse Central Nucleus
      const pulseScale = 1.0 + Math.sin(time * 2.5) * 0.06;
      nucleusMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate Outer Cage
      cageLine.rotation.y = -time * 0.15;
      cageLine.rotation.x = time * 0.1;

      // Position 5 Orbital Nodes along dynamic paths
      for (let i = 0; i < orbitalNodes.length; i++) {
        const offset = (i / numNodes) * Math.PI * 2;
        const speed = time * 0.8 + offset;
        const radius = 2.1;
        orbitalNodes[i].position.set(
          Math.cos(speed) * radius,
          Math.sin(speed * 1.5) * 0.6,
          Math.sin(speed) * radius
        );
      }

      particlePoints.rotation.y = time * 0.05;

      if (renderer) renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up WebGL resources
      coreGeo.dispose();
      coreMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
    } catch (err) {
      console.warn('WebGL initialization note (rendering fallback):', err);
      setWebGlFailed(true);
    }
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center">
      {/* 3D WebGL Canvas Mount */}
      {!webGlFailed ? (
        <div 
          ref={mountRef} 
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
          title="Interactive 3D Engineering Centerpiece — Drag or Move Cursor to Rotate"
        />
      ) : (
        /* Graceful High-Tech 2D/3D Kinetic Fallback if WebGL context is unavailable */
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Outer Gimbal Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-[spin_24s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#0199F7]/50 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full border border-slate-600/60 animate-[spin_12s_linear_infinite]" />
            
            {/* Glowing Core */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#0199F7] via-cyan-300 to-white transform rotate-45 shadow-[0_0_50px_rgba(1,153,247,0.8)] animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-black/80 border border-white/40 flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>

            {/* Orbiting nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
            <div className="absolute bottom-4 right-10 w-3 h-3 rounded-full bg-[#0199F7] shadow-[0_0_10px_#0199F7]" />
            <div className="absolute top-12 left-6 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        </div>
      )}
      
      {/* Subtle Ambient Glow Underneath */}
      <div className="absolute -bottom-6 w-3/4 h-24 bg-[#0199F7]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Precision Telemetry Overlay */}
      <div className="absolute top-4 right-4 pointer-events-none bg-[#01134C]/80 border border-slate-700/80 rounded-lg px-3 py-2 text-[10px] font-mono text-slate-300 backdrop-blur-sm space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0199F7] animate-ping" />
          <span className="text-[#0199F7] font-bold">FIVONIX.CORE // 3D KINEMATICS</span>
        </div>
        <div className="text-slate-400">PBR GLASS · GIMBAL DYNAMICS · INTERCONNECTED</div>
      </div>
    </div>
  );
};
