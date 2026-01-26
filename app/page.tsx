import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";

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

  const interests = [
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

  const interestsList = [
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
      
      <HeroSection />
      <AboutSection skills={skills} />
      <EducationSection />
      <ProjectsSection />

      <Footer />
    </div>
  );
}
