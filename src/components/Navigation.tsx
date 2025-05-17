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
    {
      id: "education",
      label: t.education,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.17-3.56M12 14v6m6.17-3.56L12 20m6.17-3.56L18 16m-6 4l-6.17-3.56M12 20l-6.17-3.56m0 0L6 16m6 4v-6m-6.17 3.56L12 14"/></svg>',
    },
    {
      id: "professional",
      label: t.professional,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.356-.68-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    },
    {
      id: "certifications",
      label: t.certifications,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    },
    {
      id: "research",
      label: t.research,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
    },
    {
      id: "publications",
      label: t.publications,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    },
    {
      id: "teaching",
      label: t.teaching,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-2 1h2m-2 0h5m-9 0H3m2 0h5"/></svg>',
    },
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
                className={`flex items-center px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none ${
                  activeTab === tab.id
                    ? `${
                        darkMode
                          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      } shadow-lg`
                    : `${
                        darkMode
                          ? "text-gray-100 hover:bg-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                }`}
              >
                <span
                  className="w-5 h-5 mr-2"
                  dangerouslySetInnerHTML={{ __html: tab.icon }}
                />
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
