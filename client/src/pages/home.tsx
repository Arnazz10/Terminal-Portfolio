import { useState, useEffect } from "react";
import { TerminalWindow } from "@/components/terminal-window";
import { MatrixRain } from "@/components/matrix-rain";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Github, ExternalLink, Download, Eye, Mail, Linkedin, Twitter } from "lucide-react";

const projectsData = [
  {
    title: "UniWise - Career Enablement Platform",
    category: "Full-Stack",
    description: "Full-stack career enablement platform offering premium video courses, 1-on-1 expert calls, and personalized career guidance. Features real-time pricing, secure payments, and admin oversight.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Razorpay", "JWT", "Docker", "REST API"],
    github: "https://github.com/Arnazz10/Uniwise",
    demo: "https://uniwise-frontend.vercel.app/"
  },
  {
    title: "CropXpert - ML Crop Recommendation",
    category: "IoT",
    description: "Machine Learning-based crop recommendation system leveraging 20,000+ agricultural data points to enhance farmer decision-making and improve crop yield by 35%.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "Ipywidgets"],
    github: "https://github.com/Arnazz10/CropXpert",
    demo: "https://crop-xpert.vercel.app/"
  },
  {
    title: "Reo10bot - Telegram Companion",
    category: "Backend",
    description: "Friendly conversational Telegram bot with human-like responses, built with modern async architecture and custom response engine for engaging interactions.",
    technologies: ["Python", "python-telegram-bot", "Async/Await"],
    github: "https://github.com/Arnazz10/Reo10bot",
    demo: "https://t.me/Reo10bot"
  },
  {
    title: "FitFusion Pro - AI Fitness Platform",
    category: "Full-Stack",
    description: "Intelligent fitness platform with real-time posture detection using ML models. Features workout tracking, AI chatbot, nutrition plans, and community engagement.",
    technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "Python", "OpenCV", "MediaPipe", "Socket.io"],
    github: "https://github.com/Arnazz10/Fit_Fusion",
  },
  {
    title: "Finora - AI Loan Approval System",
    category: "Full-Stack",
    description: "AI-driven loan approval platform with cutting-edge technologies for credit scoring, fraud detection, and risk profiling with real-time approvals and transparency.",
    technologies: ["React.js", "Next.js", "Tailwind", "Firebase", "Python", "LNNs", "GNNs", "LLMs"],
    github: "https://github.com/Arnazz10/Finora-Loan-Approval-application-",
    demo: "#"
  },
  {
    title: "Open Journal - Terminal Diary",
    category: "CLI Tools",
    description: "Open-source, terminal-based daily journal system for documenting personal growth, built with plain-text files and bash scripting for simplicity.",
    technologies: ["Bash", "Git", "Linux", "Markdown"],
    github: "https://github.com/Arnazz10/open-journal",
    demo: "#"
  }
];

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Ready for input";
  const [command, setCommand] = useState("");
  const [sectionPop, setSectionPop] = useState<Record<string, boolean>>({});
  

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const triggerSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setSectionPop(prev => ({ ...prev, [sectionId]: true }));
    setTimeout(() => setSectionPop(prev => ({ ...prev, [sectionId]: false })), 900);
  };

  const runCommand = () => {
    const value = command.trim().toLowerCase();
    if (!value) return;
    const map: Record<string, string> = {
      about: 'about',
      projects: 'projects',
      project: 'projects',
      experience: 'experience',
      exp: 'experience',
      resume: 'resume',
      cv: 'resume',
      contact: 'contact',
      contacts: 'contact'
    };
    const key = Object.keys(map).find(k => value.includes(k));
    if (key) {
      triggerSection(map[key]);
    }
    setCommand("");
  };

  const skills = [
    "Java/Spring Boot",
    "UI-UX Design",
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "Python/Django",
    "PostgreSQL/MongoDB",
    "AWS/Docker",
    "Linux/Kernel Dev",
    "Open Source"
  ];

  const experiences = [
    {
      title: "Web Designer",
      company: "Xtenal Technologies",
      period: "Mar 2025 - May 2025",
      responsibilities: [
        "Designed and optimized 10+ web applications, enhancing user engagement by 60% through improved UI/UX designs.",
        "Led the front-end development of 5+ innovative tech solutions, reducing load times by 40% and improving responsiveness across all devices."
      ],
      current: true
    },
    {
      title: "Design Intern",
      company: "Vague28 OPC PVT LTD",
      period: "Nov 2024 - Jan 2025",
      responsibilities: [
        "Created 50+ graphic designs for song promotions, leading to a 35% increase in audience engagement across social media platforms.",
        "Designed and executed 15+ targeted marketing campaigns for Indie Music artists, boosting their social media reach by 40%."
      ],
      current: false
    },
    {
      title: "Startup Intern",
      company: "Stealth Startup",
      period: "Jun 2024 - Sep 2024",
      responsibilities: [
        "HR & Talent Acquisition – Led the screening and onboarding of 45+ candidates, optimizing the recruitment pipeline and reducing hiring time by 22% through efficient evaluation and outreach strategies.",
        "Data Management & Analysis – Handled and structured 56% of raw user data, implementing improved organization processes that enhanced accessibility and security, reducing retrieval time by 30%."
      ],
      current: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono" data-testid="home-page">
      <MatrixRain />
      <Navigation />

      <section className="min-h-screen flex items-center justify-center px-4 pt-32" data-testid="hero-section">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow title="terminal@portfolio">
            <div className="space-y-4">
              <div className="text-accent" data-testid="whoami-command">$ whoami</div>
              <div className="text-2xl sm:text-4xl font-bold" data-testid="developer-name">
                <span className="text-primary">Arnab</span> <span className="text-accent">Kr Mal</span>
              </div>
              <div className="text-lg text-muted-foreground" data-testid="developer-title">
               Designer | Full Stack Developer | Open Source Enthusiast
              </div>
              <div className="space-y-2 text-sm" data-testid="developer-description">
                <div><span className="text-accent">{'>'}</span> Designing intuitive interfaces and experiences</div>
                <div><span className="text-accent">{'>'}</span> Building full-stack solutions with modern technologies</div>
                <div><span className="text-accent">{'>'}</span> Contributing to open source and Linux kernel development  </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4" data-testid="hero-actions">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-accent"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-contact"
                >
                  <span className="mr-2">📧</span>./contact.sh
                </Button>
                <Button 
                  variant="outline"
                  className="border-border hover:bg-secondary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-projects"
                >
                  <span className="mr-2">💻</span>ls -la projects/
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground" data-testid="terminal-cursor">
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <input
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runCommand(); }}
                    placeholder={displayText}
                    className="bg-transparent outline-none border-b border-border focus:border-primary caret-accent w-full max-w-xs"
                    aria-label="terminal command input"
                  />
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <section id="about" className="py-20 px-4 scroll-mt-24" data-testid="about-section">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow>
            <div className={`section-border ${sectionPop['about'] ? 'ring-2 ring-primary animate-pulse' : ''}`}>
              <h2 className="text-2xl font-bold mb-6" data-testid="about-title">
                <span className="text-accent">$</span> cat about.txt
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4" data-testid="about-description">
                  <p className="text-muted-foreground leading-relaxed">
                  Designer with 3+ years of experience and a full-stack developer specializing in Java technologies. 
                  Also a Linux developer and open-source contributor, passionate about building efficient and scalable solutions. 
                  </p>
                  <div className="space-y-2" data-testid="about-details">
                    <div><span className="text-primary">Location:</span> Chennai, India</div>
                    <div><span className="text-primary">Focus:</span> Designing & Full-Stack Development</div>
                    <div><span className="text-primary">Status:</span> <span className="text-accent">Available for opportunities</span></div>
                  </div>
                </div>
                <div data-testid="skills-section">
                  <h3 className="text-lg font-semibold mb-4 text-primary">$ ls skills/</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2" data-testid={`skill-${index}`}>
                        <span className="text-accent">{'>'}</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 scroll-mt-24" data-testid="projects-section">
        <div className="container mx-auto max-w-6xl">
          <TerminalWindow>
            <div className={`section-border ${sectionPop['projects'] ? 'ring-2 ring-primary animate-pulse' : ''}`}>
              <h2 className="text-2xl font-bold mb-8" data-testid="projects-title">
                <span className="text-accent">$</span> ls -la projects/
              </h2>

              

              <div className="grid lg:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                  <Card key={index} className="border border-border bg-card hover:border-primary transition-colors" data-testid={`project-card-${index}`}>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-primary" data-testid={`project-title-${index}`}>{project.title}</h3>
                        <div className="flex space-x-2">
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-accent hover:text-primary transition-colors hover-glow" data-testid={`project-github-${index}`}>
                            <Github className="w-5 h-5" />
                          </a>
                          {project.demo && project.demo !== '#' && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="text-accent hover:text-primary transition-colors hover-glow" data-testid={`project-demo-${index}`}>
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded" data-testid={`project-category-${index}`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm" data-testid={`project-description-${index}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs" data-testid={`project-technologies-${index}`}>
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-secondary px-2 py-1 rounded" data-testid={`project-tech-${index}-${techIndex}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="https://github.com/Arnazz10?tab=repositories" target="_blank" rel="noreferrer" className="text-accent hover:text-primary transition-colors" data-testid="link-github-all">
                  <Github className="inline w-5 h-5 mr-2" />View all projects on GitHub →
                </a>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 scroll-mt-24" data-testid="experience-section">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow>
            <div className={`section-border ${sectionPop['experience'] ? 'ring-2 ring-primary animate-pulse' : ''}`}>
              <h2 className="text-2xl font-bold mb-8" data-testid="experience-title">
                <span className="text-accent">$</span> cat experience.log
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className={`border-l-2 ${exp.current ? 'border-primary' : 'border-muted'} pl-6 relative`} data-testid={`experience-${index}`}>
                    <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${exp.current ? 'bg-primary' : 'bg-muted'}`}></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-primary" data-testid={`experience-title-${index}`}>{exp.title}</h3>
                      <div className="text-accent text-sm" data-testid={`experience-company-${index}`}>{exp.company} | {exp.period}</div>
                    </div>
                    <ul className="text-muted-foreground text-sm space-y-1" data-testid={`experience-responsibilities-${index}`}>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} data-testid={`experience-responsibility-${index}-${respIndex}`}>
                          <span className="text-accent">{'>'}</span> {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 scroll-mt-24" data-testid="resume-section">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow>
            <div className={`section-border ${sectionPop['resume'] ? 'ring-2 ring-primary animate-pulse' : ''}`}>
              <h2 className="text-2xl font-bold mb-8" data-testid="resume-title">
                <span className="text-accent">$</span> ./resume.pdf --view
              </h2>
              <Card className="bg-card border border-border" data-testid="resume-card">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left" data-testid="resume-description">
                      <h3 className="text-lg font-semibold text-primary mb-2">Download Resume</h3>
                      <p className="text-muted-foreground text-sm">
                        Get the complete PDF version of my resume with detailed information about my experience, 
                        skills, and achievements.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-accent" 
                        data-testid="button-download-resume"
                        onClick={() => window.open('https://drive.google.com/uc?export=download&id=18A4bHOS55iD8Ehj9jbLfzpLphnrQz8Be', '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline"   
                        className="border-border hover:bg-secondary" 
                        data-testid="button-view-resume"
                        onClick={() => window.open('https://drive.google.com/file/d/18A4bHOS55iD8Ehj9jbLfzpLphnrQz8Be/view?usp=sharing', '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Quick View
                      </Button>
                    </div>
                  </div>
                  
                  {/* Resume Preview */}
                  <div className="mt-8 bg-background rounded-lg p-6 border border-border" data-testid="resume-preview">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-primary" data-testid="resume-name">Arnab Kumar Mal</h4>
                      <p className="text-accent" data-testid="resume-role">Full Stack Developer</p>
                      <p className="text-sm text-muted-foreground" data-testid="resume-contact">arnabmal665@gmail.com | +91 9434366693</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div data-testid="resume-summary">
                        <h5 className="font-semibold text-primary mb-2">Summary</h5>
                        <p className="text-muted-foreground mb-4">
                        Designer and full-stack Java developer, Linux contributor, and open-source enthusiast passionate about crafting intuitive experiences and scalable solutions.
                        </p>
                      </div>
                      <div data-testid="resume-skills">
                        <h5 className="font-semibold text-primary mb-2">Key Skills</h5>
                        <div className="text-muted-foreground mb-4">
                          Java, SpringBoot UI-UX, Linux-Kernel, JavaScript, TypeScript, React, Node.js, Python, C/C++, ML, Open Source, PostgreSQL, AWS, Docker...
                        </div>
                      </div>
                      <div data-testid="resume-education">
                        <h5 className="font-semibold text-primary mb-2">Education</h5>
                        <div className="text-muted-foreground">
                          <div>B.Tech CSE w/s AIML</div>
                          <div className="text-xs">SRM University, 2027</div>
                        </div>
                      </div>
                      <div data-testid="resume-certifications">
                        <h5 className="font-semibold text-primary mb-2">Certifications</h5>
                        <div className="text-muted-foreground text-xs">
                          <div>NPTEL - JAVA Certified</div>
                          <div>Google Cloud - GenAI</div>
                          <div>MATLAB Certified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 scroll-mt-24" data-testid="contact-section">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow>
            <div className={`section-border ${sectionPop['contact'] ? 'ring-2 ring-primary animate-pulse' : ''}`}>
              <h2 className="text-2xl font-bold mb-8" data-testid="contact-title">
                <span className="text-accent">$</span> ./contact.sh --init
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div data-testid="contact-info">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss opportunities, collaborations, or just have a chat about technology.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3" data-testid="contact-email">
                      <Mail className="w-5 h-5 text-accent" />
                      <a href="mailto:arnabmal665@email.com" className="hover-glow transition-all">
                        arnabmal665@email.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-linkedin">
                      <Linkedin className="w-5 h-5 text-accent" />
                      <a href="https://linkedin.com/in/arnab-mal-74454127a" target="_blank" rel="noreferrer" className="hover-glow transition-all">linkedin.com/in/arnab-mal-74454127a</a>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-github">
                      <Github className="w-5 h-5 text-accent" />
                      <a href="https://github.com/Arnazz10" target="_blank" rel="noreferrer" className="hover-glow transition-all">github.com/Arnazz10</a>
                    </div>
                    <div className="flex items-center space-x-3" data-testid="contact-twitter">
                      <Twitter className="w-5 h-5 text-accent" />
                      <a href="https://x.com/arnabmaal" target="_blank" rel="noreferrer" className="hover-glow transition-all">@arnabmaal</a>
                    </div>
                  </div>
                  <Card className="bg-card border border-border" data-testid="contact-status">
                    <div className="p-4">
                      <div className="text-sm text-muted-foreground space-y-2">
                        <div><span className="text-accent">{'>'}</span> Status: Available for opportunities</div>
                        <div><span className="text-accent">{'>'}</span> Location: Chennai, India</div>
                        <div><span className="text-accent">{'>'}</span> Timezone: IST (UTC+5:30)</div>
                        <div><span className="text-accent">{'>'}</span> Response time: &lt; 24 hours</div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div data-testid="contact-form-container">
                  <ContactForm />
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <TerminalWindow>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                <span className="text-accent">$</span> echo "Built with passion and lots of coffee ☕"
              </div>
              <div className="text-sm text-muted-foreground">
                © 2024 AKM. All rights reserved.
              </div>
            </div>
          </TerminalWindow>
        </div>
      </footer>
    </div>
  );
}


