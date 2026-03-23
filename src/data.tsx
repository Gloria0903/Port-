import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Codepen } from 'lucide-react';

export const DATA = {
  name: "Gloria Njeru",
  title: "I build things for the cloud.",
  bio: "I'm a Cloud Architect & a Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered cloud solutions at ",
  company: "Klaud10 Afrika",
  about: [
    "Hello! My name is Gloria and I enjoy creating things that live on the internet. My interest in cloud computing started back in 2020 when I decided to explore how distributed systems power the modern web.",
    "Fast-forward to today, and I've had the privilege of learning and generating solutions with AWS and now leading my own venture that i believe will be part of the great Afica revolution in terms of cloud computing technology. My main focus these days is building scalable cloud infrastructure and fostering tech talent across Africa.",
    "Here are a few technologies I've been working with recently:"
  ],
  skills: ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "AWS", "Terraform", "Kubernetes", "Python"],
  experience: [
    {
      company: "Klaud10 Afrika",
      role: "Founder & CEO",
      period: "Jan 2025 — Present",
      description: [
        "Leading a tech startup focused on providing localized cloud solutions and technical training across Africa.",
        "Spearheading product strategy, cloud architecture design, and community outreach initiatives.",
        "Building a network of cloud-certified professionals to bridge the digital skills gap in emerging markets."
      ]
    },
    {
      company: "Centimax Design & Construction LTD",
      role: "Digital Marketing & IT Support",
      period: "Dec 2025 — Present",
      description: [
        "Designed and implemented multi-cloud architectures for enterprise clients using AWS and Azure.",
        "Optimized infrastructure costs by 30% through strategic resource allocation and automated scaling.",
        "Improved system reliability by 99.9% through automated CI/CD pipelines and robust monitoring."
      ]
    },
    {
      company: "Kahustle",
      role: "Full-Stack Developer Intern",
      period: "Sept 2025 — Nov 2025",
      description: [
        "Developed and maintained high-traffic web applications using React, Node.js, and PostgreSQL.",
        "Implemented serverless functions to handle peak loads and integrated third-party APIs for seamless user experiences.",
        "Collaborated with cross-functional teams to deliver high-quality software products on tight deadlines."
      ]
    }
  ],
  projects: [
    {
      title: "HakiPro Legal Management System",
      overline: "Featured Project",
      description: "An Kenya Legal Management System that handles everything like document analyssis using customised AI tools to automate law firm operations.",
      tech: ["React", "Javascript", "Node.js", "vite"],
      github: "https://github.com/Gloria0903/hakipro",
      external: "https://hakipro.vercel.app/",
      image: "https://hakipro.vercel.app/"
    },
    {
      title: "Bloomguard-trace",
      overline: "Featured Project",
      description: "A real-time monitoring dashboard for farmers to help in crop diesease detection.",
      tech: ["TypeScript", "Solidity"],
      github: "https://github.com/Gloria0903/bloomguard-trace",
      external: "https://bloomguard-trace.vercel.app/",
      image: "https://bloomguard-trace.vercel.app/"
    },
    {
      title: "BioFarm Hub",
      overline: "Featured Project",
      description: "Empowers Kenyan smallholder farmers to convert livestock manure and crop waste into clean biogas for cooking, high-quality organic fertilizer, and verifiable carbon credits through smart AI monitoring, blockchain traceability, and M-Pesa-integrated PAYGO financing.",
      tech: ["Node.js", "TypeScript", "Blockchain"],
      github: "https://github.com/Gloria0903/biofarm-hub",
      external: "https://biofarm-hub.vercel.app/",
      image: "https://biofarm-hub.vercel.app/"
    }
  ],
  socials: [
    { icon: <Github size={20} />, href: "https://github.com/Gloria0903", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gloria-njeru-3ab01827a/", label: "LinkedIn" },
    // { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    // { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    // { icon: <Codepen size={20} />, href: "#", label: "CodePen" }
  ],
  email: "kumioklaud@gmail.com"
};
