/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nguyen Pham",
  title: "Hi!, I'm Nguyen Pham",
  subTitle: emoji(
    "I am an Artificial Intelligence engineer with hands-on experience in developing AI applications, particularly in the fields of Computer Vision and Natural Language Processing."
  ),
  resumeLink:
    "",//"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nguyenph17",
  linkedin: "https://www.linkedin.com/in/phamhoainguyen/",
  gmail: "dev.nguyenph@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'M AN AI/ML ENGINEER, I SPECIALIZE IN LEVERAGING THE POWER OF AI/ML TO TACKLE REAL-WORLD CHALLENGES.",
  skills: [
    emoji("⚡ Researching, developing and implementing AI/ML models and algorithms."),
    emoji("⚡ Collecting, cleaning, and preprocessing large datasets for training and testing."),
    emoji("⚡ Evaluating the performance of AI/ML models and making necessary improvements."),
    emoji("⚡ Staying up-to-date with the latest advancements in AI/ML technologies and incorporating them into projects."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "https://github.com/nguyenph17/vi-video-shift/assets/113575105/7d2b9419-7bf7-481b-aad7-96996e28c8a1"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "https://github.com/nguyenph17/vi-video-shift/assets/113575105/65847589-51c6-48e6-97fd-94093a4ac59f"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "https://github.com/nguyenph17/vi-video-shift/assets/113575105/6e1ea799-c921-4d16-be2f-541e6c97f780"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "https://github.com/nguyenph17/en2vi-video-translation/assets/113575105/73c49d5c-7adf-48a7-a118-7adc14332504"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "https://github.com/nguyenph17/en2vi-video-translation/assets/113575105/b33ffcf0-8480-4397-bdb6-f233aea9e86e"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "https://github.com/nguyenph17/vi-video-shift/assets/113575105/995e8d60-816f-42c5-bddb-2a03e964394c"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "https://github.com/nguyenph17/en2vi-video-translation/assets/113575105/deed2fd2-feed-4c85-a962-256b3b5e5773"
    }
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Information Technology, Vietnam National University, HCMC",
      logo: require("./assets/images/uit.png"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "September 2014 - Jan 2019",
      desc: ""
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "FUNiX - Online Learning Program",
      logo: require("./assets/images/elearning.webp"),
      subHeader: "Artificial Intelligence Engineering",
      duration: "April 2021 - December 2021",
      desc: ""
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pytorch/Tensorflow",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: []
  };
  // experience: [
  //   // {
  //   //   role: "AI/ML Engineer",
  //   //   company: "FPT Software",
  //   //   companylogo: require("./assets/images/fpt_software.png"),
  //   //   date: "Sep 2022 – Present",
  //   //   desc: "Participate in various AI application development projects such as Generative AI, Recommendation Systems, Reinforcement Learning, NLP and more.",
  //   //   descBullets: [
  //   //     "Research, and modify model architecture to meet the requirements of the problem.",
  //   //     "Apply pre-processed data techniques, data augmentation, image processing, and feature engineering for fine-tuning AI/ML models.",
  //   //     "Perform model evaluation, analyzing errors, and using that analysis to improve the accuracy of the model."
  //   //   ]
  //   // },
  //   // {
  //   //   role: "AI/ML Engineer",
  //   //   company: "Freelance",
  //   //   companylogo: require("./assets/images/freelance-logo.png"),
  //   //   date: "Nov 2021 – Sep 2022",
  //   //   desc: "Developing AI applications using computer vision such as OCR and AI Camera",
  //   //   descBullets: [
  //   //     "Fine-tuning and optimizing AI models to meet the requirements of the problem.",
  //   //     "Implementing algorithms, pre-processed data techniques, data augmentation.",
  //   //     "Deploying AI models to production for over 200 retail stores."
  //   //   ]
  //   // },
  //   {
  //     role: "APAC Regional WMS Developer",
  //     company: "Geodis Asia Pacific",
  //     companylogo: require("./assets/images/geodis.png"),
  //     date: "Jun 2018 – Jan 2022",
  //     desc: "Integrated the WMS system with other platforms such as Magento, Shopify, Cegid and the shipping provider using Restful API, Webhook, SOAP, and EDI",
  //     descBullets: [
  //       "Optimized SQL queries and stored procedures to improve system performance.",
  //       "Designed and developed scalable WMS modules to optimize warehouse operations.",
  //       "Contributed to the development and maintenance of a custom WMS solution."
  //     ]
  //   }
  // ]


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open-source Projects",
  subtitle: "These are several open-source projects that I have worked on.",
  projects: [
    {
      image: require("./assets/images/video_translator.png"),
      projectName: " English-Vietnamese Video Translation",
      projectDesc: "An powerful AI application that can translate English video to Vietnamese video",
      footerLink: [
        {
          name: "More Info",
          url: "https://github.com/nguyenph17/en2vi-video-translation"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/action_segmentation.png"),
      projectName: " E2E-Action-Segmentation",
      projectDesc: "An AI model that can detect and segment human actions in videos",
      footerLink: [
        {
          name: "More Info",
          url: "https://github.com/nguyenph17/E2E-Action-Segmentation"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Coursera's Certificates",
      subtitle: "Certifications issued by Coursera",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Machine Learning",
          url: "https://coursera.org/share/2d193a7f5b4c7060fded0c72d700641b"
        },
        {
          name: "Improving Deep Neural Networks",
          url: "https://coursera.org/share/b1cdc03d279a5016833bb443b3feeaf7"
        },
        {
          name: "Neural Networks and Deep Learning",
          url: "https://coursera.org/share/563a44b8e6515fb0bd883e2e21bd4548"
        },
        {
          name: "Structuring Machine Learning Projects",
          url: "https://coursera.org/share/c8d7d9f030f6eb4a64ae4f2a7af111fc"
        }
      ]
    },
    {
      title: "NVIDIA's DLI Certificates",
      subtitle: "Certifications issued by NVIDIA",
      image: require("./assets/images/Nvidia_logo.svg.png"),
      imageAlt: "NVIDIA Logo",
      footerLink: [
        {
          name: "Getting Started with AI on Jetson Nano",
          url: "https://courses.nvidia.com/certificates/82fa38a6dd444e7ab2580474154214f6/"
        },
        {
          name: "Building Video AI Applications at the Edge on Jetson Nano",
          url: "https://courses.nvidia.com/certificates/952e706cd6054309aa62a9361a0dd4c1/"
        }
      ]
    },

    {
      title: "Udemy's Certificates",
      subtitle: "Certifications issued by Udemy",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Python Deep Dive",
          url: "https://www.udemy.com/certificate/UC-e0d5f106-acf3-4a2b-a4a5-4e2bd5fc9254/"
        },
        {
          name: "LlamaIndex: Train ChatGPT (& other LLMs) on Custom Data", 
          url: "https://www.udemy.com/certificate/UC-5734ca73-ce97-47a8-9e0d-35752bd95a01/"
        },
        {
          name: "ChatGPT, Midjourney, DALL-E 3 & APIs - The Complete Guide",
          url: "https://www.udemy.com/certificate/UC-2c738887-98c0-4450-94a6-ab42847e0445/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Professional Projects",
  subtitle:
    "Projects that were undertaken during my employment tenure.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Chatbot for Public Administration",
      description:
        "Developing Chatbot applications that can assist users in searching for information and answering their questions using RAG. We use both closed-LLM and open-LLMs."
    },
    {
      url: "",
      title: "Learning Material Recommendation System",
      description:
        "Developing a platform powered by artificial intelligence that aims to support students in their learning journey through the use of Reinforcement Learning techniques."
    },
    {
      url: "",
      title: "Generative AI: Japanese Handwriting Synthesis",
      description: "Building a Generative AI application capable of generating unlimited images of Japanese handwriting for training the OCR model."
    },
    // {
    //   url: "",
    //   title: "AI Camera for Retail Store",
    //   description:
    //     "Building an AI camera system that can detect and track customers in a retail store, analyze their behavior, and provide insights to store owners."
    // },
    {
      url: "",
      title: "Technical Drawing OCR",
      description:
        "Building an Optical Character Recognition (OCR) system specifically designed for extracting text from technical drawings."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi !!!",
  number: "+84 988 588 ***",
  email_address: "nguyenph.work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
