'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Smartphone, Palette, ChevronDown, Menu, X, MapPin, Calendar, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { motion, time } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend', icon: Code, skills: ['React', 'Redux', 'Alpine JS', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'MUI', 'Ant Design', 'JavaScript', 'jQuery', 'AJAX'] },
    { name: 'Backend', icon: Server, skills: ['PHP' ,'Laravel', 'Node.js', 'CodeIgniter', 'Express'] },
    { name: 'Database', icon: Database, skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
    { name: 'Tools', icon: Smartphone, skills: ['PhpStorm', 'VS Code', 'MySQL Workbench', 'Postman', 'Pg Admin'] },
    { name: 'DevOps', icon: Zap, skills: ['AWS', 'Docker', 'NGINX', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Netlify'] },
    { name: 'Design', icon: Palette, skills: ['UI/UX', 'Figma', 'Responsive Design'] }
  ];

  const milestones = [
    {
      year: 'May 2024 - Sept 2025',
      title: 'Full Stack Developer',
      company: 'MCTPay Co., Ltd',
      description: 'Working on enterprise payment gateway solutions and financial applications for onboarding system, merchant and agent portal using Php Laravel and PostgreSQL',
      icon: <Award className="text-yellow-400" size={24} />,
      achievements: [
        'Integrated multiple third-party payment APIs',
        'Onboarded customers and merchants successfully',
        'Calculated and generated commission reports for agents and merchants'
      ]
    },
    {
      year: 'Aug 2023 - Sept 2025',
      title: 'Full Stack Developer (Team Lead)',
      company: 'Metatech Myanmar Co., Ltd',
      description: 'Led a team of developers to build finance web applications using React, Php Laravel, MySQL, AWS services and integrated third-party APIs and ERP systems',
      icon: <TrendingUp className="text-green-400" size={24} />,
      achievements: [
        'Mentored 4 junior developers to senior level',
        'Increased system efficiency by 60% through back-end API optimization, reducing response times',
        'Improved API response times by 40% through code optimization',
        'Integrated with KPAY mini app and other third-party services'
      ]
    },
    {
      year: 'Feb 2023 - Aug 2023',
      title: 'Web Application Developer',
      company: 'BlueBell People Co., Ltd',
      description: 'Developed and maintained web applications for LMS and course management using Php Larave, CodeIgniter, MySQL and WordPress',
      icon: <Users className="text-blue-400" size={24} />,
      achievements: [
        'Developed and maintained CI and PHP pure projects, ensuring functionality, performance, and security',
        'Created a WordPress e-commerce website from scratch, utilizing WooCommerce to provide a robust online shopping experience.'
      ]
    },
    {
      year: 'May 2021 - Feb 2023',
      title: 'Junior Web Developer',
      company: 'MSIS Co., Ltd',
      description: 'Contributed to development of client web applications using React, Php Laravel, MySQL and AWS services',
      icon: <Code className="text-purple-400" size={24} />,
      achievements: [
        'Developed 7+ client web applications',
        'Collaborated with cross-functional teams to deliver projects on time and report to team lead'
      ]
    }
  ];

  const projects = [
    {
      title: 'MCTPay Finance System',
      description: 'Enterprise payment gateway and financial application for merchants, agents, and customers with payment integrations and Excel/PDF reports.',
      technologies: ['Alpine.js', 'Laravel', 'PostgreSQL', 'Cent OS', 'NGINX'],
      image: 'https://placehold.co/600x400/10b981/ffffff?text=MCTPay',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Customer Onboarding System',
      description: 'Web application for customer onboarding, KYC verification, and account management with document uploads and admin dashboard.',
      technologies: ['Alpine JS', 'Laravel', 'MySQL'],
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=CS+Onboarding',
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      title: 'MomoFinance Web Application',
      description: 'Finance web application for loan management, ERP integration, interest calculation by tenor and accounting flow.',
      technologies: ['Alpine JS', 'Laravel', 'MySQL'],
      image: 'https://placehold.co/600x400/3e3e3e/ffffff?text=MomoFinance',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'JobSpace.com.mm',
      description: 'Full-stack job recruitment application with subscription plan and job posting and hunting.',
      technologies: ['React', 'Redux', 'MUI', 'Laravel', 'MySQL', 'AWS', 'NGINX', 'Melisearch'],
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=JobSpace',
      liveUrl: 'https://jobspace.com.mm/',
      githubUrl: '#'
    },


    {
      title: 'Twomotor Forklift E-commerce',
      description: 'E-commerce website for forklift sales with product catalog, shopping cart using WooCommerce.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://placehold.co/600x400/60728f/ffffff?text=Twomotor+Forklift',
      liveUrl: 'https://www.towmotorforklift.com.sg/',
      githubUrl: '#'
    },
    {
      title: 'Okkarthiri.com',
      description: 'Web portal for dynamic news and articles with admin panel for content management and user engagement.',
      technologies: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'Google Analytics'],
      image: 'https://placehold.co/600x400/60728f/ffffff?text=Okkarthiri',
      liveUrl: 'https://www.okkarthiri.com/',
      githubUrl: '#'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration - Replace with your actual service IDs
    const serviceId = 'service_vxaddwu'; // Replace with your EmailJS service ID
    const templateId = 'template_qcew4im'; // Replace with your EmailJS template ID
    const publicKey = 'yvSjZZ_da-4GnnMfS'; // Replace with your EmailJS public key
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      time: Date.now(),
      to_email: 'aungphyoe.dev11@gmail.com' // Replace with your email
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-cyan-400"
            >
              Aung Thu Myint
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-cyan-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-slate-700"
            >
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-slate-300 hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-purple-900/20 to-slate-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl">
                  <Image 
                    width={500}
                    height={500}
                    src="https://placehold.co/200x200/1e293b/94a3b8?text=APtheDev" 
                    alt="Profile" 
                      unoptimized

                    // className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.span
                className="text-xs sm:text-xs md:text-md lg:text-xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-lg pb-2
               bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      'Hello, I am Aung Thu Myint.',
                      1000,
                      'Hello, I am Full-Stack Developer.',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="inline-block text-base sm:text-[1.3em] md:text-[1.5rem] lg:text-[2rem]"
                    repeat={Infinity}
                  />
                </span>
                {/* <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Aung Thu Myint
                </span>
                </h5> */}
              </motion.span>

              
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <div className="px-6 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30">
                  <span className="text-cyan-400 font-medium">Full-Stack Web Developer</span>
                </div>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg 
               md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              
               Let&#39;s transform your vision into reality and make your mark in the digital world.
               <br />
               I create <span className="text-cyan-400 font-semibold">with modern technologies and clean code practices.</span>
              {/* I create <span className="text-cyan-400 font-semibold">exceptional digital experiences</span> with modern technologies and clean code practices. */}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mt-10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">4.5+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">20+</div>
                <div className="text-slate-400">Happy Clients</div>
              </div> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-500 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Dedicated and self-driven Full-Stack Developer over 4.5 years of experience to innovative web applications.
              Skilled in API integration, crafting dynamic user interfaces, developing efficient web applications, and
              optimizing performance for seamless user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <Image
                  width={500}
                  height={500}
                  src="/images/ap.jpg"
                  // src=""
                  alt="Developer"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300">
                I&#39;m a full-stack developer who loves turning complex problems into simple, beautiful solutions.
                With expertise spanning frontend to backend technologies, I create applications that not only
                look great but also perform exceptionally.
              </p>
              <p className="text-lg text-slate-300">
                My approach combines technical excellence with creative problem-solving. I stay updated with
                the latest industry trends and best practices to deliver cutting-edge solutions that drive
                business value and user satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-slate-300">aungphyoe.dev11@gmail.com</span>
                </div>
                // <div className="flex items-center space-x-2">
                //   <Linkedin className="text-cyan-400" size={20} />
                //   <span className="text-slate-300"> https://www.linkedin.com/in/aung-thu-myint </span>
                // </div>
                <div className="flex items-center space-x-2">
                  <Github className="text-cyan-400" size={20} />
                  <span className="text-slate-300">https://github.com/aungthumyint135</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-slate-300">Da Nang, Vietnam</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Milestone Style */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">Career Milestones</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key achievements and career highlights throughout my journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center shadow-lg">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 text-cyan-400">{milestone.title}</h3>
                      <p className="text-purple-400 font-medium">{milestone.company}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-12 md:pr-4' : 'md:pr-12 md:pl-4'}`}>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                      <p className="text-slate-300 mb-4">{milestone.description}</p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-slate-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">Skills & Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive skill set across the full development stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-cyan-500/30"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg mr-3">
                    <skillGroup.icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400">{skillGroup.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">Selected Featured Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing my latest work and creative solutions about Fintech and E-commerce applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/30"
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src={project.image}
                    alt={project.title}
                    unoptimized
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&#39;s work together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Let&#39;s Connect</h3>
                <p className="text-slate-300 mb-8">
                  I&#39;m always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  {/* <div className="flex items-center">
                    <div className="p-2 bg-cyan-500/10 rounded-lg mr-4">
                      <Mail className="text-cyan-400" size={20} />
                    </div>
                    <span className="text-slate-300">aungphyoe.dev11@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2 bg-cyan-500/10 rounded-lg mr-4">
                      <Linkedin className="text-cyan-400" size={20} />
                    </div>
                    <span className="text-slate-300">https://www.linkedin.com/in/aung-thu-myint</span>
                  </div> */}
                  {/* <div className="flex items-center">
                    <div className="p-2 bg-cyan-500/10 rounded-lg mr-4">
                      <Github className="text-cyan-400" size={20} />
                    </div>
                    <span className="text-slate-300">github.com/johndoe</span>
                  </div> */}
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-slate-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white placeholder-slate-400"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Full Stack Developer. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
