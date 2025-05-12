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
        <span
          className={`w-8 h-1 ${darkMode ? "bg-blue-400" : "bg-blue-600"} mr-3`}
        ></span>
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
