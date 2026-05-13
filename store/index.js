import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed (only images of public landing pages or design thumbnails included due to NDA)",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Investnow (United Capital)",
      link: "https://www.investnow.ng",
      category: "Web Application",
      img: "/images/investnow.png",
      publishDate: "Nov 04, 2021",
      tag: "Fullstack",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Redeveloped the flagship investment application, focusing on improving scalability,stability, security & internationalization.",
      techTitle: "Fintech",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Investnow (United Capital)",
          img: "/images/investnow.png",
        },
      ],
      technologies: [
        "Typescript",
        "NextJs",
        "Shadcn",
        "Paystack",
        "React Hook form",
        "Tailwind",
        'Docker'
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Streamlined codebase by making use of reusable react patterns, 100% typescript usage & linting to catch bugs very early. This reduced lines of code by 40%, making codebase more manageable, and led to fewer hot fixes by catching regressions early during compilation. Implemented strident security mechanisms against XSS, click-jacking etc as well as ensuring data privacy.",
        },
      ],
    },
    {
      id: "261d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Goodtalent Hire Talent Management Platform",
      link: "https://hire.goodtalent.io/",
      category: "Web Application",
      img: "/images/hire.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This platform helps companies all over the world discover talent. One of the unique value points is the bounty system that encourages users to refer suitable talents for adertised roles",
      techTitle: "SaaS Solutions",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Goodtalent Hire Talent Management Platform",
          img: "/images/hire.png",
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
            "I built the frontend app for this platform in 5 months.This platform boasts features such as real-time chat system - ability for companies to directly chat with applicants or share information with other tema members about candidates, CV parsing for easy update of profiles, wallet & payment integrations for bounty payments, SEO configuration for beautiful social meta & search indexing. It makes it very easy for talents to onboard & start applying to jobs (minimal friction). It is reasonably optimized with a lod time of 5 seconds",
        },
      ],
    },
    {
      id: "262d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Goodtalent Paysurge",
      link: "https://paysurge.co/",
      category: "Web Application",
      img: "/images/paysurge.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This platform is concerned with making global payroll operations seamless & compliant with local regulations for companies hiring in Africa. It also features salary advances for employee benefits",
      techTitle: "SaaS Solutions",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Goodtalent Paysurge",
          img: "/images/paysurge.png",
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
            "This platform has been in production for over a year, with tens of thousands of dollars processed so far for salary payments, including country staff of international companies such as Meta. This platform also boasts features sych as reports with excel/pdf downloads, payment integrations, employee onboarding, sub company mamagement for conglomerates. It also provides a salary advance functionality for employees.",
        },
      ],
    },
    {
      id: "263d1271-f1f2-4bc9-a5eb-05a89c8cdddc",
      title: "SupportSyncpro (Enterprise Workflow & Collaboration Solution)",
      link: "https://demo.syncpro.africa",
      category: "Web Application",
      img: "/images/syncpro.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This workflow management system enables entrprises enhance their workflow & track employee productivity tracking. It allows creation of tasks/tickets from within the app or via email integrations. It allows for collaboration across departments and tracks department/individual SLAs/OLAs for performance monitoring. It currently uses Azure AD for employee access",
      techTitle: "Enterprise/SaaS Solutions",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "SupportSyncpro (Enterprise Workflow & Collaboration Solution)",
          img: "/images/syncpro.png",
        },
      ],
      technologies: ["Typescript", "Nuxt.js", "DevExtreme"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I was part of a 3 person team that built this fullstack platform in 7 weeks. The platform boasts features such as task workflows, SLA tracking, support for complex organizational structures such as departments & groups, and dashboards with charts for easy visibility into activiy. Beyond the collaboration features, I also implemented a highly granular RBAC (Role Based Access Control) system on the frontend that seamlessly governs what actions a user can trigger via with the use of role-aware composable function wrappers. Althoguh my work was majorly on the frontend, I assisted on the backend, implementing a FileUpload module in nestjs which was integrated with Amazon S3 storage. I also setup strong security constraints/CSP rules for entrprise usage.",
        },
        {
          id: uuidv4(),
          details: `The development rate was particularly rapid due to customer delivery timelines. However we were able to complete the project while maintaining a high standard of quality and performance. The first version of the app was sold & deployed to a major African financial organization, while it is currently undergoing enhancement ahead of full SaaS launch`,
        },
      ],
    },
  ],
  toolsHeading: "Some of the tools I worked with",
  tools: [
    {
      id: uuidv4(),
      title: "Typescript",
      img: "/tools/typescript.png",
    },
    {
      id: uuidv4(),
      title: "Next",
      img: "/tools/nextjs.jpeg",
    },
    {
      id: uuidv4(),
      title: "React",
      img: "/tools/react.jpeg",
    },
    {
      id: uuidv4(),
      title: "NestJs",
      img: "/tools/nestjs.png",
    },
    {
      id: uuidv4(),
      title: "Postgres",
      img: "/tools/postgres.jpg",
    },
    {
      id: uuidv4(),
      title: "AWS",
      img: "/tools/aws.png",
    },
    {
      id: uuidv4(),
      title: "Nuxt",
      img: "/tools/nuxt.jpg",
    },
    {
      id: uuidv4(),
      title: "Vue",
      img: "/tools/vue.jpg",
    },
    {
      id: uuidv4(),
      title: "Vuetify",
      img: "/tools/vuetify.jpg",
    },
    {
      id: uuidv4(),
      title: "Stripe",
      img: "/tools/stripe.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: `Hi, I'm Kasope, a fullstack software engineer. 
      I am dedicated to proferring solutions for all sorts of enterprise problems, transforming problem statements to intuitive user experiences.`,
    },
    {
      id: uuidv4(),
      bio: `I've made fundamental contributions helping businesses generate thousands of Dollars using my skills
      - Typescript, NextJs, React, NestJs, Postgresql, Vue, NuxtJs, SCSS, Tailwind, Vite, Vitest etc`,
    },
    {
      id: uuidv4(),
      bio: `I have very extensive experience with taking projects from ideation stage to production, rapidly. As a result, I am comfortable working with some level of ambiguity & rapid changes, especially for early-stage/greenfield projects and/or startups. On the other hand, I am also adept at maintaining and updating legacy applications more common at more established organizations ensuring applications remain secure and maintainable`,
    },
    {
      id: uuidv4(),
      bio: "I'm passionate about building enterprise web solutions. I'm always open to new and exciting projects to work on.",
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
