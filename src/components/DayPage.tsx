import SectionCard from './SectionCard';

interface Link {
  url: string;
  label: string;
}

interface DayContent {
  scratch: {
    links: Link[];
    instructions?: string;
  };
  roblox: {
    slides?: string;
    instructions?: string;
    moreInfo?: string;
  };
  stemCraft: {
    title: string;
    activities: string[];
    instructions?: string;
    slides: Link[] | string;
  };
}

interface DayPageProps {
  day: string;
  content: DayContent;
}

function DayPage({ day, content }: DayPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-purple-50">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <header className="mb-8 rounded-2xl border border-purple-100 bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">Daily Lessons</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">{day}</h1>
        </header>

        <div className="space-y-6 max-w-6xl mx-auto">
          <SectionCard
            title="Scratch Programming"
            emoji="💻"
            instructions={content.scratch.instructions}
            links={[
              ...content.scratch.links,
              { url: 'https://scratch.mit.edu', label: 'Open Scratch Editor' }
            ]}
          />

          <SectionCard
            title="Roblox Development"
            emoji="🎮"
            instructions={content.roblox.instructions}
          >
            <div className="mt-4 space-y-3">
              {content.roblox.slides && (
                <a
                  href={content.roblox.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-purple-100 bg-white px-4 py-3 font-semibold text-purple-800 transition hover:bg-purple-50"
                >
                  <span>View Roblox Lesson Slides</span>
                </a>
              )}
              {content.roblox.moreInfo && (
                <a
                  href={content.roblox.moreInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-purple-100 bg-white px-4 py-3 font-semibold text-purple-800 transition hover:bg-purple-50"
                >
                  <span>View Additional Instructions</span>
                </a>
              )}
            </div>
          </SectionCard>

          <SectionCard
            title="STEM Craft Activity"
            emoji="🔧"
            instructions={content.stemCraft.instructions}
            links={Array.isArray(content.stemCraft.slides) ? content.stemCraft.slides : [{ url: content.stemCraft.slides, label: 'View Craft Slides' }]}
          />
        </div>
      </div>
    </div>
  );
}

export default DayPage;
