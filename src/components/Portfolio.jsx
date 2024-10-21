import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    image: '/portfolio.png',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    image: '/portfolio.png',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 3',
    image: '/portfolio.png',
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Portafolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
