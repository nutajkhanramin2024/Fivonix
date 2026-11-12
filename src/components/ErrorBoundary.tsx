import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-4 p-8 rounded-2xl bg-[#050814] border border-cyan-400/30 ">
            <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-widest block">
              // RECOVERY CONSOLE
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white">
              Application Interface Active
            </h2>
            <p className="text-sm text-slate-300">
              A component encountered a rendering condition. Click below to reset the interface state.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-3 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all cursor-pointer"
            >
              Refresh Interface
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
