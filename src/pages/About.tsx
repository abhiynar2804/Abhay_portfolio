import AboutHero from '../components/about/AboutHero';
import Journey from '../components/about/Journey';
import Education from '../components/about/Education';
import TechnicalSkills from '../components/about/TechnicalSkills';
import Achievements from '../components/about/Achievements';
import Resume from '../components/about/Resume';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] pb-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <AboutHero />
        <Journey />
        <Education />
        <TechnicalSkills />
        <Achievements />
        <Resume />
      </div>
    </div>
  );
}

// import { useEffect, useRef } from 'react';
// import {
//   Code2,
//   Database,
//   Globe,
//   Terminal,
//   Wrench,
//   Download,
//   Calendar,
//   MapPin,
//   GraduationCap,
//   Trophy,
//   Briefcase,
//   ChevronRight,
//   FileText
// } from 'lucide-react';
// import './about.css';

// interface SkillCategory {
//   title: string;
//   icon: React.ReactNode;
//   skills: string[];
// }

// interface Achievement {
//   icon: React.ReactNode;
//   value: string;
//   label: string;
//   description?: string;
// }

// interface JourneyStep {
//   year: string;
//   title: string;
//   description: string;
// }

// const skillCategories: SkillCategory[] = [
//   {
//     title: 'Frontend',
//     icon: <Globe size={20} />,
//     skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux']
//   },
//   {
//     title: 'Backend',
//     icon: <Terminal size={20} />,
//     skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'JWT']
//   },
//   {
//     title: 'Database',
//     icon: <Database size={20} />,
//     skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma']
//   },
//   {
//     title: 'Languages',
//     icon: <Code2 size={20} />,
//     skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL']
//   },
//   {
//     title: 'Tools',
//     icon: <Wrench size={20} />,
//     skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker']
//   }
// ];

// const achievements: Achievement[] = [
//   {
//     icon: <Code2 size={24} />,
//     value: '220+',
//     label: 'LeetCode Problems',
//     description: 'Consistent problem solving'
//   },
//   {
//     icon: <Terminal size={24} />,
//     value: '280+',
//     label: 'DSA Problems',
//     description: 'Data Structures & Algorithms'
//   },
//   {
//     icon: <Trophy size={24} />,
//     value: '3+',
//     label: 'Hackathons',
//     description: 'Built & shipped under pressure'
//   },
//   {
//     icon: <Briefcase size={24} />,
//     value: '2',
//     label: 'Internships',
//     description: 'Real-world engineering exp.'
//   }
// ];

// const journeySteps: JourneyStep[] = [
//   {
//     year: '2023',
//     title: 'Started CSE Journey',
//     description: 'Began my B.Tech in Computer Science. Dived into programming fundamentals and explored the vast world of software development.'
//   },
//   {
//     year: '2024',
//     title: 'Learned Development',
//     description: 'Picked up web development — HTML, CSS, JavaScript. Built my first static sites and understood how the web works.'
//   },
//   {
//     year: '2024',
//     title: 'Built Projects',
//     description: 'Moved beyond tutorials. Started building full-stack projects, learned React, Node.js, and database design through hands-on work.'
//   },
//   {
//     year: '2025',
//     title: 'Full-Stack & DSA',
//     description: 'Transitioned into full-stack development. Simultaneously sharpened problem-solving with 280+ DSA problems and 220+ LeetCode.'
//   },
//   {
//     year: '2026',
//     title: 'Engineering Roles Prep',
//     description: 'Currently preparing for software engineering roles. Focusing on system design, advanced projects, and real-world scalability.'
//   }
// ];

// export default function About() {
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//             observerRef.current?.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     const elements = document.querySelectorAll('.reveal');
//     elements.forEach((el) => observerRef.current?.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, []);

//   const handleResumeDownload = () => {
//     // Replace with your actual resume path in public/ folder
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'My_Resume.pdf';
//     link.click();
//   };

