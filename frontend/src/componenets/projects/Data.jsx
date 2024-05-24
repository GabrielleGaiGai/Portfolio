import thesis from "../../assets/Thesis.pdf";

export const projectsData = [
    {
        name: "OTN-based Simulator",
        language: "Python, SQL, AQL",
        tools: "MySQL, ArangoDB, Machine Learning",
        intro: "A simulator aiming to replicate alarm propagation behaviors across various topology and traffic scenarios in optical transport network (OTN).",
        description: ["Designed and implemented a dynamic topology generator using Python to simulate diverse network conditions.",
            "Implemented an alarm generator capable of executing intricate queries against MySQL to simulate real-world scenarios.",
            "Developed advanced queries in ArangoDB to analyze network and alarm flow data.",
            "Utilized machine learning to train a binary classifier, predicting the likelihood of establishing alarm chains."
        ],
        source_code_link: "",
        demo_link: thesis
    },
    {
        name: "Fitness Trakcer",
        language: "JavaScript, HTML, CSS",
        tools: "React.js, Node.js, Express, MongoDB, Mongoose, Redux, RTK Query, JWT, Material UI",
        intro: "A full stack web application designed to help users log and monitor their workouts efficiently. ",
        description: ["Engineered a user authentication and authorization system employing JWT, ensuring secure and seamless user access.",
            "Designed and developed  a full stack mobile-responsive web application from scratch for tracking and managing workouts using MERN stack (React.js, Node.js, Express, and MongoDB).",
            "Utilized Redux and RTK Query to optimize data retrieval and manipulation, facilitating seamless interaction between frontend components and backend services."],
        source_code_link: "https://github.com/GabrielleGaiGai/fitness-tracker-mern/tree/main",
        demo_link: "https://fitness-tracker-mern-frontend.onrender.com"
    },
    {
        name: "Traffic Camera Installation Solver",
        language: "Python, C++",
        tools: "Inter-Process Communication",
        intro: "A program to strategically place security cameras at traffic intersections, aiming to maximize monitoring efficiency while minimizing the number of cameras needed. ",
        description: ["Developed a Python program to generate graphs from street manipulation commands (add, modify, remove).",
            "Devised a C++ program to place security cameras at street intersections, minimizing the required number of cameras.",
            "Developed a C++ driver program facilitating Inter-Process Communication between programs in various languages."
        ],
        source_code_link: "https://github.com/GabrielleGaiGai/traffic-camera-placement-solver",
        demo_link: ""
    }
]