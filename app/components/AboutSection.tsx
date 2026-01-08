import SkillBar from "./SkillBar";

interface Skill {
  name: string;
  percentage: number;
}

interface AboutSectionProps {
  skills: Skill[];
}

const interests = [
  "Artificial Intelligence",
  "Deep Learning",
  "Machine Learning",
  "Computer Vision and Pattern Recognition",
  "Natural Language Processing",
  "Data Science",
  "Data Mining",
  "Human-Computer Interaction",
  "Innovation",
  "Entrepreneurship",
];

export default function AboutSection({ skills }: AboutSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: About Content */}
          <div>
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Passionate About Building{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              I am a dedicated data scientist and machine learning engineer with a passion for creating impactful projects. 
              My work focuses on artificial intelligence research, deep learning architectures, and building innovative solutions that solve real-world problems.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              With expertise in neural networks, computer vision, and natural language processing, I strive to push the boundaries of what&apos;s possible with AI. 
              Every project is an opportunity to learn, innovate, and make a difference.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-purple-100">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">2+</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-indigo-100">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">15+</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interests Tags */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 hover:bg-linear-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white text-gray-700 text-xs sm:text-sm rounded-full transition-all cursor-default border border-gray-200 hover:border-transparent"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:kazitanvir.bangladesh@gmail.com" className="hover:text-purple-600 transition-colors text-sm sm:text-base break-all">
                  kazitanvir.bangladesh@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+8801322622121" className="hover:text-purple-600 transition-colors text-sm sm:text-base">
                  +880 1322 622121
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Mirpur-1, Dhaka - 1216, Bangladesh</span>
              </div>
            </div>
          </div>
          
          {/* Right: Skills */}
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider">My Skills</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
