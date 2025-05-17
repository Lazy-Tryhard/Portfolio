import React from "react";

interface FooterProps {
  darkMode: boolean;
  t: Record<string, string>;
}

const Footer: React.FC<FooterProps> = ({ darkMode, t }) => {
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
