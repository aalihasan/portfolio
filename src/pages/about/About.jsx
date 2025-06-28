import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-6 " id="about" data-aos="fade-up">
      <div className="max-w-7xl mx-auto bg-white dark:bg-base-200 p-8 rounded-lg shadow-md transition-colors duration-500">
        <h2 className="text-3xl md:text-4xl font-bold   mb-6 text-center ">
          About Me
        </h2>

        <div className="space-y-5 text-justify text-white dark:text-gray-600  text-lg leading-relaxed">
          <p>
            Hello! I'm{' '}
            <span className="font-semibold text-blue-600">Hasan Ali</span>, a
            passionate and self-motivated Web Developer from Bangladesh.
            I'm currently pursuing my BSc in Computer Science and Engineering,
            and I expect to graduate in <strong>August 2026</strong>.
          </p>

          <ul className="list-disc list-inside pl-3">
            <li >
              I started my journey with <strong>HTML, CSS</strong> and quickly
              advanced to{' '}
              <strong>JavaScript, React, Firebase, Node.js, MongoDB</strong>,
              and <strong>Express.js</strong>.
            </li>
            <li>
              I enjoy building modern, responsive, and user-friendly web
              applications that solve real-world problems.
            </li>
            <li>
              I’m particularly passionate about frontend development and also
              enjoy working on backend APIs and authentication logic.
            </li>
            <li>
              My goal is to become a skilled MERN stack developer and contribute
              to impactful projects.
            </li>
          </ul>

          <p>
            Besides coding, I love <strong>playing football</strong>, exploring
            new technologies, and spending time learning and sharing knowledge
            within the dev community. I'm a curious learner and enjoy every
            opportunity to grow personally and professionally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
