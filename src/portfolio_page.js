import React from "react";

export default function Home({ navigateTo }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-700 sticky top-0 bg-gray-900/90 backdrop-blur">
        <h1 className="text-3xl font-bold">
          Guilherme Langaro B. Silva
          <p className="text-lg text-gray-400 max-w-2xl">
            Software and Hardware engineer
          </p>
        </h1>
        <div className="space-x-1 text-gray-300">
          <a
            href="#about"
            className="mt-4 px-4 py-2 rounded-l bg-green-700 hover:bg-green-600 transition text-lg font-semibold cursor-pointer"
          >
            About
          </a>
          <button
            onClick={() => navigateTo("projects")}
            className="mt-4 px-4 py-2 rounded-none bg-green-700 hover:bg-green-600 transition text-lg font-semibold cursor-pointer"
          >
            Projects
          </button>
          <a
            href="#contact"
            className="mt-4 px-4 py-2 rounded-r bg-green-700 hover:bg-green-600 transition text-lg font-semibold cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="px-10 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a beginner software and hardware engineer passionate about FPGAs,
          SOCs, and efficient hardware design. I also love developing
          interactive web experiences.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 text-right">
        <h3 className="text-4xl font-bold mb-2 text-right">Contact</h3>
        <div>
          <p>
            <a
              href="mailto:gui.langarosilva@gmail.com"
              className="text-blue-600 hover:text-blue-500"
            >
              gui.langarosilva@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/guilherme-langaro/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-500"
            >
              linkedin.com/in/guilherme-langaro
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Poaceae-notatum"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-500"
            >
              github.com/Poaceae-notatum
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
