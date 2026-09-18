import React, { useState } from 'react';
import { Header } from './components/Header';
import { SimpleWorkflowGuide } from './components/SimpleWorkflowGuide';
import { SpecViewerModal } from './components/SpecViewerModal';
import { downloadSpecificationPdf } from './utils/pdfGenerator';
import { SPEC_METADATA } from './data/specificationData';

export default function App() {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [modalInitialPage, setModalInitialPage] = useState(1);

  const handleOpenSpecModal = (page = 1) => {
    setModalInitialPage(page);
    setIsSpecModalOpen(true);
  };

  const handleDownloadPdf = () => {
    downloadSpecificationPdf();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenSpecModal={() => handleOpenSpecModal(1)}
        onDownloadPdf={handleDownloadPdf}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* =========================================================================
            UNIFIED 4-STEP HOMEPAGE: 1. Download  2. Upload  3. Prompt  4. Action
            ========================================================================= */}
        <SimpleWorkflowGuide
          onDownloadPdf={handleDownloadPdf}
          onOpenSpecModal={handleOpenSpecModal}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">StudioToHub</span>
            <span>•</span>
            <span>Google AI Studio &rarr; GitHub Pages Continuous Delivery Standard</span>
          </div>

          <div className="flex items-center gap-4">
            <span>
              Publisher: <strong className="text-slate-700">{SPEC_METADATA.publisher}</strong> ({SPEC_METADATA.publisherUrl})
            </span>
            <button
              onClick={handleDownloadPdf}
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Download PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Specification Document Viewer Modal */}
      <SpecViewerModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
        initialPage={modalInitialPage}
        onDownloadPdf={handleDownloadPdf}
      />
    </div>
  );
}
