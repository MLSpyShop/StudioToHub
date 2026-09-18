export interface SpecPage {
  pageNumber: number;
  title: string;
  sections: {
    heading?: string;
    subheading?: string;
    type: 'metadata' | 'abstract' | 'directive' | 'text' | 'bullets' | 'code' | 'callout';
    content?: string;
    items?: string[];
    codeLang?: string;
    code?: string;
    meta?: Record<string, string>;
  }[];
}

export interface PipelineConfig {
  repoName: string;
  defaultBranch: 'main' | 'master' | 'both';
  nodeVersion: string;
  basePathType: 'relative' | 'custom' | 'root';
  customBasePath: string;
  outDir: string;
  includeGeminiKey: boolean;
  geminiSecretName: string;
  enableSpa404Redirect: boolean;
  customDomain: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'recommended' | 'optional';
  codeSnippet?: string;
  tip?: string;
}
