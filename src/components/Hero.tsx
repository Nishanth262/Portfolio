import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[75vh] bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-0">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5 md:pr-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              <span className="block transform transition-all duration-300 hover:translate-x-2">
                Hello, I'm
              </span>
              <span className="block mt-3 text-blue-600 dark:text-blue-400 transform transition-all duration-300 hover:translate-x-2">
                Nishanth Gowda R S
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              A passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Full Stack developer</span> crafting beautiful digital experiences with attention to detail.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/file/d/14Fdv7nHxIe6TbUkM2KN8ZZb7wPwtY3E3/view?usp=sharing" 
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:block md:w-2/5 mt-10 md:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-60"></div>
              
              {/* Profile image with gradient border */}
              <div className="relative z-full w-full h-full lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-xl">
                <div className="w-full h-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-40"></div>
                  <img 
                    src="https://avatars.githubusercontent.com/u/183916565?s=400&u=f153d7bf767eb6c97e634bfd6b6dd7214e4a0585&v=4" 
                    alt="Profile" 
                    className="w-full h-auto rounded-2x2 transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
        <div className="animate-bounce">
          <ArrowDown size={24} className="text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
