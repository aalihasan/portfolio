import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// ✅ Image imports
import subscribe from '../../assets/SubscriptionBox.png';
import garden from '../../assets/garden.png'
import rannaghor from '../../assets/rannaghor.png'

const projects = [
  {
    id: 1,
    name: 'SubscriptionBox',
    image: subscribe,
    tech: ['React', 'Tailwind', 'Firebase', 'MongoDB'],
    liveLink: 'https://react-authentication-aalihasan.web.app/',
    github:
      'https://github.com/programming-hero-web-course1/b11a9-react-authentication-aalihasan',
  },
  {
    id: 2,
    name: 'GreenGarden ',
    image: garden,
    tech: ['React', 'Express', 'Firebase', 'MongoDB'],
    liveLink: 'https://gardening-community-988e1.web.app/',
    github:
      'https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-aalihasan',
    github2:
      'https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-aalihasan',
  },
  {
    id: 3,
    name: 'RannaGhor',
    image: rannaghor,
    tech: ['React', 'Firebase', 'Tailwind CSS', 'MongoDB'],
    liveLink: ' https://restaurant-management-21bba.web.app/',
    github:
      'https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-aalihasan',
    githu2:
      'https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-aalihasan',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="card bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <figure className="px-4 pt-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl h-48 object-cover w-full"
                />
              </figure>

              <div className="card-body flex flex-col justify-between">
                <div>
                  <h3 className="card-title text-xl text-blue-700 dark:text-blue-300">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 my-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View More
                  </Link>

                  <div className="flex gap-3 text-xl">
                    <div className="tooltip tooltip-top" data-tip="Live Site">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-700"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>

                    <div className=" flex gap-1">
                      <div
                        className=" tooltip tooltip-top"
                        data-tip="GitHub Repo client"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-blue-700"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div
                        className=" tooltip tooltip-bottom"
                        data-tip="GitHub Repo server"
                      >
                        <a
                          href={project.github2}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-blue-700"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
