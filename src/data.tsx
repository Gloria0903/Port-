import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Codepen } from 'lucide-react';

export const DATA = {
  name: "Gloria Njeru",
  title: "I build things for the cloud.",
  bio: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered cloud solutions at ",
  company: "Klaud10 Afrika",
  about: [
    "Hello! My name is Gloria and I enjoy creating things that live on the internet. My interest in cloud computing started back in 2019 when I decided to explore how distributed systems power the modern web.",
    "Fast-forward to today, and I've had the privilege of working at an enterprise solutions firm, a high-growth startup, and now leading my own venture. My main focus these days is building scalable cloud infrastructure and fostering tech talent across Africa.",
    "Here are a few technologies I've been working with recently:"
  ],
  skills: ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "AWS", "Terraform", "Kubernetes", "Python"],
  experience: [
    {
      company: "Klaud10 Afrika",
      role: "Founder & CEO",
      period: "Jan 2024 — Present",
      description: [
        "Leading a tech startup focused on providing localized cloud solutions and technical training across Africa.",
        "Spearheading product strategy, cloud architecture design, and community outreach initiatives.",
        "Building a network of cloud-certified professionals to bridge the digital skills gap in emerging markets."
      ]
    },
    {
      company: "Tech Solutions Inc.",
      role: "Senior Cloud Architect",
      period: "May 2023 — Dec 2023",
      description: [
        "Designed and implemented multi-cloud architectures for enterprise clients using AWS and Azure.",
        "Optimized infrastructure costs by 30% through strategic resource allocation and automated scaling.",
        "Improved system reliability by 99.9% through automated CI/CD pipelines and robust monitoring."
      ]
    },
    {
      company: "Innovate Labs",
      role: "Full-Stack Developer",
      period: "Jan 2021 — Apr 2023",
      description: [
        "Developed and maintained high-traffic web applications using React, Node.js, and PostgreSQL.",
        "Implemented serverless functions to handle peak loads and integrated third-party APIs for seamless user experiences.",
        "Collaborated with cross-functional teams to deliver high-quality software products on tight deadlines."
      ]
    }
  ],
  projects: [
    {
      title: "Klaud10 Learning Platform",
      overline: "Featured Project",
      description: "An interactive e-learning platform specifically designed for African developers to master cloud technologies with localized content and mentorship.",
      tech: ["React", "Firebase", "Node.js", "Cloudinary"],
      github: "#",
      external: "#",
      image: "https://picsum.photos/seed/learning/1000/600"
    },
    {
      title: "CloudScale Monitor",
      overline: "Featured Project",
      description: "A real-time monitoring dashboard for Kubernetes clusters with automated alerting and performance metrics visualization.",
      tech: ["Go", "Kubernetes", "Prometheus", "Grafana"],
      github: "#",
      external: "#",
      image: "https://picsum.photos/seed/monitor/1000/600"
    },
    {
      title: "SecureAuth Gateway",
      overline: "Featured Project",
      description: "An OAuth2.0 compliant authentication gateway with multi-factor support, designed for high-security enterprise environments.",
      tech: ["Node.js", "Redis", "AWS Lambda", "Terraform"],
      github: "#",
      external: "#",
      image: "https://picsum.photos/seed/gateway/1000/600"
    }
  ],
  socials: [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gloria-njeru-3ab01827a/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Codepen size={20} />, href: "#", label: "CodePen" }
  ],
  email: "hello@glorianjeru.tech"
};
