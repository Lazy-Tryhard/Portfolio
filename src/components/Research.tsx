import React from "react";

interface ResearchProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Research: React.FC<ResearchProps> = ({ darkMode, modeClass, t }) => {
  const interests = [
    { id: "unsupervisedLearning", label: t.unsupervisedLearning },
    { id: "aiAndBigData", label: t.aiAndBigData },
    { id: "explainableAI", label: t.explainableAI },
    { id: "deepLearning", label: t.deepLearning },
    { id: "computerVision", label: t.computerVision },
    { id: "reinforcementLearning", label: t.reinforcementLearning },
  ];

  return (
    <div className="space-y-6">
      <h2
        className={`text-3xl font-bold flex items-center ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 mr-3 ${
            darkMode ? "text-purple-400" : "text-purple-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.479a2 2 0 00-1.497 1.314l-.757 1.922l-.757-1.922a2 2 0 00-1.497-1.314l-2.387-.479a2 2 0 00-1.022.547m19.428 0a2 2 0 01.47.748ZM19.428 15.428a2 2 0 01.47.748M5.905 19.254a2 2 0 00-.547-1.022l-.479-2.387a2 2 0 00-1.314-1.497l-1.922-.757l1.922-.757a2 2 0 001.314-1.497l.479-2.387a2 2 0 00.547-1.022m10.095 8.276a2 2 0 01-.748-.47M5.905 19.254a2 2 0 01-.748-.47m10.095 8.276l-.479-2.387a2 2 0 00-1.314-1.497l-1.922-.757l-1.922.757a2 2 0 00-1.497 1.314l-.479 2.387a2 2 0 00-.547 1.022m10.095-8.276a2 2 0 00-.748-.47M10.5 7.5h.01M12 12h.01M16.5 7.5h.01M7.5 16.5h.01M12 16.5h.01M16.5 16.5h.01M7.5 7.5h.01M16.5 12h.01"
          />
        </svg>
        {t.researchInterests}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interests.map((interest) => (
          <div
            key={interest.id}
            className={`${modeClass(
              "bg-white",
              "bg-gray-800"
            )} p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 ${
              darkMode ? "border-purple-600" : "border-purple-500"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`${
                  darkMode ? "bg-purple-500" : "bg-purple-500"
                } w-2 h-2 rounded-full mr-2 animate-pulse`}
              ></div>
              <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                {interest.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
