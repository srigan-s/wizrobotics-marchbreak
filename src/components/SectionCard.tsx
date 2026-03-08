import { ExternalLink } from 'lucide-react';

interface Link {
  url: string;
  label: string;
}

interface SectionCardProps {
  title: string;
  emoji: string;
  color: string;
  links?: Link[];
  description?: string;
  instructions?: string;
  children?: React.ReactNode;
}

function SectionCard({ title, emoji, color, links, description, instructions, children }: SectionCardProps) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-2xl shadow-xl p-6 md:p-8`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl">{emoji}</div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>

      {description && (
        <p className="text-white text-lg mb-6 bg-white/20 rounded-lg p-4">
          {description}
        </p>
      )}

      {instructions && (
        <div className="bg-white/20 rounded-xl p-6 mb-6 text-white">
          <p className="text-base leading-relaxed">{instructions}</p>
        </div>
      )}

      {children}

      {links && links.length > 0 && (
        <div className="space-y-3 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-800 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-102 transition-all"
            >
              <ExternalLink size={24} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SectionCard;
