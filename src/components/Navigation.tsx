interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = ['Home', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 py-4">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <div className="text-white font-bold text-xl">🤖 Wiz Robotics</div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-6 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
                  currentPage === page
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
