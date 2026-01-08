import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillBar from "./components/SkillBar";
import ProjectGallery from "./components/ProjectGallery";

export default function Home() {
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

  const projects = [
    {
      title: "Breast Cancer Prediction Using SVM",
      image: "/Resource/1.png",
      link: "https://github.com/KaziTanvir/Build-a-Breast-Cancer-Prediction-Model-using-SVM",
      category: "Machine Learning"
    },
    {
      title: "Signature Verification using VGG-19",
      image: "/Resource/2.png",
      link: "https://github.com/KaziTanvir/signature-verification-using-VGG-19",
      category: "Machine Learning"
    },
    {
      title: "Fake news classifier using LSTM",
      image: "/Resource/3.png",
      link: "https://github.com/KaziTanvir/Fake-news-classifier-using-LSTM",
      category: "Machine Learning"
    },
    {
      title: "Handwritten Digit Recognition Using Neural Networks",
      image: "/Resource/4.png",
      link: "https://github.com/KaziTanvir/Handwritten-Digit-Recognition-Using-Neural-Networks",
      category: "Machine Learning"
    },
    {
      title: "Handwritten Digits recognition using Multi Task Models",
      image: "/Resource/5.png",
      link: "https://github.com/KaziTanvir/Handwritten-Digits-recognition-using-Multi-Task-Models",
      category: "Machine Learning"
    },
    {
      title: "Tweet Emotion Recognition using LSTM",
      image: "/Resource/13.png",
      link: "https://github.com/KaziTanvir/Tweet-Emotion-Recognition-using-LSTM",
      category: "Machine Learning"
    },
    {
      title: "Neural Style Transfer",
      image: "/Resource/6.png",
      link: "https://github.com/KaziTanvir/Coursera-KaziTanvir-Coursera-Deep-Learning-with-PyTorch-Neural-Style-Transfer",
      category: "Machine Learning"
    },
    {
      title: "STI demo website",
      image: "/Resource/8.png",
      link: "https://kazitanvir.github.io/skill-and-technology-institute-web/",
      category: "Web Development"
    },
    {
      title: "Product Email Template",
      image: "/Resource/9.png",
      link: "https://kazitanvir.github.io/product-mail-email-template/",
      category: "Web Development"
    },
    {
      title: "Stroke Prediction comparative analysis",
      image: "/Resource/14.png",
      link: "https://github.com/KaziTanvir/Stroke-Prediction-comparative-analysis-on-various-machine-learning-models",
      category: "Machine Learning"
    },
    {
      title: "Appon",
      image: "/Resource/12.png",
      link: "https://kazitanvir.github.io/Appon/",
      category: "Web Development"
    },
    {
      title: "Eye Care Marketer Email Template",
      image: "/Resource/11.png",
      link: "https://kazitanvir.github.io/eye-care-marketer-email-template/",
      category: "Web Development"
    },
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 pt-32 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-600">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kazi Tanvir
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                Data Scientist & Machine Learning Engineer
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m a data science, machine learning and AI researcher passionate about building innovative solutions. 
                I spend most of my time coding outstanding projects and conducting research in artificial intelligence.
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-semibold text-gray-900">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Projects</p>
                    <p className="font-semibold text-gray-900">15+ Completed</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  Get In Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-all"
                >
                  View Projects
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Follow me:</span>
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
            
            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl transform rotate-6"></div>
                
                {/* Image Container */}
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <Image
                    src="/img/kazi.jpeg"
                    alt="Kazi Tanvir"
                    width={500}
                    height={500}
                    className="rounded-xl w-full"
                    priority
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AI Researcher</p>
                      <p className="text-xs text-gray-500">Deep Learning Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-bold mb-4 text-gray-800">About Myself</h4>
              <p className="text-gray-600 mb-8">
                I am very passionate and dedicated with my work. I enjoy making new projects. I love to make awesome projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="text-3xl font-bold text-purple-600">2 Years</h4>
                  <p className="text-gray-600">Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
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

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 border-l-4 border-purple-600 pl-6">
              <div className="text-purple-600 font-semibold min-w-[180px]">Sept 2019 to Aug 2023</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">BSc in Computer Science and Engineering</h4>
                <p className="text-gray-600">American International University-Bangladesh (AIUB)</p>
              </div>
            </div>
            <div className="flex gap-6 border-l-4 border-purple-600 pl-6">
              <div className="text-purple-600 font-semibold min-w-[180px]">Mar 2017 to Aug 2019</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Higher Secondary Certificate (H.S.C)</h4>
                <p className="text-gray-600">GPA: 4.75 <br />Birshrestha Noor Mohammad Public College (English Version)</p>
              </div>
            </div>
            <div className="flex gap-6 border-l-4 border-purple-600 pl-6">
              <div className="text-purple-600 font-semibold min-w-[180px]">Jan 2015 to Mar 2017</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Secondary School Certificate (S.S.C)</h4>
                <p className="text-gray-600">GPA: 5.00 <br />Birshrestha Noor Mohammad Public College (English Version)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Latest Featured Projects</h2>
            <p className="text-gray-600">Who are in extremely love with eco friendly system.</p>
          </div>
          <ProjectGallery projects={projects} />
          <div className="text-center mt-12">
            <a
              href="https://github.com/KaziTanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
            >
              Load More Items
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
