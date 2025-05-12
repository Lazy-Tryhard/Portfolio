import React from "react";

interface TeachingProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Teaching: React.FC<TeachingProps> = ({ darkMode, modeClass, t }) => {
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
        {t.teachingExperience}
      </h2>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-indigo-600" : "border-indigo-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.tempTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.algorithms} | Sep - Jan (2021 to 2024)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`${modeClass(
              "bg-indigo-100 text-indigo-800",
              "bg-indigo-900 text-indigo-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.teaching}
          </span>
          <span
            className={`${modeClass(
              "bg-blue-100 text-blue-800",
              "bg-blue-900 text-blue-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            C {t.algorithms}
          </span>
        </div>
      </div>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-blue-600" : "border-blue-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.tempTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.databases} - {t.msAccess} | Feb - June (2022 and 2024)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`${modeClass(
              "bg-blue-100 text-blue-800",
              "bg-blue-900 text-blue-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.databases}
          </span>
          <span
            className={`${modeClass(
              "bg-purple-100 text-purple-800",
              "bg-purple-900 text-purple-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.msAccess}
          </span>
        </div>
      </div>

      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-purple-600" : "border-purple-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.tempTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
        >
          {t.databases} - {t.mysql} | Feb - June (2021, 2022, 2024)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`${modeClass(
              "bg-purple-100 text-purple-800",
              "bg-purple-900 text-purple-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.databases}
          </span>
          <span
            className={`${modeClass(
              "bg-green-100 text-green-800",
              "bg-green-900 text-green-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.mysql}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
