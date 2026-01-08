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
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <div className="flex items-center justify-center space-x-2 text-purple-200">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span>About Me</span>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Image
                src="/img/kazi.jpeg"
                alt="Kazi Tanvir"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="lg:col-span-3">
              <h6 className="text-purple-600 mb-2">Hello Everybody, i am</h6>
              <h3 className="text-4xl font-bold mb-2 text-gray-800">Kazi Tanvir</h3>
              <h4 className="text-2xl text-purple-600 mb-4">Data Scientist & Machine Learning Engineer</h4>
              <p className="text-gray-600 mb-6">
                I&apos;m Tanvir, a data science, machine learning and AI researcher. I spend most of my time coding outstanding projects or doing studies for my research.
              </p>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">My Interests</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-2">▸</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3">📅</span>
                  16th May, 2001
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📞</span>
                  <a href="tel:+8801322622121" className="hover:text-purple-600 transition-colors">+880 1322 622121</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✉️</span>
                  <a href="mailto:kazitanvir.bangladesh@gmail.com" className="hover:text-purple-600 transition-colors">kazitanvir.bangladesh@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🏠</span>
                  296/2, 1st Colony, Mazar Road, Mirpur-1, Dhaka - 1216
                </li>
              </ul>

              <div className="flex space-x-4">
                <a href="https://www.facebook.com/kazi.tanvir.hridoy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/kazi-tanvir/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/KaziTanvir" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-bold mb-4 text-gray-800">About Myself</h4>
              <p className="text-gray-600 mb-8">
                I am very passionate and dedicated with my work. I enjoy making new projects. I love to make awesome projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="text-3xl font-bold text-purple-600">2 Years</h4>
                  <p className="text-gray-600">Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="text-3xl font-bold text-purple-600">15+</h4>
                  <p className="text-gray-600">Total Projects</p>
                </div>
              </div>
            </div>
            <div>
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
