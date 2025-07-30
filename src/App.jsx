import { useState } from "react";
// src/App.jsx

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const researchPapers = [
    {
      title: "BAY-MED: Bayesian Approximation for Post-Hoc Uncertainty in Medical Imaging",
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI 2025)",
      status: "Published",
      year: "2025"
    },
    {
      title: "Brain MRI Segmentation Using U-Net and SegNet: A Comparative Study Across Modalities with Robust Loss Functions",
      venue: "12th International Conference on Bioimaging (BIOIMAGING 2025)",
      status: "Best Paper Candidate",
      year: "2025"
    },
    {
      title: "Softmax-Weighted Pseudo-Label Refinement for Enhancing Robustness to Label Noise",
      venue: "Medical Imaging with Deep Learning (MIDL 2025)",
      status: "Under Review",
      year: "2025"
    },
    {
      title: "Uncertainty-Aware Out-of-Distribution Detection in Medical Imaging Using Gaussian Mixture Models and Test-Time Augmentation",
      venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI 2025)",
      status: "Under Review",
      year: "2025"
    },
    {
      title: "Multi-Modal Information Fusion for Classification of Kidney Abnormalities",
      venue: "IEEE International Symposium on Biomedical Imaging Challenges (ISBIC 2021)",
      status: "Published",
      year: "2021"
    },
    {
      title: "HRV parameters as a biomarker of preterm infant and normal sinus rhythm ECG",
      venue: "International Journal of Computer Engineering and Applications",
      status: "Published",
      year: "2018"
    }
  ];
  const projects = [
    {
      title: "US and MRI Fusion in Prostate Diagnostics and Operation",
      description: "Winner of Qualcomm Innovation Fellowship India Challenge 2021. Developed fusion algorithms for combining ultrasound and MRI data for improved prostate diagnostics.",
      supervisor: "Prof. Amit Sethi and Ashutosh Gore (Qualcomm)",
      period: "March 2021 - May 2022",
      achievement: "Winner, Qualcomm Innovation Fellowship India Challenge 2021"
    },
    {
      title: "RSNA-MICCAI Brain Tumor Radiogenomic Classification 2021",
      description: "Group research project focused on brain tumor classification using radiogenomic data and deep learning models.",
      supervisor: "Prof. Amit Sethi",
      period: "July 2021 - Nov 2021"
    },
    {
      title: "Minimization of Annotation Effort through Interactive Segmentation in Histopathology Images",
      description: "Developed interactive segmentation methods to reduce annotation burden in histopathology image analysis.",
      supervisor: "Prof. Amit Sethi",
      period: "Dec 2020 - April 2021"
    },
    {
      title: "Handwritten Digit Recognition System Implemented on TI Microcontroller",
      description: "Implemented a complete digit recognition system on embedded hardware with optimized neural network deployment.",
      supervisor: "Prof. V. Rajbabu",
      period: "May 2019 - Dec 2019"
    }
  ];
  const skills = {
    Languages: ["Python", "Matlab", "C"],
    Frameworks: ["PyTorch", "TensorFlow", "Keras"],
    Libraries: ["OpenCV", "Pandas", "scikit-learn", "MONAI", "SMP", "Llama-index"],
    Tools: ["LaTeX", "GitHub", "BitBucket", "Docker", "Python Virtual Environment", "Gnuplot", "MATLAB", "Microsoft Office"]
  };
  const education = [
    {
      degree: "PhD (Electrical Engineering)",
      institution: "IIT Bombay",
      year: "2019 - Ongoing",
      cpi: "8.21"
    },
    {
      degree: "ME (Biomedical Engineering)",
      institution: "Jadavpur University",
      year: "2016 - 2018",
      cpi: "8.0"
    },
    {
      degree: "B.Tech (Electronics and Communication)",
      institution: "NIT Durgapur, WB",
      year: "2011 - 2015",
      cpi: "6.91"
    }
  ];
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ==== LOCAL BUILD TEST START ==== */}
      <div className="bg-blue-500 text-white p-4 text-center font-bold">
        🎉 Local Tailwind build is working! 🎉
      </div>
      {/* ==== LOCAL BUILD TEST END ==== */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Gouranga Bala</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'research', 'projects', 'experience', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Gouranga Bala
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                PhD Candidate in Electrical Engineering
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I develop machine learning and computer vision methods for medical image analysis, 
                with a focus on uncertainty quantification, robust learning from noisy labels, 
                and multimodal fusion for improved diagnostic accuracy. My work aims to bridge 
                the gap between cutting-edge AI research and clinical applications.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-blue-800">Computer Vision</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-green-800">Medical Imaging</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-purple-800">Uncertainty Quantification</span>
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-orange-800">Self-Supervised Learning</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>gouranga.bala23@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>8910827560</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span>
                  <span>github.com/AnGoraGou</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                  GB
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>IIT Bombay, Powai</p>
                  <p>Maharashtra, India - 400076</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Research Interests */}
      <section id="research" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Computer Vision & Image Processing",
              "Uncertainty Quantification in ML Predictions",
              "Learning from Noisy Labeled Data",
              "Machine Learning in Medical Image Analysis",
              "Self-Supervised Learning for Computer Vision",
              "AI Deployment on Hardware",
              "Multimodal Information Fusion",
              "Interactive Segmentation Methods"
            ].map((interest, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-lg text-gray-800">{interest}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Research Publications */}
      <section id="publications" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Publications</h2>
          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-2">{paper.venue}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-500">Year: {paper.year}</span>
                  <span className={`font-semibold ${
                    paper.status === 'Published' ? 'text-green-600' :
                    paper.status === 'Best Paper Candidate' ? 'text-blue-600' :
                    'text-orange-600'
                  }`}>
                    {paper.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.achievement && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                      {project.achievement}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Supervisor:</strong> {project.supervisor}</p>
                  <p><strong>Period:</strong> {project.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {/* Industry Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Experience</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">CV/ML Engineer</h4>
                      <p className="text-gray-600">iKites Technologies Private Limited (Part-Time)</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">June 2024 - January 2025</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Artificial Intelligence Consultant</h4>
                      <p className="text-gray-600">Topia Life Sciences</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">October 2022 - December 2022</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Research and Development Intern</h4>
                      <p className="text-gray-600">Qure.ai</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">December 2021 - April 2022</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Teaching Assistance */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Assistance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { course: "Introduction to Machine Learning (EE769)", supervisor: "Prof. A. Sethi", period: "Jan 2021 - May 2021, Jan 2022 - May 2022, Jan 2023 - May 2023" },
                  { course: "Digital Image Processing (EE610)", supervisor: "Prof. A. Sethi", period: "July 2021 - Dec 2021, July 2022 - Dec 2022" },
                  { course: "Signal Processing (EE229)", supervisor: "Prof. S. R. B. Pillai", period: "July 2020 - Dec 2020" },
                  { course: "DSP System Design and Implementation (EE750)", supervisor: "Prof. P. Rao", period: "Jan 2020 - May 2020" }
                ].map((ta, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900">{ta.course}</h4>
                    <p className="text-sm text-gray-600">Supervisor: {ta.supervisor}</p>
                    <p className="text-sm text-gray-500">{ta.period}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Pedagogical Activities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pedagogical Activities</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Delivered a talk on Gradient Class Activation Map (GradCAM) at Faculty Development Program, Army Institute of Technology, Pune, August 31, 2021</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800">Delivered a talk on Transfer Learning in Medical Image Analysis at Faculty Development Program, Techno India College, Kolkata, January 21, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                <div className="text-sm text-gray-600">
                  <p>{edu.year}</p>
                  <p className="text-gray-500">CPI: {edu.cpi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technical Skills */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div key={index} className="text-gray-700 text-sm py-1 border-b border-gray-100 last:border-0">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements & Positions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">🏆</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Qualcomm Innovation Fellowship</h3>
                      <p className="text-gray-600 text-sm">Winner of Qualcomm Innovation Fellowship India Challenge 2021</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">🎓</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Excellence in Teaching Assistantship</h3>
                      <p className="text-gray-600 text-sm">Awarded by EE Department, IIT Bombay, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Positions of Responsibility */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Positions of Responsibility</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">⚙️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">System Administrator</h3>
                    <p className="text-gray-600 text-sm">Medical Imaging, Deep Learning and Artificial Intelligence Lab (MeDAL), Department of Electrical Engineering, IIT Bombay</p>
                    <p className="text-gray-500 text-sm mt-1">2020 - Present</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800">Mentorship</h4>
                  <p className="text-gray-600 text-sm">Mentored graduate and research students, including Master's students and Supervised Research Exposures (SREs)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interests */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Interests & Hobbies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🎨 Creative Pursuits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sketching and painting</li>
                <li>• Playing guitar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                ⚽ Sports
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Member of Snatakk Football Club, IIT Bombay (MDFA 2nd Division)</li>
                <li>• Table tennis and badminton enthusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Gouranga Bala</h3>
          <p className="text-gray-300 mb-6">PhD Candidate in Electrical Engineering, IIT Bombay</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="mailto:gouranga.bala23@gmail.com" className="hover:text-white transition-colors">
              📧 gouranga.bala23@gmail.com
            </a>
            <span>📱 8910827560</span>
            <a href="https://github.com/AnGoraGou" className="hover:text-white transition-colors">
              🔗 github.com/AnGoraGou
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            © 2025 Gouranga Bala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default App;
