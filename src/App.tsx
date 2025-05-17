import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Education from "./components/Education";
import Professional from "./components/Professional";
import Certifications from "./components/Certifications";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import { translations } from "./translations";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const modeClass = (light: string, dark: string) => {
    return darkMode ? dark : light;
  };

  const t = translations[language];

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return <Education darkMode={darkMode} modeClass={modeClass} t={t} />;
      case "professional":
        return <Professional darkMode={darkMode} modeClass={modeClass} t={t} />;
      case "certifications":
        return (
          <Certifications darkMode={darkMode} modeClass={modeClass} t={t} />
        );
      case "research":
        return <Research darkMode={darkMode} modeClass={modeClass} t={t} />;
      case "publications":
        return <Publications darkMode={darkMode} modeClass={modeClass} t={t} />;
      case "teaching":
        return <Teaching darkMode={darkMode} modeClass={modeClass} t={t} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-gray-100"
      }`}
    >
      {/* Mode and Language Toggles */}
      <div className="fixed top-4 right-4 z-50 flex space-x-4">
        <button
          onClick={() => setLanguage((lang) => (lang === "en" ? "fr" : "en"))}
          className={`px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-gray-800 hover:bg-gray-100 shadow-md"
          }`}
          aria-label="Toggle language"
        >
          {language.toUpperCase()}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-gray-800 hover:bg-gray-100 shadow-md"
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Decorative Elements */}
      <div
        className={`fixed top-0 left-0 w-64 h-64 ${
          darkMode ? "bg-indigo-900" : "bg-indigo-200"
        } rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse`}
      />
      <div
        className={`fixed top-1/3 right-0 w-96 h-96 ${
          darkMode ? "bg-blue-900" : "bg-blue-200"
        } rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse delay-1000`}
      />
      <div
        className={`fixed bottom-0 left-1/3 w-80 h-80 ${
          darkMode ? "bg-purple-900" : "bg-purple-200"
        } rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse delay-2000`}
      />

      <Header darkMode={darkMode} modeClass={modeClass} t={t} />
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        t={t}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div
          className={`max-w-4xl mx-auto ${modeClass(
            "bg-white",
            "bg-gray-800"
          )} backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-colors duration-300`}
        >
          <div className="p-8">{renderContent()}</div>
        </div>
      </main>

      <Footer darkMode={darkMode} t={t} />
    </div>
  );
};

export default App;
