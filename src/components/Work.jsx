import React from 'react';
import Covid19App from '../assets/projects_images/covid19.png';
import TodoApp from '../assets/projects_images/todoapp.png';
import tourApp from '../assets/projects_images/tourapp.png';
import MovieRating from '../assets/projects_images/movies.png';

const Work = () => {
  // Dummy data for projects
  const projectsData = [
    {
      id: 1,
      title: 'Covid-19 Data Visualization',
      image: Covid19App, // Replace with the actual image path
      detailsLink: 'https://covid19.tonmoychowdhury.com/public/', // Replace with the actual details link
      githubLink: 'https://github.com/tonmoy002/covid19', // Replace with the actual GitHub link
    },
    {
      id: 2,
      title: 'Tour app',
      image: tourApp, // Replace with the actual image path
      detailsLink: 'https://expense.tonmoychowdhury.com/login.php', // Replace with the actual details link
      githubLink: 'https://github.com/tonmoy002/tour_app', // Replace with the actual GitHub link
    },

    {
        id: 3,
        title: 'Todo app',
        image: TodoApp, // Replace with the actual image path
        detailsLink: 'https://todoapp.tonmoychowdhury.com', // Replace with the actual details link
        githubLink: 'https://github.com/tonmoy002/react-todo', // Replace with the actual GitHub link
      },
      {
        id: 4,
        title: 'Movies Rating',
        image: MovieRating, // Replace with the actual image path
        detailsLink: '', // Replace with the actual details link
        githubLink: 'https://github.com/tonmoy002/movies', // Replace with the actual GitHub link
      },

    // Add more projects as needed
  ];

  return (
    <div name="project" className='py-5 bg-gray-100 w-full md:h-screen'>
    <div className="container mx-auto h-full">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          {projectsData.map(project => (
            <div key={project.id} className='relative group container rounded-md overflow-hidden'>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className='w-full h-auto rounded-md transition-transform transform group-hover:scale-105'
              />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className='text-black font-bold mb-2'>  {project.title} </p>
                <div className='flex'>
                  {project.detailsLink && (
                    <a href={project.detailsLink} className='mx-2' target="_blank">
                      <button className='bg-blue-500 text-white py-2 px-4 rounded-md'>Live demo</button>
                    </a>
                  )}
                  <a href={project.githubLink} className='mx-2' target="_blank">
                    <button className='bg-gray-700 text-white py-2 px-4 rounded-md'>GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;