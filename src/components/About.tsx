import { Code, Briefcase, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="md:flex md:items-center md:gap-12">
          {/* Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-40"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="About Me" 
                  className="w-full h-auto rounded-2xl transform transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Software developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm a computer science graduate with a strong foundation in Python, Java, database management. During my academic projects, I developed a keen interest in IT operations and support systems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Code size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Developer
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    I enjoy bringing ideas to life in the browser, where code and design merge into beautiful, functional applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Additional Information
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Languages: English (Professional), Kannada (Native), Hindi (Professional).
                  </p>
                  <p>
                  Social Activities: Student Council Vice President in GSC. 
                  </p>
                  <p>
                    Co-Curricular Activities: Fast learner and adaptable to new technologies, Leadership Roles, Cultural Clubs and Festival, Group Work Ability
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Lightbulb size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Always Learning
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Technology evolves rapidly, and I'm committed to growing with it. I'm constantly exploring new frameworks and tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;