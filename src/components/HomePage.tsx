interface HomePageProps {
  onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  const days = [
    { name: 'Monday', color: 'from-red-400 to-pink-500', emoji: '🌟' },
    { name: 'Tuesday', color: 'from-orange-400 to-yellow-500', emoji: '🚀' },
    { name: 'Wednesday', color: 'from-green-400 to-emerald-500', emoji: '💡' },
    { name: 'Thursday', color: 'from-blue-400 to-indigo-500', emoji: '🎨' },
    { name: 'Friday', color: 'from-purple-400 to-pink-500', emoji: '🎉' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            March Break Camp 2026
          </h1>
          <p className="text-2xl text-gray-700">
            Choose a day to start your adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {days.map((day) => (
            <button
              key={day.name}
              onClick={() => onNavigate(day.name)}
              className={`bg-gradient-to-br ${day.color} rounded-3xl p-8 shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl`}
            >
              <div className="text-white">
                <div className="text-6xl mb-4">{day.emoji}</div>
                <div className="text-4xl font-bold">{day.name}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What You'll Learn This Week
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Scratch Programming
                </h3>
                <p className="text-gray-700">
                  Create amazing games and animations with code!
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Roblox Development
                </h3>
                <p className="text-gray-700">
                  Build your own Roblox games and worlds!
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  STEM Crafts
                </h3>
                <p className="text-gray-700">
                  Hands-on projects combining science and creativity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
