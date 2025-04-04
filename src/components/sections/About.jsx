import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

  const frontendSkills = [
    "React",
    "TailWindCSS",
    "Bootstrap",
    "CSS",
  ]
  const backendSkills = ["Java", "C#", "C++", "C", "Kotlin","MySQL","MVVM"]

  return (
  <section id ="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="ma-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
                </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-1">
                I am a dedicated and adaptable fresh graduate passionate about developing efficient, user-friendly web applications. 
                I focus on writing clean, maintainable code while ensuring a seamless user experience. Always eager to explore new tools and frameworks, 
                I continuously expand my skill set to bring innovative ideas to life. Whether collaborating in a team or working independently, 
                I am committed to delivering high-quality solutions that meet project goals and deadlines.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                    key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold">🎓Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                          <strong>B.I.T. in Data Communication and Networking(07/2021-10/2024) CGPA:3.8/4.0</strong>
                      </li>
                      <li>
                      Relevant Coursework: C++ Programming | Java Programming | Databases | Cloud Computing | Routing
                      and Switching | Data Structures and Algorithms
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold">💼Work Experience</h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="py-2">Web Development Intern at Ventopia Sdn Bhd (07/2023-10/2023)</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                              <li>
                                  Created 3+ landing pages, leading to increasement in client engagement
                              </li>
                              <li>
                                  Work collaboratively with the team to efficiently complete client-requested tasks and ensure high-quality 
                                  outcomes.
                              </li>
                              <li>
                                  Contributed to the design and development of the company's in-house web portal system to optimize internal 
                                  operations.
                              </li>
                              <li>
                                  Implemented features such as a calendar, task lists, login page, and integrated database functionalities.
                              </li>
                          </ul>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
      </RevealOnScroll>
  </section>
  );
};
