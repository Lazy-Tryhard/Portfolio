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
              src={`${process.env.PUBLIC_URL}/Aymane.jpg`}
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
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {t.title}
            </p>
            <a
              href="https://fst-usmba.ac.ma"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:underline`}
            >
              {t.headerUniversity}
            </a>
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
              <a
                href="https://www.researchgate.net/profile/Aymane-Bouali?ev=hdr_xprf"
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
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-2.5 17.5h-2v-7h2v7zm-2-8.5h-2v-2h2v2zm7 8.5h-2v-4.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4.5h-2v-7h2v.914c.578-.78 1.414-1.414 2.5-1.414 1.516 0 2.75 1.234 2.75 2.75v4.75z" />
                </svg>
                ResearchGate
              </a>
              <a
                href="https://www.linkedin.com/in/aymane-bouali-017785172/"
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
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.5 7.5h-2.75L15 5.25H9.75L11 8.25H8.25L7.5 6H2.25v12h5.25v-6h1.5v6h5.25v-6h1.5l.75 2.25h2.25L16.5 7.5zM4.213 20.288c-.588 0-1.074-.198-1.463-.593-.387-.396-.58-.89-.58-1.482 0-.59.193-1.085.58-1.481.388-.396.875-.594 1.463-.594.587 0 1.074.198 1.462.594.39.396.585.891.585 1.481 0 .592-.195 1.086-.585 1.482-.388.395-.875.593-1.462.593zm14.037-8.038h-3v10.5h-5.25v-10.5h-3v-1.5h3V7.5c0-.438.13-.803.39-1.095.26-.293.627-.44 1.103-.44h2.507v1.5h-1.758c-.188 0-.33.075-.428.225-.094.15-.141.345-.141.585v1.5h3v1.5z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Lazy-Tryhard"
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
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S17.63 0 12 0z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
