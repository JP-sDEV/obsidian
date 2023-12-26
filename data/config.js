export const meta = {
  title: 'JP-sDEV - Web Developer',
  description:
    "Hi! I'm Jon. I'm a full stack developer, currently using ReactJS, NodeJS, and MongoDB."
};

export const hero = {
  title: "Hi! I'm Jon.",
  desc: '3rd Year Software Development @ Seneca College, seeking Summer 2024 Internship Opportunities.'
};

export const projects = {
  title: 'Projects',
  desc: 'Applications that I have contributed to, or developed on my own.',
  projects: [
    {
      title: 'Weather.me',
      description:
        'Recommends EDC based on current and future weather conditions.',
      link: 'https://weather-me-three.vercel.app/',
      github: 'https://github.com/JP-sDEV/Weather.me',
      tech: ['ReactJS', 'NextJS', 'TailWindCSS']
    },
    // {
    //   title: '.Shorty (URL Shortener, bit.ly clone)',
    //   description: 'Shorten and track web traffic of an URL.',
    //   link: 'https://shorty-urlshort.herokuapp.com/',
    //   github: 'https://github.com/JP-sDEV/url_shortener',
    //   tech: ['ReactJS', 'NodeJS', 'MongoDB', 'GCP', 'MaterialUI']
    // },
    {
      title: 'Art Outside',
      description: 'Online art exhibition at the University of Toronto.',
      link: 'https://2020.artsideout.ca/#/',
      github: 'https://github.com/csecutsc/artsideout_app',
      tech: ['Flutter', 'Dart']
    }
    // {
    //   title: 'COVID-19 Toronto Tracker',
    //   description: 'View COVID-19 hotspots, and nearby clinics in Toronto.',
    //   link: 'https://share.streamlit.io/jp-sdev/covid19_webapp/main/main.py',
    //   github: 'https://github.com/JP-sDEV/covid19_webapp',
    //   tech: ['Python', 'Pandas', 'Numpy', 'Streamlit']
    // }
    // {
    //   title: 'Diabetic Retinopathy Classifier',
    //   description:
    //     'Medical application of MobileNetv4 to determine the severity of Diabetic Retinopathy.',
    //   link: 'https://share.streamlit.io/jp-sdev/diabetic_retinopathy_web_app/main/app.py',
    //   github: 'https://github.com/JP-sDEV/Diabetic_Retinopathy_Web_App',
    //   tech: ['Python', 'TensorFlow', 'Pandas', 'Numpy', 'Streamlit']
    // }
  ]
};

export const experience = {
  title: 'Experience',
  desc: 'Past Internships and Hackathons',
  experiences: [
    {
      title: 'Software Developer',
      company: 'Toronto Transit Commission (TTC)',
      description: [
        'Developed and tested auditing systems, reducing security incidents by 10%',
        'Automated monthly job vacancy reports, reducing onboarding time by ~15%'
      ],
      link: '',
      github: '',
      tech: ['SQL', 'JavaScript']
    },
    {
      title: 'Pride Match',
      company: 'Liquid Hacks',
      description: [
        'Winner of "Best Validation Project" at the Team Liquid PrideMakers Hackathon',
        'Incorporated Firebase authentication into a React frontend application.',
        'Designed and implemented navigation elements in React'
      ],
      link: '',
      github: '',
      tech: ['ReactJS', 'JavaScript', 'Firebase', 'HTML', 'CSS']
    }
  ]
};

export const stack = {
  title: 'Technologies',
  stack: [
    'C',
    'C++',
    'SQL',
    'JavaScript',
    'TypeScript',
    'Python',
    'Git',
    'ReactJS',
    'NodeJS',
    'PostgreSQL',
    'MongoDB',
    'HTML',
    'CSS'
  ]
};

export const contact = {
  title: 'Contact Me',
  email: 'contact.jon.p@gmail.com',
  github: 'JP-sDEV',
  twitter: 'jp_sdev'
};

export const education = {
  title: 'Education',
  education: [
    {
      school: 'Seneca College',
      start_year: '2022',
      graduation_year: '2025',
      majors: 'Computer Programming and Analysis'
    },
    {
      school: 'University of Toronto',
      start_year: '2015',
      graduation_year: '2019',
      majors: 'Biology, Applied Statistics'
    }
  ]
};
