
export interface ReportData {
  originalWordCount: number;
  finalWordCount: number;
  plagiarismBefore: string;
  plagiarismAfter: string;
  humanLikenessScore: string;
  readabilityLevel: 'Basic' | 'Intermediate' | 'Advanced';
}

export interface AiResponse {
  processedText: string;
  report: ReportData;
}

declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}