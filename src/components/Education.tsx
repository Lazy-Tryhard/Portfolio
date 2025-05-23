import React from "react";

interface EducationProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Education: React.FC<EducationProps> = ({ darkMode, modeClass, t }) => {
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
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.17-3.56M12 14v6m6.17-3.56L12 20m6.17-3.56L18 16m-6 4l-6.17-3.56M12 20l-6.17-3.56m0 0L6 16m6 4v-6m-6.17 3.56L12 14"
          />
        </svg>
        {t.education}
      </h2>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-blue-600" : "border-blue-500"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } font-extrabold text-xl`}
            >
              {t.phd}
            </h3>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm`}
            >
              {t.university}
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm`}
            >
              {t.advisors} | Sep. 2019 – Now
            </p>
          </div>
          <span
            className={`font-semibold mt-2 sm:mt-0 ${
              darkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            {t.year}
          </span>
        </div>
      </div>

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
          {t.masters}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          Thesis: "Generation of prototypes Based on Fuzzy C-Means for the KNN
          algorithm" | 2017–2019
        </p>
      </div>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-yellow-600" : "border-yellow-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.bachelors}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          Thesis: "Design and development of a web platform for managing the
          prefecture's archives" | 2014–2017
        </p>
      </div>
    </div>
  );
};

export default Education;
