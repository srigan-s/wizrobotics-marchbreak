interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const pages = ['Home', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <nav className="border-b border-purple-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <button
            onClick={() => onNavigate('Home')}
            className="text-left"
            aria-label="Go to home page"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">Wiz Robotics</p>
            <p className="text-lg font-bold text-slate-900">March Break Camp 2026</p>
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  currentPage === page
                    ? 'bg-purple-700 text-white shadow'
                    : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
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
