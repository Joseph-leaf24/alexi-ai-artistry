import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

interface LaTeXDocumentProps {
  content: string;
  title?: string;
}

const LaTeXDocument = ({ content, title }: LaTeXDocumentProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-sm border p-8">
      {title && (
        <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-4">
          {title}
        </h3>
      )}
      <div className="prose prose-lg max-w-none text-foreground">
        <Latex>{content}</Latex>
      </div>
    </div>
  );
};

export default LaTeXDocument;