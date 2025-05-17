import React from "react";

interface ProfessionalProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Professional: React.FC<ProfessionalProps> = ({
  darkMode,
  modeClass,
  t,
}) => {
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
            darkMode ? "text-green-400" : "text-green-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.356-.68-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {t.professional}
      </h2>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-green-600" : "border-green-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.researchInternship}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.researchLab}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.researcherTitle} | Jan. – Jul. 2019
        </p>
      </div>
    </div>
  );
};

export default Professional;