//   return (
//     <div className="about-page">
//       {/* Hero / Who I Am */}
//       <section className="about-hero">
//         <div className="container">
//           <div className="section-tag reveal">About Me</div>
//           <h1 className="about-title reveal">
//             Who I <span className="gradient-text">Am</span>
//           </h1>
//           <div className="about-intro reveal">
//             <p className="lead">
//               I'm a <strong>Computer Science undergrad</strong> who enjoys turning complex problems into simple, elegant code. I don't just write software — I craft experiences that are fast, accessible, and genuinely useful.
//             </p>
//             <p>
//               Right now, I'm deep in the world of <strong>full-stack development</strong>. I love the entire process: sketching out a database schema, building a clean API, and then polishing the frontend until it feels right. There's something satisfying about seeing an idea travel from a blank screen to a live product.
//             </p>
//             <p>
//               When I'm not coding, I'm usually solving problems on LeetCode, reading engineering blogs, or breaking down how popular apps are built. I'm actively preparing for <strong>software engineering roles</strong> and looking for opportunities where I can learn from great engineers while shipping real features.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Journey Timeline */}
//       <section className="about-journey">
//         <div className="container">
//           <h2 className="section-heading reveal">My Journey</h2>
//           <div className="timeline">
//             {journeySteps.map((step, index) => (
//               <div 
//                 key={index} 
//                 className={`timeline-item reveal ${index % 2 === 0 ? 'left' : 'right'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="timeline-content">
//                   <span className="timeline-year">{step.year}</span>
//                   <h3>{step.title}</h3>
//                   <p>{step.description}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="timeline-line" />
//           </div>
//         </div>
//       </section>

//       {/* Education */}
//       <section className="about-education">
//         <div className="container">
//           <h2 className="section-heading reveal">Education</h2>
//           <div className="education-card reveal">
//             <div className="edu-icon">
//               <GraduationCap size={32} />
//             </div>
//             <div className="edu-details">
//               <h3>B.Tech in Computer Science & Engineering</h3>
//               <div className="edu-meta">
//                 <span><MapPin size={14} /> Your College Name</span>
//                 <span><Calendar size={14} /> 2023 — 2027</span>
//               </div>
//               <p className="edu-info">
//                 Currently pursuing my bachelor's with a focus on software engineering, 
//                 data structures, algorithms, and system design. Maintaining a strong 
//                 academic record while building real-world projects alongside coursework.
//               </p>
//               <div className="edu-tags">
//                 <span className="tag">Data Structures</span>
//                 <span className="tag">Algorithms</span>
//                 <span className="tag">DBMS</span>
//                 <span className="tag">Operating Systems</span>
//                 <span className="tag">Computer Networks</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technical Skills */}
//       <section className="about-skills">
//         <div className="container">
//           <h2 className="section-heading reveal">Technical Skills</h2>
//           <div className="skills-grid">
//             {skillCategories.map((category, index) => (
//               <div 
//                 key={category.title} 
//                 className="skill-card reveal"
//                 style={{ transitionDelay: `${index * 75}ms` }}
//               >
//                 <div className="skill-header">
//                   <div className="skill-icon">{category.icon}</div>
//                   <h3>{category.title}</h3>
//                 </div>
//                 <div className="skill-tags">
//                   {category.skills.map((skill) => (
//                     <span key={skill} className="skill-tag">{skill}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements */}
//       <section className="about-achievements">
//         <div className="container">
//           <h2 className="section-heading reveal">Achievements</h2>
//           <p className="section-subtitle reveal">Measurable proof of the work I've put in.</p>
          
//           <div className="achievements-grid">
//             {achievements.map((item, index) => (
//               <div 
//                 key={item.label} 
//                 className="achievement-card reveal"
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="achievement-icon">{item.icon}</div>
//                 <div className="achievement-value">{item.value}</div>
//                 <div className="achievement-label">{item.label}</div>
//                 {item.description && (
//                   <div className="achievement-desc">{item.description}</div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="achievements-extra reveal">
//             <div className="extra-item">
//               <ChevronRight size={16} className="extra-icon" />
//               <span>Completed certifications in Web Development & Cloud Fundamentals</span>
//             </div>
//             <div className="extra-item">
//               <ChevronRight size={16} className="extra-icon" />
//               <span>Significant project milestones: Deployed 5+ full-stack applications</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resume */}
//       <section className="about-resume">
//         <div className="container">
//           <div className="resume-card reveal">
//             <div className="resume-content">
//               <div className="resume-icon">
//                 <FileText size={40} />
//               </div>
//               <div className="resume-text">
//                 <h2>My Resume</h2>
//                 <p>
//                   A detailed overview of my skills, experience, and education. 
//                   Last updated: <strong>August 2026</strong>
//                 </p>
//               </div>
//             </div>
//             <button className="resume-btn" onClick={handleResumeDownload}>
//               <Download size={18} />
//               <span>Download Resume</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }