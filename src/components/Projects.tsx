import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'RFID Attendance System',
    description: 'A full-featured online shopping experience with cart functionality, user authentication, and payment processing.',
    image: 'https://www.iitms.co.in/rfid-based-attendance-system/img/what-is-rfid-img.webp',
    tags: ['Python'],
    liveUrl: 'https://github.com/Nishanth262/RFID-based-Attendance-System-using-Arduino',
    githubUrl: 'https://github.com/Nishanth262/RFID-based-Attendance-System-using-Arduino/blob/main/Source%20code%20of%20Arduino%20rfid%20based%20Attendance%20System.py',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Real-time weather forecasting application with location-based data and beautiful visualizations.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['OpenWeather API', 'CSS', 'HTML', 'JavaScript'],
    liveUrl: 'https://github.com/Nishanth262/weather_project',
    githubUrl: 'https://github.com/Nishanth262/weather_project/blob/main/index.html',
  }
];

const filterCategories = ['All'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with attention to detail and a focus on user experience.
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Project in GitHub
                  </a>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:underline font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Hover overlay gradient */}
              {/* <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-60' : ''
                }`}
              ></div> */}
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-12 text-center">
          <a 
            href="Nishanth" 
           
          >
        
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default Projects;