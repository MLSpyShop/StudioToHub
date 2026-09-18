import jsPDF from 'jspdf';
import { SPEC_METADATA, MASTER_DIRECTIVE_PROMPT } from '../data/specificationData';

export function generateSpecificationPdf(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // ~841.89 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  // Helper styling methods
  const setPageFrame = (docInstance: jsPDF, pageNum: number, totalPages: number = 4) => {
    // Subtle top banner line
    docInstance.setDrawColor(220, 226, 235);
    docInstance.setLineWidth(1);
    docInstance.line(margin, 35, pageWidth - margin, 35);

    // Header subtle note
    docInstance.setFont('helvetica', 'normal');
    docInstance.setFontSize(8);
    docInstance.setTextColor(120, 130, 145);
    docInstance.text('STUDIOTOHUB • AI STUDIO TO GITHUB PAGES PIPELINE SPECIFICATION', margin, 28);
    docInstance.text(`marielandryspyshop.com`, pageWidth - margin, 28, { align: 'right' });

    // Footer
    docInstance.line(margin, pageHeight - 35, pageWidth - margin, pageHeight - 35);
    docInstance.text(`Page ${pageNum} of ${totalPages}`, pageWidth / 2, pageHeight - 22, { align: 'center' });
    docInstance.text('Confidential Open-Source Technical Standard', margin, pageHeight - 22);
    docInstance.text('Google AI Studio CI/CD', pageWidth - margin, pageHeight - 22, { align: 'right' });
  };

  // ================= PAGE 1 =================
  setPageFrame(doc, 1);

  let y = 60;

  // Box 1: AI Disclosure and Verification State
  doc.setDrawColor(180, 190, 205);
  doc.setLineWidth(1.2);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, y, contentWidth, 190, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text('AI Disclosure and Verification State', margin + 16, y + 25);

  doc.setDrawColor(200, 210, 225);
  doc.line(margin + 16, y + 33, margin + contentWidth - 16, y + 33);

  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('• Model: ', margin + 16, y + 54);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Gemini (Google)', margin + 65, y + 54);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('• Verification State: ', margin + 16, y + 78);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const verifText = 'Verified open-source technical specification release from';
  doc.text(verifText, margin + 120, y + 78);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(2, 132, 199);
  doc.text('marielandryspyshop.com.', margin + 16 + 12, y + 96);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('• Keywords:', margin + 16, y + 124);

  // Keyword tags
  const keywords = ['AI Studio', 'GitHub Pages', 'Vite deployment', 'React CI/CD', 'automation pipeline', 'environment secrets'];
  let kwX = margin + 16;
  let kwY = y + 138;
  doc.setFontSize(9);

  keywords.forEach((kw) => {
    doc.setFont('helvetica', 'bold');
    const txtWidth = doc.getTextWidth(kw) + 16;
    if (kwX + txtWidth > margin + contentWidth - 16) {
      kwX = margin + 16;
      kwY += 24;
    }
    doc.setDrawColor(203, 213, 225);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(kwX, kwY - 12, txtWidth, 18, 4, 4, 'FD');
    doc.setTextColor(30, 41, 59);
    doc.text(kw, kwX + 8, kwY + 1);
    kwX += txtWidth + 6;
  });

  y += 215;

  // Title Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text('StudioToHub: AI Studio to GitHub Pages Pipeline', margin, y);

  y += 24;
  doc.setFontSize(10.5);
  doc.text('• Publisher: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Marie Landry Spy Shop (marielandryspyshop.com)', margin + 70, y);

  y += 18;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('• Access Type: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Open Source / Public Open-Access Repository', margin + 85, y);

  y += 40;

  // Abstract Box
  doc.setDrawColor(180, 190, 205);
  doc.setLineWidth(1.2);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, y, contentWidth, 240, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('ABSTRACT', margin + 16, y + 25);

  doc.setDrawColor(200, 210, 225);
  doc.line(margin + 16, y + 33, margin + contentWidth - 16, y + 33);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  const abstractLines = doc.splitTextToSize(SPEC_METADATA.abstract, contentWidth - 32);
  doc.text(abstractLines, margin + 16, y + 55, { lineHeightFactor: 1.5 });

  // ================= PAGE 2 =================
  doc.addPage();
  setPageFrame(doc, 2);
  y = 60;

  // Master AI Studio Directive Box
  doc.setDrawColor(180, 190, 205);
  doc.setLineWidth(1.2);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, y, contentWidth, 115, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('MASTER AI STUDIO DIRECTIVE', margin + 16, y + 24);

  doc.setDrawColor(200, 210, 225);
  doc.line(margin + 16, y + 32, margin + contentWidth - 16, y + 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  doc.text('When ready to deploy, upload this PDF/document directly into AI Studio and execute the following master prompt:', margin + 16, y + 50);

  // Command box
  doc.setDrawColor(148, 163, 184);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin + 16, y + 62, contentWidth - 32, 36, 4, 4, 'FD');
  doc.setFont('courier', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`"${MASTER_DIRECTIVE_PROMPT}"`, margin + 28, y + 84);

  y += 140;

  // 1. Scope & Objective
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('1. Scope & Objective', margin, y);

  y += 18;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  const scopeText = `This technical specification standardizes the automated transition of web applications generated via AI Studio into live production environments on GitHub Pages. By standardizing Vite configurations, continuous integration workflows (using universal 'npm install' dependency resolution), and secure environment variable injection, developers can eliminate manual build errors and runtime path failures.`;
  const scopeLines = doc.splitTextToSize(scopeText, contentWidth);
  doc.text(scopeLines, margin, y, { lineHeightFactor: 1.4 });

  y += 65;

  // 2. Technical Implementation Architecture
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('2. Technical Implementation Architecture', margin, y);

  y += 24;
  doc.setFontSize(12);
  doc.text('Step 1: Configure Vite for Relative Asset Paths', margin, y);

  y += 18;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  const step1a = `• Vite defaults to an absolute root path ( / ). When deploying to nested GitHub Pages project repositories ( https://username.github.io/repo-name/ ), asset lookups fail unless the base property is adjusted.`;
  const step1aLines = doc.splitTextToSize(step1a, contentWidth);
  doc.text(step1aLines, margin, y, { lineHeightFactor: 1.35 });

  y += 36;
  const step1b = `• Action: Update vite.config.ts to set base: './' and define the production output directory:`;
  doc.text(step1b, margin, y);

  y += 16;
  // Code block for vite.config.ts
  const viteCode = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL for GitHub Pages sub-path hosting
  build: {
    outDir: 'dist',
  },
});`;

  doc.setDrawColor(203, 213, 225);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 140, 4, 4, 'FD');
  doc.setFont('courier', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text(viteCode, margin + 14, y + 20, { lineHeightFactor: 1.35 });

  y += 160;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Step 2: Establish the GitHub Actions Deployment Workflow', margin, y);

  y += 16;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  doc.text('• Create a workflow configuration file at .github/workflows/deploy.yml .', margin, y);

  // ================= PAGE 3 =================
  doc.addPage();
  setPageFrame(doc, 3);
  y = 70;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);

  const p3Bullet1 = `• Triggers & Permissions: Configure the runner to activate on pushes to main or master branches, alongside manual dispatching, granting explicit repository permissions ( contents: read , pages: write , id-token: write ).`;
  const p3b1Lines = doc.splitTextToSize(p3Bullet1, contentWidth);
  doc.text(p3b1Lines, margin, y, { lineHeightFactor: 1.4 });

  y += 50;

  const p3Bullet2 = `• Build and Universal Dependency Installation: Check out code using actions/checkout@v4 , spin up Node.js 22 via actions/setup-node@v4 , install dependencies with 'npm install' (ensuring immediate reliability with or without lockfiles), and build production assets with vite.`;
  const p3b2Lines = doc.splitTextToSize(p3Bullet2, contentWidth);
  doc.text(p3b2Lines, margin, y, { lineHeightFactor: 1.4 });

  // Optional visual preview note on page 3
  y += 80;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 140, 6, 6, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Summary of Permissions & Robust CI/CD Execution', margin + 16, y + 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text('• contents: read    -> Allows checkout of the application repository', margin + 16, y + 48);
  doc.text('• pages: write       -> Grants authority to package and deploy Pages artifacts', margin + 16, y + 68);
  doc.text('• id-token: write    -> OIDC token authentication for secure deployment handshake', margin + 16, y + 88);
  doc.text('• npm install        -> Universal CI dependency install for Git/AI Studio exports', margin + 16, y + 108);
  doc.text('• configure-pages@v5 -> Native GitHub Pages asset metadata and configuration', margin + 16, y + 128);

  // ================= PAGE 4 =================
  doc.addPage();
  setPageFrame(doc, 4);
  y = 60;

  const deployYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: ['main', 'master']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install

      - name: Build application
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  doc.setDrawColor(180, 190, 205);
  doc.setLineWidth(1.2);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, y, contentWidth, 700, 4, 4, 'FD');

  doc.setFont('courier', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);

  const yamlLines = deployYaml.split('\n');
  let lineY = y + 22;
  yamlLines.forEach((line) => {
    doc.text(line, margin + 16, lineY);
    lineY += 13.8;
  });

  return doc;
}

export function downloadSpecificationPdf(): void {
  const doc = generateSpecificationPdf();
  doc.save('StudioToHub-AI-Studio-to-GitHub-Pages-Deployment-Pipeline.pdf');
}
