import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[
     
  {
    title: 'GitHub Repository Management Tool ',
    date: 'September 2024',
    techstack: 'Bash scripting, GitHub API, Git, Linux (Ubuntu), AWS EC2 ',
    descriptions: [
      "Created a CLI-based tool for automating GitHub workflows, featuring seamless integration with the GitHub API." ,
      "Deployed on AWS EC2, with secure user authentication, role-based access control, and efficient pull request monitoring.",
      "Automated repository tracking and project management tasks, reducing manual effort by 20%.",
      "Achieved 300+ downloads on npm, simplifying repository workflows for developers.", 
    ],
    link: "https://www.npmjs.com/package/my-github-manager",
  },
  {
    title: 'Car Showroom ERP System',
    date: ' December 2024',
    techstack: ' React, Express.js, Node.js, MySQL, Tailwind CSS ',
    descriptions: [
      "Designed a modular ERP system to streamline car showroom operations" ,
      "Implemented a component-based architecture in React for efficient UI management and Tailwind CSS for consistent, responsive design.",
      "Integrated REST APIs with Express.js and Node.js for real-time operations and MySQL for secure, relational data management.",
      "Developed robust CRUD functionalities for employee, inventory, and sales tracking, ensuring seamless process automation.", 
    ],
    link: ""
  },
    {
        title: 'Process Scheduler',
        date: ' July 2024',
        techstack: 'React.js ',
        descriptions: [
          "Web-based process scheduler application built in React.js that allows users to visualize and analyze various CPU scheduling" ,
          "The application supports multiple scheduling algorithms, including: FCFS (First-Come, FirstServed), Round Robin, Priority Scheduling, SJF (Shortest Job First)",
          "Key Features : Gantt Chart Generation, Performance Metrics Table, Comparison of Algorithms.", 
        ],
        link: "https://scheduler-flax-five.vercel.app"
      },
      {
        title: 'Shadow Secret',
        date: ' February 2024',
        techstack: 'Full Stack Project',
        descriptions: [
          "Built a highly secure text-sharing platform with end-to-end AES-256 encryption and robust data validation in TypeScript." ,
          "Utilized Prisma ORM for optimized database queries and MongoDB for efficient, scalable data storage.",
          "Developed expiration-based message auto-deletion and advanced password-protected message sharing to enhance security.", 
        ],
        link: "https://secret-pass-lovat.vercel.app‍"
      },
      { 
        title: 'Gym App',
        date: 'November 2024',
        techstack: 'Typescript , Tailwind CSS',
        descriptions: [
          "Developed a landing page for gym app using Typescript and Tailwind " ,
          // "Implemented RESTful APIs using Node.js and Express.js to handle user authentication, data retrieval, and CRUD operations.",
          // "Tools and Libraries: Integrated tools such as Axios for HTTP requests, Bcrypt for password hashing, and Mongoose for MongoDB object modelling", 
        ],
        link: ""
      }

]