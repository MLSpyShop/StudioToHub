import React from 'react';
import { GitBranch, ShieldCheck, Sparkles, FileText, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenSpecModal: () => void;
  onDownloadPdf: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSpecModal, onDownloadPdf }) => {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center text-white shadow-sm ring-1 ring-slate-800/20">
            <GitBranch className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                <span>StudioToHub</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                  AI Studio &rarr; GitHub
                </span>
              </h1>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3" /> Verified Spec
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              Continuous Delivery Pipeline for Google AI Studio & GitHub Pages
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="view-spec-header-btn"
            onClick={onOpenSpecModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span className="hidden xs:inline">Read Spec</span>
          </button>

          <button
            id="download-pdf-header-btn"
            onClick={onDownloadPdf}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
