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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          {day}'s Activities
        </h1>

        <div className="space-y-8 max-w-6xl mx-auto">
          <SectionCard
            title="Scratch Programming"
            emoji="💻"
            color="from-green-400 to-emerald-600"
            instructions={content.scratch.instructions}
            links={[
              ...content.scratch.links,
              { url: 'https://scratch.mit.edu', label: 'Open Scratch Editor' }
            ]}
          />

          <SectionCard
            title="Roblox Development"
            emoji="🎮"
            color="from-blue-400 to-blue-600"
            instructions={content.roblox.instructions}
          >
            <div className="space-y-3 mt-4">
              {content.roblox.slides && (
                <a
                  href={content.roblox.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-gray-800 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-102 transition-all"
                >
                  <span className="text-2xl">📊</span>
                  <span>View Roblox Lesson Slides</span>
                </a>
              )}
              {content.roblox.moreInfo && (
                <a
                  href={content.roblox.moreInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-gray-800 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-102 transition-all"
                >
                  <span className="text-2xl">📝</span>
                  <span>View More Instructions</span>
                </a>
              )}
            </div>
          </SectionCard>

          <SectionCard
            title="STEM Craft Activity"
            emoji="🔧"
            color="from-orange-400 to-red-500"
            instructions={content.stemCraft.instructions}
            links={Array.isArray(content.stemCraft.slides) ? content.stemCraft.slides : [{ url: content.stemCraft.slides, label: 'View Craft Slides' }]}
          />
        </div>
      </div>
    </div>
  );
}

export default DayPage;
