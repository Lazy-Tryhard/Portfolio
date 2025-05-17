import React, { useEffect, useState } from "react";

interface Publication {
  paperId: string;
  title: string;
  authors: { name: string }[];
  year: number;
  citationCount: number;
  url: string;
}

interface PublicationsProps {
  darkMode: boolean;
  modeClass: (light: string, dark: string) => string;
  t: Record<string, string>;
}

const Publications: React.FC<PublicationsProps> = ({
  darkMode,
  modeClass,
  t,
}) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          "https://api.semanticscholar.org/graph/v1/author/2300527351/papers?fields=title,authors,year,citationCount,url",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch publications");
        }

        const data = await response.json();
        setPublications(data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`text-center p-4 ${
          darkMode ? "text-red-400" : "text-red-600"
        }`}
      >
        {error}
      </div>
    );
  }

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
            darkMode ? "text-purple-400" : "text-purple-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        {t.publications}
      </h2>

      <div className="space-y-4">
        {publications.map((pub) => (
          <a
            key={pub.paperId}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${modeClass(
              "bg-white hover:bg-gray-50",
              "bg-gray-800 hover:bg-gray-700"
            )} p-6 rounded-xl shadow-lg transition-all duration-300 border-l-4 ${
              darkMode ? "border-purple-600" : "border-purple-500"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {pub.title}
            </h3>
            <p
              className={`text-sm mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {pub.authors.map((author) => author.name).join(", ")}
            </p>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {pub.year}
              </span>
              <span
                className={`flex items-center gap-1 text-xs ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {pub.citationCount} citations
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
