import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SPEC_PAGES, SPEC_METADATA, MASTER_DIRECTIVE_PROMPT } from '../data/specificationData';

interface SpecViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
  onDownloadPdf: () => void;
}

export const SpecViewerModal: React.FC<SpecViewerModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
  onDownloadPdf,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const activePageData = SPEC_PAGES.find((p) => p.pageNumber === currentPage) || SPEC_PAGES[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  {SPEC_METADATA.title}
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-700">
                  Page {currentPage} of 4
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Official technical specification by {SPEC_METADATA.publisher}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="spec-modal-download-pdf"
              onClick={onDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Visual Page Simulation */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-100/60">
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 min-h-[580px] flex flex-col justify-between">
            {/* Top Micro-Header */}
            <div className="border-b border-slate-200 pb-2 mb-6 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>AI STUDIO DEPLOYMENT SPECIFICATION</span>
              <span>{SPEC_METADATA.publisherUrl}</span>
            </div>

            {/* Page 1 Rendering */}
            {currentPage === 1 && (
              <div className="space-y-6">
                {/* AI Disclosure Box */}
                <div className="border border-slate-300 rounded-xl p-5 bg-white shadow-xs">
                  <h4 className="font-bold text-slate-900 text-base mb-3 pb-2 border-b border-slate-200">
                    AI Disclosure and Verification State
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>
                      <strong>• Model:</strong> Gemini (Google)
                    </p>
                    <p>
                      <strong>• Verification State:</strong> Verified open-source technical
                      specification release from{' '}
                      <span className="text-sky-600 font-semibold underline">
                        marielandryspyshop.com
                      </span>
                      .
                    </p>
                    <div>
                      <p className="font-bold text-slate-900 mb-1.5">• Keywords:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {SPEC_METADATA.keywords.map((k) => (
                          <span
                            key={k}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    AI Studio to GitHub Pages Deployment Pipeline
                  </h3>
                  <p className="text-sm text-slate-700">
                    <strong>• Publisher:</strong> Marie Landry Spy Shop (marielandryspyshop.com)
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>• Access Type:</strong> Open Source / Public Open-Access Repository
                  </p>
                </div>

                {/* Abstract Box */}
                <div className="border border-slate-300 rounded-xl p-5 bg-white shadow-xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 pb-1.5 border-b border-slate-200 tracking-wider">
                    ABSTRACT
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {SPEC_METADATA.abstract}
                  </p>
                </div>
              </div>
            )}

            {/* Page 2 Rendering */}
            {currentPage === 2 && (
              <div className="space-y-6">
                {/* Master Directive Box */}
                <div className="border border-slate-300 rounded-xl p-5 bg-white shadow-xs space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm tracking-wider pb-1.5 border-b border-slate-200">
                    MASTER AI STUDIO DIRECTIVE
                  </h4>
                  <p className="text-sm text-slate-700">
                    When ready to deploy, upload this PDF/document directly into AI Studio and
                    execute the following master prompt:
                  </p>
                  <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg flex items-center justify-between">
                    <code className="text-xs sm:text-sm font-mono text-slate-900 font-bold">
                      "{MASTER_DIRECTIVE_PROMPT}"
                    </code>
                    <button
                      onClick={() => handleCopy(`"${MASTER_DIRECTIVE_PROMPT}"`, 'p2-directive')}
                      className="px-2 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-100"
                    >
                      {copiedCode === 'p2-directive' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Section 1 */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">1. Scope & Objective</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    This technical specification standardizes the automated transition of web
                    applications generated via AI Studio into live production environments on GitHub
                    Pages. By standardizing Vite configurations, continuous integration workflows,
                    and secure environment variable injection, developers can eliminate manual
                    build errors and runtime path failures.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900">
                    2. Technical Implementation Architecture
                  </h4>
                  <h5 className="text-sm font-semibold text-slate-800">
                    Step 1: Configure Vite for Relative Asset Paths
                  </h5>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                    <li>
                      Vite defaults to an absolute root path ( <code>/</code> ). When deploying to
                      nested GitHub Pages project repositories ( <code>https://username.github.io/repo-name/</code> ),
                      asset lookups fail unless the base property is adjusted.
                    </li>
                    <li>
                      <strong>Action:</strong> Update <code>vite.config.ts</code> to set{' '}
                      <code>base: './'</code> and define the production output directory:
                    </li>
                  </ul>

                  <div className="relative group">
                    <pre className="p-3.5 bg-slate-900 text-emerald-400 rounded-lg text-xs font-mono overflow-x-auto">
                      {`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL for GitHub Pages sub-path hosting
  build: {
    outDir: 'dist',
  },
});`}
                    </pre>
                    <button
                      onClick={() =>
                        handleCopy(
                          `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  base: './',\n  build: {\n    outDir: 'dist',\n  },\n});`,
                          'p2-vite'
                        )
                      }
                      className="absolute top-2 right-2 px-2 py-1 text-[11px] font-semibold bg-slate-800 text-slate-200 rounded hover:bg-slate-700"
                    >
                      {copiedCode === 'p2-vite' ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>

                  <h5 className="text-sm font-semibold text-slate-800 pt-2">
                    Step 2: Establish the GitHub Actions Deployment Workflow
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700">
                    • Create a workflow configuration file at <code>.github/workflows/deploy.yml</code>.
                  </p>
                </div>
              </div>
            )}

            {/* Page 3 Rendering */}
            {currentPage === 3 && (
              <div className="space-y-6">
                <h4 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-200">
                  Triggers, Permissions & Build Sequence
                </h4>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p className="font-semibold text-slate-900">
                      • Triggers & Permissions:
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      Configure the runner to activate on pushes to <code>main</code> or{' '}
                      <code>master</code> branches, alongside manual dispatching, granting explicit
                      repository permissions (
                      <code className="text-indigo-600 font-bold">
                        contents: read , pages: write , id-token: write
                      </code>
                      ).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p className="font-semibold text-slate-900">
                      • Build and Secret Injection Sequence:
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      Check out code using <code>actions/checkout@v4</code>, spin up Node.js 20 via{' '}
                      <code>actions/setup-node@v4</code>, install dependencies, and inject API
                      secrets directly into the build command:
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                    <p className="font-bold mb-1">Key Pipeline Architectural Security Note:</p>
                    <p>
                      The workflow injects <code>VITE_GEMINI_API_KEY</code> from GitHub Actions
                      repository secrets securely during <code>npm run build</code>, preventing raw
                      secrets from existing in the committed Git repository.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 4 Rendering */}
            {currentPage === 4 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 font-mono">
                    .github/workflows/deploy.yml
                  </h4>
                  <button
                    onClick={() =>
                      handleCopy(
                        SPEC_PAGES[3].sections[0].code || '',
                        'p4-yaml'
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                  >
                    {copiedCode === 'p4-yaml' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied YAML
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Full YAML
                      </>
                    )}
                  </button>
                </div>

                <div className="relative border border-slate-300 rounded-xl overflow-hidden bg-slate-950 p-4">
                  <pre className="text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[460px]">
                    {SPEC_PAGES[3].sections[0].code}
                  </pre>
                </div>
              </div>
            )}

            {/* Micro-Footer */}
            <div className="border-t border-slate-200 pt-3 mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Confidential Open-Source Standard</span>
              <span>Page {currentPage} of 4</span>
            </div>
          </div>
        </div>

        {/* Modal Pagination Navigation Footer */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Page
          </button>

          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  currentPage === page
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
            disabled={currentPage === 4}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next Page <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
