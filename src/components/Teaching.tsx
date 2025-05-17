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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 mr-3 ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-2 1h2m-2 0h5m-9 0H3m2 0h5"
          />
        </svg>
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
          {t.tempPracticalWorkTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
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
          {t.tempPracticalWorkTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
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
          {t.tempPracticalWorkTeacher}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
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
      {/* New Teaching Experience 1 */}
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
          {t.tempTeacher} {t.contentManagementSystems} {t.coursePracticalWork}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          (HTML, CSS, PHP, Wordpress, Prestashop) | Sep - Jan (2024 to 2025)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`${modeClass(
              "bg-yellow-100 text-yellow-800",
              "bg-yellow-900 text-yellow-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            HTML
          </span>
          <span
            className={`${modeClass(
              "bg-yellow-100 text-yellow-800",
              "bg-yellow-900 text-yellow-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            CSS
          </span>
          <span
            className={`${modeClass(
              "bg-yellow-100 text-yellow-800",
              "bg-yellow-900 text-yellow-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            PHP
          </span>
          <span
            className={`${modeClass(
              "bg-yellow-100 text-yellow-800",
              "bg-yellow-900 text-yellow-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            Wordpress
          </span>
          <span
            className={`${modeClass(
              "bg-yellow-100 text-yellow-800",
              "bg-yellow-900 text-yellow-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            Prestashop
          </span>
        </div>
      </div>

      {/* New Teaching Experience 2 */}
      <div
        className={`${modeClass(
          "bg-white",
          "bg-gray-800"
        )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
          darkMode ? "border-teal-600" : "border-teal-500"
        }`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-extrabold text-xl`}
        >
          {t.tempTeacher} {t.digitalCulture} {t.coursePracticalWork}
        </h3>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          {t.university}
        </p>
        <p
          className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
        >
          (Fondamentaux des ordinateurs , Microsoft WORD, Microsoft Excel,
          Microsoft Powerpoint ) | Feb - Mai (2025)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`${modeClass(
              "bg-teal-100 text-teal-800",
              "bg-teal-900 text-teal-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.computerFundamentals}
          </span>
          <span
            className={`${modeClass(
              "bg-teal-100 text-teal-800",
              "bg-teal-900 text-teal-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.microsoftWord}
          </span>
          <span
            className={`${modeClass(
              "bg-teal-100 text-teal-800",
              "bg-teal-900 text-teal-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.microsoftExcel}
          </span>
          <span
            className={`${modeClass(
              "bg-teal-100 text-teal-800",
              "bg-teal-900 text-teal-200"
            )} px-3 py-1 rounded-full text-xs`}
          >
            {t.microsoftPowerpoint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
