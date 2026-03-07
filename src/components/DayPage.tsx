import SectionCard from './SectionCard';

interface Link {
  url: string;
  label: string;
}

interface DayContent {
  scratch: {
    links: Link[];
  };
  roblox: {
    slides?: string;
    instructions?: string;
  };
  stemCraft: {
    title: string;
    activities: string[];
    slides: string;
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
            links={[
              ...content.scratch.links,
              { url: 'https://scratch.mit.edu', label: 'Open Scratch Editor' }
            ]}
            description="Learn to code by creating games and animations!"
          />

          <SectionCard
            title="Roblox Development"
            emoji="🎮"
            color="from-blue-400 to-blue-600"
            description="Build amazing worlds and games in Roblox!"
          >
            <div className="space-y-3">
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
              {content.roblox.instructions && (
                <a
                  href={content.roblox.instructions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-gray-800 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-102 transition-all"
                >
                  <span className="text-2xl">📝</span>
                  <span>View Instructions</span>
                </a>
              )}
            </div>
          </SectionCard>

          <SectionCard
            title="STEM Craft Activity"
            emoji="🔧"
            color="from-orange-400 to-red-500"
            description={`Today's crafts: ${content.stemCraft.activities.join(' & ')}`}
            links={[
              { url: content.stemCraft.slides, label: 'View Craft Instructions' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DayPage;
