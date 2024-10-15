import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";
export const HERO_CONTENT = `I am an AI/ML enthusiast passionate about exploring the latest advancements in Artificial Intelligence and Machine Learning, particularly in Computer Vision and Generative AI. My expertise extends to deep learning, image processing, and deploying intelligent systems in real-world applications. I also enjoy web development and constantly look for ways to integrate AI-driven solutions into dynamic, user-centric web experiences.`;

export const ABOUT_TEXT = `I am a passionate B.Tech (Hons) Computer Science student at UPES Dehradun, specializing in AI/ML. With a strong foundation in machine learning, computer vision,Generative AI and NLP. I have contributed to impactful projects like breast cancer detection, e-learning recommendation systems, and AI-powered story generators. I have interned at IBM, KEK-CERN, and ePIC where I worked on advanced R&D projects. I am also a published researcher with technical papers in deep learning and transfer learning. My technical expertise spans TensorFlow, PyTorch, React.js, and more.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Distributed R&D Intern",
    company: "KEK-CERN Belle II",
    description: `Collaborated with top global laboratories, including KEK in Japan and CERN in Europe, to advance the Belle2 experiment; contributed to groundbreaking research efforts that enhanced particle physics understanding on an international level. Using tools such as gbasf2, python, Jira, others to assist physicists to run their programs on the distributed belle grid and improve the efficiency by 50%`,
    technologies: ["Python", "Jira", "gbasf2", "Cuda", "REST-APIs"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Project Intern",
    company: "IBM",
    description: `Development of an E-learning Recommendation system for recommending personalised courses to learners based on their past choices and search. Make it 2X more efficient and easy for user to choose courses. Created a fully functional customer service AI bot that automated responses and reduced average handling time by 70%, empowering the customer service team to manage 3X more inquiries daily without additional resources.`,
    technologies: ["Python", "AI/ML", "NLP", "TensorFlow", "PyTorch", "ReactJs", "REST APIs", "MongoDB"],
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Software Intern",
    company: "DivInPro",
    description: `Worked on Breast Cancer Detection through images. Utilising Computer Vision technology by using various models like ResNet50, XceptionNet, MobileNetV2, EffectiveNetB7, Diffusion model and VIT. Published a research paper on same.`,
    technologies: ["Python", "Big Data", "Computer Vision", "Streamlit", "Keras/TensorFlow", "REST APIs", "Deep Learning Models", "Research"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Research Intern",
    company: "UPES",
    description: `Collaborated with a team of 2 for diversifying research on machine learning, deep learning, and transfer learning. Authored two technical papers and presented them at an international conference by UNI-TEAS.`,
    technologies: ["Machine Learning", "Computer Vision", "Transfer Learning", "Research"],
  },
];

export const PROJECTS = [
  {
    title: "Sach-AI",
    image: project1,
    description:
      " Developed a web application for deepfake detection across audio, video, and image domains using advanced feature extraction techniques and classification models.",
    technologies: ["HTML", "CSS", "JS","Feature Extraction", "LSTM", "ResNext", "CNN", "DenseNet121"],
    githubUrl: "https://github.com/SubhangiSati/Sach-AI",
  },
  {
    title: "KathaSangam",
    image: project2,
    description:
      "An AI-powered platform for generating imaginative stories based on user inputs, including text and images, with options for audio output and various themes.",
    technologies: ["NLP", "Python", "GenAI", "Text Generation", "Image Processing", "Streamlit", "API"],
    githubUrl:"https://github.com/SubhangiSati/KathaSangam-AI-Story-Generator",
  },
  {
    title: "Mental Health Chatbot",
    image: project3,
    description:
      "A mental health chatbot designed to support users through natural language processing, providing personalized responses and resources.",
    technologies: ["NLP", "ML", "Python", "API", "Streamlit"],
    githubUrl:"https://github.com/SubhangiSati/CogniCare-Mental-Health-Chatbot",
  },
  {
    title: "Professional Resume Creator",
    image: project4,
    description:
      "A web application that allows users to create and customize their professional resumes easily, featuring various templates and formats for download.",
    technologies: ["HTML", "CSS", "React.js", "JS", "Redux", "JSON"],
    githubUrl:"https://github.com/SubhangiSati/Professional-Resume-Creator",
  },
  {
    title: "Fashion Assistant",
    image: project5,
    description:
      "An AI-driven fashion assistant that recommends outfits based on user preferences, integrating user input with fashion trends..",
    technologies: ["HTML", "CSS", "JS", "Flask", "ML", "Python"],
    githubUrl:"https://github.com/SubhangiSati/Fashion-Assistant",
  },
  {
    title: "Hand Gesture Recognition System",
    image: project6,
    description:
      "A deep learning system that recognizes hand gestures using TensorFlow and Keras, involving data preprocessing, model building, and evaluation.",
    technologies: ["Python", "Tensorflow", "Keras", "CNN", "Computer Vision"],
    githubUrl:"https://github.com/SubhangiSati/Hand-Gesture-Recognition-System",
  },
  {
    title: "HealthSafe Web3 powered Healthcare Data Management",
    image: project7,
    description:
      "A Web3 application for managing healthcare data securely using blockchain technology, aimed at enhancing data privacy and accessibility.",
    technologies: ["Web3.js", "Blockchain", "Smart Contracts", "React.js", "Node.js", "MongoDB"],
    githubUrl:"https://github.com/SubhangiSati/HealthSafe-Web3-powered-Heathcare-data-management",
  },
];

export const CONTACT = {
  email: "me@example.com",
};
