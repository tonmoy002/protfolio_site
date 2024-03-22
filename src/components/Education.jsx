import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    const educations = [
      {
        university: 'Frankfurt University of Applied Sciences',
        address : 'Frankfurt am Main, Germany',
        degree: 'Master\'s',
        subject: 'High Integrity Systems (Computer Science)',
        passing_year : 'Completed in March 2024'
      },
      {
        university: 'Metropolitan University',
        address : 'Sylhet, Bangladesh',
        degree: 'Bachelor',
        subject: 'Computer Science & Engineering',
        passing_year : 'Completed in June 2015'
      },
      // Add more educations as needed
    ];
  
    return (
      <section name="education" className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
          <VerticalTimeline>
            {educations.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work mb-8"
                date={experience.passing_year}
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={<i className="fas fa-briefcase"></i>}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.university}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg">{experience.address} </h4>
                <h4 className="vertical-timeline-element-subtitle text-lg">{experience.degree} in {experience.subject}</h4>
                <div className="flex flex-wrap mt-2">
                  
                </div>
                <div className="mt-4">
                  
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    );
  };
  
  export default Education;