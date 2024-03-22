import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Shafi Consultancy Limited',
      years: 'Sept 2017 - July 2019',
      mainTech: ['PHP', 'Laravel'],
      technologies: ['JavaScript', 'MySql', 'HTML', 'CSS', 'Git'],
    },
    {
      title: 'Web Developer Intern',
      company: 'Shafi Consultancy Limited',
      years: 'May 2017 - August 2017',
      mainTech: ['PHP'],
      technologies: ['JavaScript', 'MySql',  'HTML', 'CSS'],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work mb-8"
              date={experience.years}
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-briefcase"></i>}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-lg">{experience.company}</h4>
              <div className="flex flex-wrap mt-2">
                {experience.mainTech.map((tech, i) => (
                  <span key={i} className="bg-blue-500 text-white py-1 px-2 mr-2 mb-2 rounded">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                {experience.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-300 text-gray-700 py-1 px-2 mr-2 mb-2 rounded">{tech}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;