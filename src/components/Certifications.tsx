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
        <span
          className={`w-8 h-1 ${darkMode ? "bg-blue-400" : "bg-blue-600"} mr-3`}
        ></span>
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
