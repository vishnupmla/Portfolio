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
  username: "Vishnu Prathap",
  title: "Hi all, I'm Vishnu Prathap",
  subTitle: emoji(
    "An enthusiastic Software Developer 🚀 with a strong focus on Python programming, implementation engineering, Linux, and networking. Experienced in developing robust applications and systems using Python and various other modern technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NJpkioxBe-SKV5MLfWXh5V9nKDZT6ByA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vishnupmla",
  linkedin: "https://www.linkedin.com/in/vishnu-prathap-a121671b3/",
  gmail: "vshnprathaps@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/vishnu.prathap.10485",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Interested in full stack, focused in server side scripting mostly with python",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web apps"
    ),
    emoji("⚡ Hands-on experience with Django and FLask framework"),
    emoji(
      "⚡Mostly worked on Mechine Learning projects"
    ),
    emoji(
      "⚡Used with ORM method for creation of datatbase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
  
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College of Engineering Chengannur",
      logo: require("./assets/images/CEC-logo.png"),
      subHeader: "Master of Computer Application",
      duration: "September 2022 - April 2024",
      desc: "Scored an average acdemic score of 8.1 CGPA",
      descBullets: [
        "Part of college tech fest Web Development team",
        "Got oppertunity to work on live project"
      ]
    },
    {
      schoolName: "Catholicate College Pathanamthitta",
      logo: require("./assets/images/ccp.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "June 2018 - March 2021",
      desc: "Scored academic score of 7.3 CGPA",
      descBullets: ["Got 2nd Prize in Photography competition held during inter college tech fest"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
   
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Administrator",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/TCS.png"),
      date: "September 2021 – September 2022",
      desc: " 1 Year of experience at TCS in the Infrastructure domain, familiar with the IT industry and its practices. Demonstrated resilience and the ability to perform optimally in time-sensitive situations.",
      descBullets: [
        "Windows Server 2012 RT",
        "Network administrator role, configurations and troubleshooting",
        "Service Now",
        "Active Directory",
        "Shell scripting"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects that I worked on for academic purpose",
  projects: [
    {
      image: require("./assets/images/lg.png"),
      // projectName: "3D MotionBlend",
      projectDesc: "A real time motion capture system for rendering with 3D models",
      projBullets: [
        "Cross platform Desktop software",
        "Electron framework, three.js, Vue.js, Material Design UI",
        "BlazePose GHUM Algorithm - Based on CNN",
        "Google Mediapipe, WebXR for AR"
      ]
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/frg.png"),
      // projectName: "Forgery Detection System",
      projectDesc: "A web application which enables to detect forged images and logos",
      projBullets: [
        "Built upon Flask Framework",
        "Utlized MVC for front end",
        "CNN and RestNet50 algorithms",
      ]
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Joy Of computing using Python",
      subtitle:
        "NPTEL Certification in Python basic programming",
      image: require("./assets/images/nptel.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13P1ROuiKPDGN_J70Eas6B7gLsdr-ZZK8/view?usp=drive_link"
        },
        {
          name: "Link to course",
          url: "https://onlinecourses.nptel.ac.in/noc21_cs32/preview"
        }
      ]
    },
    {
      title: "Introduction To Internet Of Things",
      subtitle:
        "NPTEL certification in IoT fundamentals",
      image: require("./assets/images/nptel.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1iT08pX_7mnwNkK6FSnqVLXP4T14GEnBW/view?usp=drive_link"
        },
        {
          name: "Link to course",
          url: "https://onlinecourses.nptel.ac.in/noc22_cs53/preview"
        }
      ]
    },

    {
      title: "Windows Server 2012",
      subtitle: "Windows Server 2012: Install, Configure, and Administer Active Directory",
      image: require("./assets/images/in.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1-cW74d8mKgBsLGDeeD39LCF1hGDu8TZQ/view?usp=drive_link"},
      ]
    },

    {
      title: "Achievement",
      subtitle: "National level inter-college tech fest photography competition winner",
      image: require("./assets/images/ach.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1xqn-pICsb51GhSvbSXFXcF1tvHbobLY7/view?usp=drive_link"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: ["https://drive.google.com/file/d/1NJpkioxBe-SKV5MLfWXh5V9nKDZT6ByA/view?usp=sharing"],
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8157XXXXX2",
  email_address: "vshnprathaps@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "VISHNUP17107262", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
