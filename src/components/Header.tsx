import React from "react";

interface HeaderProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, modeClass, t }) => {
  return (
    <header className="relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-blue-50 to-indigo-100"
        } z-10`}
      />
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl transform transition-transform hover:scale-110 overflow-hidden">
            <img
              src="/Aymane.jpg"
              alt="Aymane Bouali"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1
              className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              BOUALI Aymane
            </h1>
            <p
              className={`text-lg md:text-xl mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {t.title}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              <a
                href="mailto:aymane.bouali.18@gmail.com"
                className={`flex items-center gap-2 ${modeClass(
                  "bg-white/10",
                  "bg-gray-800/80"
                )} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-white/20"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                aymane.bouali.18@gmail.com
              </a>
              <a
                href="tel:+212770234801"
                className={`flex items-center gap-2 ${modeClass(
                  "bg-white/10",
                  "bg-gray-800/80"
                )} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-white/20"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (+212)[0]7 70 23 48 01
              </a>
              <a
                href="https://scholar.google.com/citations?user=V5KjrHQAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${modeClass(
                  "bg-white/10",
                  "bg-gray-800/80"
                )} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-white/20"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.804 19.194c-1.168.714-2.481 1.097-3.804 1.097-3.722 0-6.75-2.758-6.75-6.156 0-3.397 3.028-6.156 6.75-6.156 1.323 0 2.636.383 3.804 1.097l-1.586 1.586c-.714-.383-1.537-.586-2.375-.586-2.613 0-4.734 1.929-4.734 4.313 0 2.383 2.121 4.313 4.734 4.313.838 0 1.661-.203 2.375-.586l1.586 1.586z" />
                </svg>
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
