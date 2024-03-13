import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Biography</h1>
      </header>
      <main className="p-4">
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hello! I'm John Doe, a software developer with over 10 years of
            experience in building web applications. I specialize in JavaScript,
            React, and Node.js. I'm passionate about creating efficient and
            user-friendly software solutions.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>Senior Software Developer</strong> at TechCompany (2020 -
              Present)
              <p className="text-gray-700">
                Lead a team of developers in creating web applications using
                React and Node.js.
              </p>
            </li>
            <li>
              <strong>Software Engineer</strong> at WebDev Inc. (2015 - 2020)
              <p className="text-gray-700">
                Developed and maintained several high-traffic websites using
                JavaScript, HTML, and CSS.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
