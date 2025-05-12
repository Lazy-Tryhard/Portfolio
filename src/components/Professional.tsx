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
        <span
          className={`w-8 h-1 ${darkMode ? "bg-blue-400" : "bg-blue-600"} mr-3`}
        ></span>
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
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.researchLab}
        </p>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.researcherTitle} | Jan. – Jul. 2019
        </p>
      </div>
    </div>
  );
};

export default Professional;
