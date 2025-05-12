import React from "react";

interface FooterProps {
  darkMode: boolean;
  t: Record<string, string>;
}

const Footer: React.FC<FooterProps> = ({ darkMode, t }) => {
  const socialLinks = [
    {
      name: "github",
      path: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S17.63 0 12 0z",
    },
    {
      name: "linkedin",
      path: "M16.5 7.5h-2.75L15 5.25H9.75L11 8.25H8.25L7.5 6H2.25v12h5.25v-6h1.5v6h5.25v-6h1.5l.75 2.25h2.25L16.5 7.5zM4.213 20.288c-.588 0-1.074-.198-1.463-.593-.387-.396-.58-.89-.58-1.482 0-.59.193-1.085.58-1.481.388-.396.875-.594 1.463-.594.587 0 1.074.198 1.462.594.39.396.585.891.585 1.481 0 .592-.195 1.086-.585 1.482-.388.395-.875.593-1.462.593zm14.037-8.038h-3v10.5h-5.25v-10.5h-3v-1.5h3V7.5c0-.438.13-.803.39-1.095.26-.293.627-.44 1.103-.44h2.507v1.5h-1.758c-.188 0-.33.075-.428.225-.094.15-.141.345-.141.585v1.5h3v1.5z",
    },
    {
      name: "twitter",
      path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    },
    {
      name: "google-scholar",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm1-7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    },
  ];

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } py-12 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              BOUALI Aymane
            </h3>
            <p
              className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              {t.title}
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } transition-colors duration-300`}
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div
          className={`mt-8 pt-8 border-t ${
            darkMode
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          } text-center text-sm`}
        >
          <p>
            {t.copyright.replace("2025", new Date().getFullYear().toString())}
          </p>
          <p className="mt-2">{t.craftedWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
