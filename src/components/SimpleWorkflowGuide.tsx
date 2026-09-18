import React, { useState } from 'react';
import {
  Download,
  UploadCloud,
  Terminal,
  Github,
  Check,
  Copy,
  FileText,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Settings,
  Rocket,
  FileCheck2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MASTER_DIRECTIVE_PROMPT, SPEC_METADATA } from '../data/specificationData';

interface SimpleWorkflowGuideProps {
  onDownloadPdf: () => void;
  onOpenSpecModal: (page?: number) => void;
}

export const SimpleWorkflowGuide: React.FC<SimpleWorkflowGuideProps> = ({
  onDownloadPdf,
  onOpenSpecModal,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedGitCmds, setCopiedGitCmds] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const gitCommands = `# 1. Stage and commit changes
git add .
git commit -m "Configure GitHub Pages deployment via AI Studio"

# 2. Push to main branch
git push origin main`;

  const handleDownloadClick = () => {
    setIsDownloading(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.25 },
      colors: ['#38bdf8', '#818cf8', '#34d399'],
    });
    onDownloadPdf();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(MASTER_DIRECTIVE_PROMPT);
    setCopiedPrompt(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.4 },
      colors: ['#38bdf8', '#818cf8', '#34d399'],
    });
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyGitCmds = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedGitCmds(true);
    setTimeout(() => setCopiedGitCmds(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Intro Header Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-indigo-600 text-white shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              OFFICIAL SPECIFICATION
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">
              MODEL: {SPEC_METADATA.model}
            </span>
            <span className="text-slate-400">
              Published by <strong className="text-slate-200">{SPEC_METADATA.publisher}</strong>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {SPEC_METADATA.title}
          </h2>

          <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
            Follow the 4 sequential steps below to configure your Google AI Studio web app with relative Vite base paths and deploy it automatically to GitHub Pages.
          </p>
        </div>
      </div>

      {/* Abstract: Why AI Studio Developers Need This */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              Why AI Studio Developers Need This Specification
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google AI Studio projects build SPAs using standard Vite templates with root-level absolute paths (<code className="font-mono text-indigo-600 font-semibold">/assets/app.js</code>). When exported to a GitHub repository and deployed to GitHub Pages (<code className="font-mono text-slate-800">username.github.io/repo/</code>), these absolute links break with 404 errors, causing a blank screen. This specification provides the exact rules for AI Studio to automatically configure relative paths and automated deployment.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Fixes Asset 404 Errors
            </div>
            <p className="text-slate-600 leading-relaxed">
              Injects <code className="font-mono text-blue-700 font-semibold">base: './'</code> so assets load reliably on any GitHub repository subpath.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Zero-Touch CI/CD Actions
            </div>
            <p className="text-slate-600 leading-relaxed">
              Creates the GitHub Actions workflow to build <code className="font-mono text-purple-700 font-semibold">dist/</code> and deploy live on every push.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Deterministic AI Directive
            </div>
            <p className="text-slate-600 leading-relaxed">
              Eliminates trial-and-error prompting by giving the AI agent strict, pre-tested instructions.
            </p>
          </div>
        </div>
      </div>

      {/* 4-Step Sequential Pipeline with Distinct Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* =========================================================================
            STEP 1: DOWNLOAD (BLUE)
            ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 border-t-4 border-t-blue-600 shadow-sm hover:shadow-md flex flex-col justify-between transition-all space-y-5 relative group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                1
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                1. Download
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-600" />
                Download Specification
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Download the official 4-page standard specification PDF containing exact Vite relative path configuration (<code className="font-mono text-blue-600">base: './'</code>) and CI/CD workflow rules.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-blue-950">
                <span>Technical Standard PDF</span>
                <span className="font-mono text-blue-700 font-bold">4 Pages</span>
              </div>
              <p className="text-[11px] text-blue-800 leading-relaxed">
                Includes permissions, relative path rules &amp; workflow yaml.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleDownloadClick}
              disabled={isDownloading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'Generating...' : 'Download Official PDF'}</span>
            </button>

            <button
              onClick={() => onOpenSpecModal(1)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>Read Full Document (4 Pages)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            STEP 2: UPLOAD (AMBER / ORANGE)
            ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 hover:border-amber-400 border-t-4 border-t-amber-500 shadow-sm hover:shadow-md flex flex-col justify-between transition-all space-y-5 relative group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shadow-xs">
                2
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300">
                2. Upload
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-amber-600" />
                Upload to AI Studio
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Attach the downloaded PDF into your Google AI Studio project or chat session so the AI can ingest the exact rules and implementation requirements.
              </p>
            </div>

            {/* Visual Upload Guide Container */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[11px] text-amber-950">
                <FileCheck2 className="w-4 h-4 text-amber-700" />
                <span>Drag &amp; Drop into Chat</span>
              </div>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                Click the <strong className="font-semibold">+ (attachment)</strong> icon or drag the PDF file directly into the AI Studio prompt input.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://aistudio.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <span>Open AI Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            STEP 3: PROMPT (PURPLE / VIOLET)
            ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 border-t-4 border-t-purple-600 shadow-sm hover:shadow-md flex flex-col justify-between transition-all space-y-5 relative group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-purple-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                3
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                3. Prompt
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-600" />
                Execute Master Prompt
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Send the standardized master prompt to AI Studio. It will set <code className="font-mono bg-purple-50 px-1 py-0.5 rounded text-purple-700 font-bold">base: './'</code> and generate the GitHub Actions workflow.
              </p>
            </div>

            {/* Prompt Callout */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900">
                Master Directive:
              </span>
              <div className="p-2.5 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs leading-snug border border-slate-800 select-all">
                "{MASTER_DIRECTIVE_PROMPT}"
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleCopyPrompt}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200">Directive Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* =========================================================================
            STEP 4: ACTION (EMERALD / GREEN)
            ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-400 border-t-4 border-t-emerald-600 shadow-sm hover:shadow-md flex flex-col justify-between transition-all space-y-5 relative group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                4
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                4. Action
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-emerald-600" />
                GitHub Actions &amp; Deploy
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                In your GitHub repo, set <strong className="text-slate-800">Settings &gt; Pages &gt; Source</strong> to <strong className="text-emerald-700">"GitHub Actions"</strong>, then push your commits to go live.
              </p>
            </div>

            {/* Actions Quick Guide */}
            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[11px] text-emerald-950">
                <Settings className="w-3.5 h-3.5 text-emerald-700" />
                <span>Repo Settings &gt; Pages</span>
              </div>
              <p className="text-[11px] text-emerald-800">
                Source: <strong>GitHub Actions</strong>
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleCopyGitCmds}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              {copiedGitCmds ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Git Commands Copied!</span>
                </>
              ) : (
                <>
                  <Terminal className="w-4 h-4" />
                  <span>Copy Git Commands</span>
                </>
              )}
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              <span>Go to GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
