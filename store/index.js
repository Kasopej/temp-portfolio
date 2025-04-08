import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Goodtalent Hire Talent Management Platform",
      link: "https://hire.goodtalent.io/",
      category: "Web Application",
      img: "images/hire.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This platform helps companies all over the world discover talent. One of the unique value points is the bounty system that encourages users to refer suitable talents for adertised roles",
      techTitle: "Tools & Technologies",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Goodtalent Hire Talent Management Platform",
          img: "../images/hire.png",
        },
      ],
      technologies: [
        "Typescript",
        "Nuxt.js",
        "Stripe",
        "Web Sockets",
        "DevExtreme",
        "Animate.css",
        "NuxtSEO",
        "Jspdf",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I built the frontend appl for this platform alone 100% in 5 months.This platform boasts features such as real-time chat system - ability for companies to directly chat with applicants or share information with other tema members about candidates, CV parsing for easy update of profiles, wallet & payment integrations for bounty payments, SEO configuration for beautiful social meta & search indexing. It makes it very easy for talents to onboard & start applying to jobs (minimal friction). It is reasonably optimized with a lod time of 5 seconds",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Goodtalent Paysurge",
      link: "https://paysurge.co/",
      category: "Web Application",
      img: "images/paysurge.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This platform is concerned with making global payroll operations seamless & compliant with local regulations for companies hiring in Africa. It also features salary advances for employee benefits",
      techTitle: "Tools & Technologies",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Goodtalent Paysurge",
          img: "../images/paysurge.png",
        },
      ],
      technologies: [
        "Typescript",
        "Nuxt.js",
        "Paystack",
        "DevExtreme",
        "PapaParse",
        "Animate.css",
        "NuxtSEO",
        "Jspdf",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I was part of a 2 man frontend team that built this platform. This platform has been in production for over a year, with tens of thousands of dollars processed so far for salary payments. This platform also boasts features sych as reports with excel/pdf downloads, payment integrations, employee onboarding, sub company mamagement for conglomerates. It also provides a salary advance functionality for employees.",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cdddc",
      title: "Support Sync Pro",
      link: "https://ui-test.syncpro.africa/",
      category: "Web Application",
      img: "images/syncpro.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This is an ERP software for helping large B2B & B2C companies enhance their workflow & employee productivity tracking. It is particulaly useful for ticket management flows but can be used for any type of enterprise activity tracking",
      techTitle: "Tools & Technologies",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Support Sync Pro",
          img: "../images/syncpro.png",
        },
      ],
      technologies: ["Typescript", "Nuxt.js", "DevExtreme"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I was part of a 2 man frontend team that built this platform in 7 weeks. The platform boasts features such as ticket workflows, SLA tracking, support for complex organizational structures such as distributed departments & groups, and dashboards with charts for easy visibility into activiy. Importantly, it also utilizes granular role based access control with the use of role-aware composable function wrappers.",
        },
        {
          id: uuidv4(),
          details: `The development rate was particularly rapid due to customer delivery timelines. However we were able to complete the project while maintaining a high standard of quality and performance.`,
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Teklabspace Bug Bounty Platform",
      link: "https://www.teklabspace.com/",
      category: "Web Application",
      img: "images/teklabspace.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This app aims to impact the cybersecurity ecosystem in Africa by enabling white hackers to partake in bug bounties.",
      techTitle: "Tools & Technologies",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Teklabspace Bug Bounty Platform",
          img: "../images/teklabspace.png",
        },
      ],
      technologies: ["JavaScript", "Nuxt.js", "Vuetify"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "This project was freelance. I was able to push the project close to completion with addition of the necessary screens for adding bug bounties, making submissions, bounty leaderboard and more. Unfortately, severe delays in API development meant the project was not completed while I was contracted.",
        },
      ],
    },
  ],
  toolsHeading: "Some of the tools I worked with",
  tools: [
    {
      id: uuidv4(),
      title: "Next",
      img: "../tools/nextjs.jpeg",
    },
    {
      id: uuidv4(),
      title: "React",
      img: "../tools/react.jpeg",
    },
    {
      id: uuidv4(),
      title: "Nuxt",
      img: "../tools/nuxt.jpg",
    },
    {
      id: uuidv4(),
      title: "Vue",
      img: "../tools/vue.jpg",
    },
    {
      id: uuidv4(),
      title: "Vuetify",
      img: "../tools/vuetify.jpg",
    },
    {
      id: uuidv4(),
      title: "Typescript",
      img: "../tools/typescript.png",
    },
    {
      id: uuidv4(),
      title: "Stripe",
      img: "../tools/stripe.png",
    },
    {
      id: uuidv4(),
      title: "Web Sockets",
      img: "../tools/websockets.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: `Hi, I'm Kasope, a frontend software engineer. 
      I am dedicated to proferring solutions for all sorts of enterprise problems, transforming problem statements to intuitive user experiences.`,
    },
    {
      id: uuidv4(),
      bio: `I've made fundamental contributions helping businesses generate thousands of Dollars using my skills
      - Typescript, NextJs, React, VueJs, Nuxt, SCSS, Tailwind, Vite, Vitest, Git etc`,
    },
    {
      id: uuidv4(),
      bio: `I'm have very extensive experience with taking projects from ideation stage to production, rapidly. This means I'm able to work with some level of ambiguity & proactiveness.`,
    },
    {
      id: uuidv4(),
      bio: "I'm passionate about the whole frontend stack (especially at enterprise scale). I'm always looking for new and exciting projects to work on.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Kasopej",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/kasopejohnson/",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
