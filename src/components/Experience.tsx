import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'MACHINE LEARNING INTERN ',
    company: 'HRUTHA TECHNOLOGIES',
    period: 'Jan 2024 – Jun 2024',
    description: 'Completed an internship on “Credit Card Fraud Detection System” from 12 February 2024 to 30 April 2024',
    technologies: ['Python', 'Machine Learning', 'Data Science', 'Data Visualization'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Intership / Experience
          </h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experienceData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-12 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 z-10 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="ml-20 relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  {/* Apple-inspired subtle gradient top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-xl"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.period}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* End dot */}
          <div className="absolute bottom-0 left-12 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500"></div>
        </div>
        
        {/* Education background */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h3>
          
          <div className="inline-block mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              BSc in Computer Science
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              University of Mysore
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2021 - 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;