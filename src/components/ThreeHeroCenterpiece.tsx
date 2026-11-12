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

      // Scene setup
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      container.appendChild(renderer.domElement);

      // Root Group for Mouse Rotation & Continuous Spin
      const rootGroup = new THREE.Group();
      scene.add(rootGroup);

      // 1. Central Core Sphere: Luminous Electric Blue Orb
      const coreGeo = new THREE.SphereGeometry(1.25, 64, 64);
      const coreMat = new THREE.MeshPhongMaterial({
        color: 0x0199F7,
        emissive: 0x0144aa,
        emissiveIntensity: 0.8,
        specular: 0x38bdf8,
        shininess: 90,
        transparent: true,
        opacity: 0.92
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      rootGroup.add(coreMesh);

      // 2. Inner Hot Core (Sun-like Nucleus)
      const nucleusGeo = new THREE.SphereGeometry(0.65, 32, 32);
      const nucleusMat = new THREE.MeshBasicMaterial({
        color: 0xffffff
      });
      const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
      rootGroup.add(nucleusMesh);

      // 3. Tech Wireframe Latitude/Longitude Outer Shell
      const shellGeo = new THREE.IcosahedronGeometry(1.5, 2);
      const shellWire = new THREE.WireframeGeometry(shellGeo);
      const shellMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const shellMesh = new THREE.LineSegments(shellWire, shellMat);
      rootGroup.add(shellMesh);

      // 4. Three Precision Rotating Torus Gyro Rings
      const ringMat1 = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x0199F7,
        emissiveIntensity: 0.4,
        metalness: 0.9,
        roughness: 0.1
      });

      const ringMat2 = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0144aa,
        emissiveIntensity: 0.5,
        metalness: 0.85,
        roughness: 0.15
      });

      const ringMat3 = new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        emissive: 0x0199F7,
        emissiveIntensity: 0.6,
        metalness: 0.95,
        roughness: 0.1
      });

      // Outer Ring
      const ring1Geo = new THREE.TorusGeometry(2.15, 0.04, 30, 120);
      const ring1Mesh = new THREE.Mesh(ring1Geo, ringMat1);
      rootGroup.add(ring1Mesh);

      // Middle Ring (angled)
      const ring2Geo = new THREE.TorusGeometry(1.85, 0.035, 30, 120);
      const ring2Mesh = new THREE.Mesh(ring2Geo, ringMat2);
      ring2Mesh.rotation.x = Math.PI / 3;
      ring2Mesh.rotation.y = Math.PI / 6;
      rootGroup.add(ring2Mesh);

      // Inner Ring (opposing angle)
      const ring3Geo = new THREE.TorusGeometry(1.6, 0.03, 30, 120);
      const ring3Mesh = new THREE.Mesh(ring3Geo, ringMat3);
      ring3Mesh.rotation.x = -Math.PI / 4;
      ring3Mesh.rotation.z = Math.PI / 5;
      rootGroup.add(ring3Mesh);

      // 5. Orbiting Satellites / Glowing Nodes
      const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const numNodes = 5;
      const orbitalNodes: THREE.Mesh[] = [];

      for (let i = 0; i < numNodes; i++) {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        rootGroup.add(node);
        orbitalNodes.push(node);
      }

      // 6. Radiant Starfield Particle Swarm
      const particleCount = 180;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2.4 + Math.random() * 1.8;
        particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = r * Math.cos(phi);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.055,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      const particlePoints = new THREE.Points(particleGeo, particleMat);
      rootGroup.add(particlePoints);

      // Lighting Setup
      const ambientLight = new THREE.AmbientLight(0x01134C, 2.0);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
      keyLight.position.set(5, 6, 7);
      scene.add(keyLight);

      const blueRimLight = new THREE.PointLight(0x0199F7, 5.0, 15);
      blueRimLight.position.set(-4, -3, 3);
      scene.add(blueRimLight);

      const cyanAccentLight = new THREE.PointLight(0x38bdf8, 4.0, 12);
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

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        if (renderer) renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // Smooth Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        // Smooth damp rotation
        currentRotX = THREE.MathUtils.damp(currentRotX, targetRotX, 4, delta);
        currentRotY = THREE.MathUtils.damp(currentRotY, targetRotY, 4, delta);

        rootGroup.rotation.x = currentRotX + Math.sin(time * 0.3) * 0.08;
        rootGroup.rotation.y = currentRotY + time * 0.25;

        // Independent Ring Rotations
        ring1Mesh.rotation.z = time * 0.45;
        ring2Mesh.rotation.y = time * 0.35;
        ring2Mesh.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.25;
        ring3Mesh.rotation.z = -time * 0.55;

        shellMesh.rotation.y = -time * 0.2;
        shellMesh.rotation.x = time * 0.15;

        // Pulse Inner Core
        const pulseScale = 1.0 + Math.sin(time * 2.5) * 0.07;
        nucleusMesh.scale.set(pulseScale, pulseScale, pulseScale);

        // Move 5 Orbiting Nodes
        for (let i = 0; i < orbitalNodes.length; i++) {
          const offset = (i / numNodes) * Math.PI * 2;
          const speed = time * 0.85 + offset;
          const radius = 2.15;
          orbitalNodes[i].position.set(
            Math.cos(speed) * radius,
            Math.sin(speed * 1.5) * 0.65,
            Math.sin(speed) * radius
          );
        }

        particlePoints.rotation.y = time * 0.06;

        if (renderer) renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);

        coreGeo.dispose();
        coreMat.dispose();
        nucleusGeo.dispose();
        nucleusMat.dispose();
        shellGeo.dispose();
        shellWire.dispose();
        shellMat.dispose();
        ring1Geo.dispose();
        ring2Geo.dispose();
        ring3Geo.dispose();
        ringMat1.dispose();
        ringMat2.dispose();
        ringMat3.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
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
      console.warn('WebGL initialization note:', err);
      setWebGlFailed(true);
    }
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center">
      {!webGlFailed ? (
        <div 
          ref={mountRef} 
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
          title="Interactive 3D Engineering Centerpiece — Drag or Move Cursor to Rotate"
        />
      ) : (
        /* High-Tech Kinetic Fallback Sphere */
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Outer Gimbal Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(56,189,248,0.5)] animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#0199F7]/70 animate-[spin_14s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full border border-slate-500/60 animate-[spin_10s_linear_infinite]" />
            
            {/* Luminous Glowing Core Ball */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#0199F7] via-cyan-300 to-white shadow-[0_0_50px_rgba(1,153,247,0.8)] animate-pulse flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/70 border border-white/50 flex items-center justify-center shadow-inner">
                <span className="w-5 h-5 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>

            {/* Orbiting nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#38bdf8]" />
            <div className="absolute bottom-4 right-10 w-3.5 h-3.5 rounded-full bg-[#0199F7] shadow-[0_0_15px_#0199F7]" />
            <div className="absolute top-12 left-6 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
          </div>
        </div>
      )}
      
      {/* Luminous Ambient Floor Glow */}
      <div className="absolute -bottom-6 w-3/4 h-24 bg-[#0199F7]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Telemetry Badge */}
      <div className="absolute bottom-4 right-4 pointer-events-none bg-[#01134C]/80 border border-slate-700/80 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-300 backdrop-blur-sm space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0199F7] animate-ping" />
          <span className="text-[#0199F7] font-bold">FIVONIX.CORE // 3D KINEMATICS</span>
        </div>
        <div className="text-slate-400">PBR CORE · GYRO DYNAMICS · ACTIVE</div>
      </div>
    </div>
  );
};
