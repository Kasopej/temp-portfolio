import { v4 as uuidv4 } from "uuid";
// @ts-expect-error raw-loader
import tsLogo from "!!raw-loader!../static/tools/ts_logo.svg";
// @ts-expect-error raw-loader
import nextLogo from "!!raw-loader!../static/tools/nextjs.svg";
// @ts-expect-error raw-loader
import reactLogo from "!!raw-loader!../static/tools/react.svg";
// @ts-expect-error raw-loader
import nestLogo from "!!raw-loader!../static/tools/nestjs.svg";
// @ts-expect-error raw-loader
import postgresLogo from "!!raw-loader!../static/tools/postgres.svg";
// @ts-expect-error raw-loader
import awsLogo from "!!raw-loader!../static/tools/aws.svg";
// @ts-expect-error raw-loader
import nuxtLogo from "!!raw-loader!../static/tools/nuxtjs.svg";
// @ts-expect-error raw-loader
import vueLogo from "!!raw-loader!../static/tools/vue.svg";
// @ts-expect-error raw-loader
import vuetifyLogo from "!!raw-loader!../static/tools/vuetify.svg";
// @ts-expect-error raw-loader
import stripeLogo from "!!raw-loader!../static/tools/stripe.svg";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription:
    "<span>Some of the projects I have successfully completed</span><br /><span>(only images of public/marketing landing pages used, for illustrative purposes).</span>",
  projects: [
    {
      id: "workcms",
      title:
        "WorkCMS (Fullstack Content & Work Documentation Platform - personal project)",
      link: "https://kasope-fullstack-portfolio.vercel.app",
      category: "Web Application",
      img: "/images/workcms.png",
      publishDate: "Oct 16, 2026",
      tag: "Fullstack",
      objectivesTitle: "Objective",
      objectivesDetails:
        "WorkCMS is a full-stack content management and professional work documentation platform designed to centralize the creation, organization, publishing, and management of technical articles, software projects, and engineering case studies. It provides a structured administrative environment for documenting software architecture, implementation decisions, technical challenges, and project outcomes, supported by role-based access control, secure authentication, and media management.",
      techTitle: "Fullstack CMS / SaaS Architecture",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "WorkCMS - Content Management Platform",
          img: "/images/workcms.png",
        },
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "TypeORM",
        "Supabase Auth",
        "Supabase Storage",
        "RBAC",
        "REST API",
        "AWS S3 SDK",
        "Tailwind CSS",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "I designed and developed WorkCMS as a full-stack application using Next.js for the frontend and NestJS for the backend, following a modular architecture with a clear separation between the presentation, business logic, authentication, and persistence layers. The backend exposes RESTful APIs organized around domain-specific modules for projects, technical articles, skills, users, permissions, file uploads, and analytics. This architecture makes the application easier to maintain, extend, and deploy independently across frontend and backend environments.",
        },
        {
          id: uuidv4(),
          details:
            "For the frontend, I iterated on the design using an AI design creation tool to create the figma prototypes & themes. These designs were used to closely guide the development of the frontend platform to ensure a high quality and user-friendly interface. The frontend was built using Next.js. The UI architecture is component based and fully themable, using Shadcn, TailwindCSS and CSS variables.",
        },
        {
          id: uuidv4(),
          details:
            "For authentication and identity management, I integrated Supabase Auth with the NestJS backend, implementing a custom Supabase authentication guard to validate authenticated requests and resolve the active user. I adopted a hybrid identity architecture in which Supabase manages authentication identities while the Supabase PostgreSQL schema maintains user profiles, roles, and domain relationships. This allows the application to benefit from managed authentication while retaining full control over its authorization model and relational data. I also implemented custom parameter decorators for accessing authenticated user information within protected controllers.",
        },
        {
          id: uuidv4(),
          details:
            "I designed a granular Role-Based Access Control (RBAC) model using TypeORM entities and relational mappings. The authorization architecture includes User, Role, and Permission entities, with users associated with roles and roles mapped to multiple permissions through a dedicated join table. The system supports administrative and guest roles, providing a foundation for controlling access to CMS operations such as content creation, modification, publishing, and administrative management. Authorization responsibilities are separated from authentication, allowing access policies to evolve independently of the underlying identity provider.",
        },
        {
          id: uuidv4(),
          details:
            "The persistence layer is built on PostgreSQL with TypeORM handling entity mapping, relational queries, and schema migrations. I modeled relationships between projects, skills, users, roles, and permissions, including many-to-many associations for project technologies and role permissions. The content model supports project documentation, publication states, and structured technical metadata. I also configured TypeORM migrations to manage schema evolution explicitly rather than relying on automatic schema synchronization in production, using compiled migration artifacts as part of the deployment workflow.",
        },
        {
          id: uuidv4(),
          details:
            "For media management, I developed a dedicated NestJS upload module integrated with Supabase Storage. The module handles file validation, upload size restrictions, unique file identification, organized storage paths, and deletion operations. The storage integration uses server-side credentials to manage objects while keeping privileged operations away from the browser. This provides a reusable media management foundation for project screenshots, article illustrations, and other CMS assets, with the architecture supporting further improvements to file ownership and access control.",
        },
        {
          id: uuidv4(),
          details:
            "I also developed an analytics module within the NestJS backend, exposing endpoints for historical session activity and device-type statistics. This provides a foundation for understanding audience engagement and content consumption. The analytics capabilities are separated into their own application module, keeping reporting concerns independent of the core CMS domain logic.",
        },
        {
          id: uuidv4(),
          details:
            "From an infrastructure perspective, I designed WorkCMS for independently deployable frontend and backend services within a monorepo for centralized source control. The frontend is auto-deployed on Vercel, while the API is auto-deployed on Railway.",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Investnow (United Capital)",
      link: "https://www.investnow.ng",
      category: "Web Application",
      img: "/images/investnow.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Rebuilt the flagship retail investment web application, used by over 10,000 users daily (during peak periods) to manage their investment portfolios. This rebuild focused on improving scalability, stability, security & internationalization.",
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
        "Docker",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Rewrote codebase using reusable & modular react patterns, reducing lines of code by 40%. Added close to 100% type safety, automated testing & extensive linting. These changes improved user accessibility, code readability at scale, and drastically reduced regressions",
        },
        {
          id: uuidv4(),
          details:
            "Above work provided the foundation for unprecedented scaling of the application, with usage increasing at a rapid rate (>200% over 6 months) along with constantly evolving business requirements",
        },
        {
          id: uuidv4(),
          details:
            "Built a revamped IPO module in 2 weeks that successfully processed transactions worth Billions of Naira in 6 weeks with zero downtime",
        },
        {
          id: uuidv4(),
          details:
            "Integrated error reporting & session tracking tools for quick visibility into user issues & painpoints, as well as user analytics. Also built in security mechanisms against security vulnerabilities, such as XSS, click-jacking etc.",
        },
      ],
    },
    {
      id: "261d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Goodtalent Hire Talent Management Platform",
      link: "https://hire.goodtalent.io/",
      category: "Web Application",
      img: "/images/goodtalent.png",
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
          img: "/images/goodtalent.png",
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
      img: "/images/goodtalent.png",
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
          img: "/images/goodtalent.png",
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
      tag: "Fullstack",
      objectivesTitle: "Objective",
      objectivesDetails:
        "This workflow management system enables entrprises enhance their workflow & track employee productivity tracking. It allows creation of tasks/tickets from within the app or via email integrations. It allows for collaboration across departments and tracks department/individual SLAs/OLAs for performance monitoring. It currently uses Azure AD for employee access",
      techTitle: "Enterprise/SaaS Solutions",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title:
            "SupportSyncpro (Enterprise Workflow & Collaboration Solution)",
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
      img: tsLogo,
    },
    {
      id: uuidv4(),
      title: "Next",
      img: nextLogo,
    },
    {
      id: uuidv4(),
      title: "React",
      img: reactLogo,
    },
    {
      id: uuidv4(),
      title: "NestJs",
      img: nestLogo,
    },
    {
      id: uuidv4(),
      title: "Postgres",
      img: postgresLogo,
    },
    {
      id: uuidv4(),
      title: "AWS",
      img: awsLogo,
    },
    {
      id: uuidv4(),
      title: "Nuxt",
      img: nuxtLogo,
    },
    {
      id: uuidv4(),
      title: "Vue",
      img: vueLogo,
    },
    {
      id: uuidv4(),
      title: "Vuetify",
      img: vuetifyLogo,
    },
    {
      id: uuidv4(),
      title: "Stripe",
      img: stripeLogo,
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: `Hi, I'm Kasope, a fullstack software engineer. 
      I am highly experienced in building robust & resilient solutions for enterprise scale, across fintech, payroll/recruitment, ERP & energy domains. I am a key contributor in system design decisions, where I work with cross-functional teams to transform complex problem statements into scalable digital platforms.`,
    },
    {
      id: uuidv4(),
      bio: `I have a proven track record as a senior developer, developing fintech applications that have reliably processed <span style="text-decoration: underline">billions of naira in transaction value</span>, and collaborative, data-intensive applications that have unlocked value by streamlining operations for large enterprise teams.`,
    },
    {
      id: uuidv4(),
      bio: `I demonstrate strong leadership skills, providing experienced UX & technical insight to refine product design decisions, effectively managing stakeholders, setting coding standards for security, reliability & team velocity.`,
    },
    {
      id: uuidv4(),
      bio: `I have extensive experience with taking projects from ideation stage to production, rapidly. As a result, I am comfortable working with some level of ambiguity & rapid changes, especially for early-stage/greenfield projects and startups. On the other hand, I am also adept at managing and reinforcing legacy systems, ensuring applications remain secure and maintainable`,
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
