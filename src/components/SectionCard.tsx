import { ExternalLink } from 'lucide-react';

interface Link {
  url: string;
  label: string;
}

interface SectionCardProps {
  title: string;
  emoji: string;
  links?: Link[];
  description?: string;
  instructions?: string;
  children?: React.ReactNode;
}

function SectionCard({ title, emoji, links, description, instructions, children }: SectionCardProps) {
  return (
    <section className="wiz-surface p-6 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">{emoji}</span>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>

      {description && <p className="mb-4 rounded-lg bg-purple-50 p-4 text-slate-700">{description}</p>}

      {instructions && (
        <div className="mb-6 rounded-lg border border-purple-100 bg-purple-50 p-4">
          <p className="leading-relaxed text-slate-700">{instructions}</p>
        </div>
      )}

      {children}

      {links && links.length > 0 && (
        <div className="mt-4 space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-purple-100 bg-white px-4 py-3 font-semibold text-purple-800 transition hover:bg-purple-50"
            >
              <ExternalLink size={18} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default SectionCard;
