import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillBar from "../components/SkillBar";

export default function About() {
  const skills = [
    { name: "Python", percentage: 85 },
    { name: "Linear Algebra", percentage: 80 },
    { name: "SPSS", percentage: 85 },
    { name: "Smartpls", percentage: 60 },
    { name: "Linear Classification", percentage: 72 },
    { name: "Multi Class Classification", percentage: 72 },
    { name: "SVM, KNN, Linear Regression", percentage: 70 },
    { name: "Scikit Learn", percentage: 70 },
    { name: "Numpy, Pandas, Seaborn, Matplotlib", percentage: 90 },
    { name: "Pytorch", percentage: 70 },
    { name: "Tensorflow and Keras", percentage: 75 },
    { name: "Neural Networks", percentage: 80 },
  ];

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative bg-linear-to-br from-gray-50 via-purple-50 to-indigo-50 pt-32 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Get to Know Me</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About{' '}
              <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <nav className="flex items-center justify-center space-x-2 text-gray-600">
              <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-purple-600 font-medium">About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div>
              <div className="relative">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-indigo-600 rounded-2xl transform -rotate-6"></div>
                
                {/* Image Container */}
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <Image
                    src="/img/kazi.jpeg"
                    alt="Kazi Tanvir"
                    width={600}
                    height={600}
                    className="rounded-xl w-full"
                    priority
                  />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-600">Active Researcher</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">2+</p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Introduction</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Hello, I&apos;m{' '}
                <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kazi Tanvir
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">Data Scientist & Machine Learning Engineer</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                I&apos;m a passionate data science, machine learning, and AI researcher dedicated to pushing the boundaries of artificial intelligence. 
                I spend most of my time developing innovative projects and conducting research that bridges the gap between theoretical concepts and real-world applications.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                With expertise spanning neural networks, computer vision, and natural language processing, I&apos;m committed to creating solutions 
                that make a meaningful impact. Every project is an opportunity to learn, innovate, and contribute to the AI community.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date of Birth</p>
                    <p className="font-semibold text-gray-900">May 16, 2001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href="tel:+8801322622121" className="font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      +880 1322 622121
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:kazitanvir.bangladesh@gmail.com" className="font-semibold text-gray-900 hover:text-purple-600 transition-colors text-sm">
                      kazitanvir.bangladesh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Connect with me:</span>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/kazi-tanvir/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-purple-600 hover:text-purple-600 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://github.com/KaziTanvir" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-purple-600 hover:text-purple-600 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/kazi.tanvir.hridoy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-purple-600 hover:text-purple-600 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-linear-to-br from-gray-50 via-purple-50 to-indigo-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">What I Love</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Research{' '}
              <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Interests
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-600 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-linear-to-br from-purple-100 to-indigo-100 group-hover:from-purple-600 group-hover:to-indigo-600 flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Stats */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Achievements</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Professional{' '}
                <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Highlights
                </span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                I am passionate and dedicated to my work, constantly pushing myself to learn new technologies and methodologies. 
                My focus is on creating impactful projects that solve real-world problems using cutting-edge AI and machine learning techniques.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-linear-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 text-center mb-2">2+</h4>
                  <p className="text-gray-600 text-center">Years of Experience</p>
                </div>
                
                <div className="bg-linear-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 text-center mb-2">15+</h4>
                  <p className="text-gray-600 text-center">Projects Completed</p>
                </div>
                
                <div className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 text-center mb-2">10+</h4>
                  <p className="text-gray-600 text-center">AI Research Areas</p>
                </div>
                
                <div className="bg-linear-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-900 text-center mb-2">12+</h4>
                  <p className="text-gray-600 text-center">Technical Skills</p>
                </div>
              </div>
            </div>
            
            {/* Right: Skills */}
            <div>
              <div className="sticky top-24">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Expertise</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
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

      <Footer />
    </div>
  );
}
