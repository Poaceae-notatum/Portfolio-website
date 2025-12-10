import React, { useEffect, useState } from "react";

export default function ProjectsPage({ navigateTo }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Poaceae-notatum/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-semibold">
      <div className="text-right px-10 py-6">
        <button
          onClick={() => navigateTo("home")}
          className="mt-4 px-20 py-2 text-lg bg-green-700 hover:bg-green-600 rounded-2xl transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-12 text-center">Projects</h1>

      {repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
              <p className="text-gray-400 text-sm">
                {repo.description || "No description provided."}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Loading projects from GitHub...
        </p>
      )}
    </div>
  );
}
