interface HomePageProps {
  onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const leaderboard = [
    'Isaac Deng',
    'Joey Li',
    'Kevin Chen',
    'Elvis Chen',
    'Ray Wang',
    'Asher Cruz',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-purple-50">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <section className="wiz-surface mb-10 p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">Wiz Robotics</p>
          <h1 className="wiz-title mb-3">March Break Camp 2026 Daily Hub</h1>
          <p className="wiz-subtitle max-w-3xl">
            Select a day to access lesson slides, Scratch activities, Roblox resources, and STEM craft guides.
          </p>
        </section>

        <section className="wiz-surface mb-10 p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Live: Best Crafts Leaderboard</h2>
          <ol className="space-y-3">
            {leaderboard.map((student, index) => (
              <li
                key={student}
                className="flex items-center justify-between rounded-xl border border-purple-100 bg-purple-50 px-4 py-3"
              >
                <span className="font-semibold text-slate-900">
                  {index + 1}. {student}
                </span>
                <span className="text-sm font-semibold text-purple-700">0 points</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Choose a Day</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => onNavigate(day)}
                className="wiz-surface p-6 text-left transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">Camp Day</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{day}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="wiz-surface p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">What Students Work On</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Scratch Programming</h3>
              <p className="text-slate-700">Build games and animations while learning coding logic and design thinking.</p>
            </div>
            <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Roblox Development</h3>
              <p className="text-slate-700">Create interactive worlds in Roblox Studio with foundational scripting.</p>
            </div>
            <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">STEM Craft Activities</h3>
              <p className="text-slate-700">Hands-on engineering projects that reinforce creativity and problem solving.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
