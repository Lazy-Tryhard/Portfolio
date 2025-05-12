import React from "react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  t: Record<string, string>;
}

const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  t,
}) => {
  const tabs = [
    { id: "education", label: t.education },
    { id: "professional", label: t.professional },
    { id: "certifications", label: t.certifications },
    { id: "research", label: t.research },
    { id: "publications", label: t.publications },
    { id: "teaching", label: t.teaching },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 ${
        darkMode ? "bg-gray-900 shadow-gray-800" : "bg-white shadow-gray-200"
      } shadow py-2`}
    >
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto space-x-2 py-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none ${
                  activeTab === tab.id
                    ? `${
                        darkMode
                          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      } shadow-lg`
                    : `${
                        darkMode
                          ? "text-gray-300 hover:bg-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
