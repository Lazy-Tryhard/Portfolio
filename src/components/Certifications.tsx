import React from "react";

interface CertificationsProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Certifications: React.FC<CertificationsProps> = ({
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
            darkMode ? "text-yellow-400" : "text-yellow-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {t.certifications}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <div
          className={`${modeClass(
            "bg-gradient-to-br from-yellow-50 to-yellow-100",
            "bg-gray-800"
          )} p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ${
            darkMode ? "border-yellow-600" : "border-yellow-500"
          }`}
        >
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } font-extrabold text-xl`}
          >
            IBM Data Scientist Professional Certificate
          </h3>
        </div>
        <div
          className={`${modeClass(
            "bg-gradient-to-br from-yellow-50 to-yellow-100",
            "bg-gray-800"
          )} p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ${
            darkMode ? "border-yellow-600" : "border-yellow-500"
          }`}
        >
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } font-extrabold text-xl`}
          >
            IBM AI Engineering Professional Certificate
          </h3>
        </div>
        <div
          className={`${modeClass(
            "bg-gradient-to-br from-yellow-50 to-yellow-100",
            "bg-gray-800"
          )} p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ${
            darkMode ? "border-yellow-600" : "border-yellow-500"
          }`}
        >
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } font-extrabold text-xl`}
          >
            DELL EMC Data Science & Big Data Analytics
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
