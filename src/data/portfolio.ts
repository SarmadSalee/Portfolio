import {
	Project,
	Skill,
	Experience,
	Service,
	Testimonial,
	Timeline,
	NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "AI Lab", href: "#ai-lab" },
	{ label: "Services", href: "#services" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export const statistics = [
	{ label: "Years Building", value: "5+" },
	{ label: "Projects", value: "50+" },
	{ label: "Technologies", value: "30+" },
	{ label: "Mobile Apps", value: "5+" },
	{ label: "Enterprise Systems", value: "5+" },
];

export const timeline: Timeline[] = [
	{
		title: "WordPress Intern",
		description: "Started web development journey with WordPress and PHP",
		year: "2021",
	},
	{
		title: "WordPress Developer",
		description: "Built custom themes, plugins, and optimized site performance",
		year: "2021",
	},
	{
		title: "Back End Developer",
		description: "Focused on backend logic, APIs, and algorithmic performance",
		year: "2022",
	},
	{
		title: "Junior Full Stack Developer",
		description: "Developed full-stack web apps across multiple tech stacks",
		year: "2022",
	},
	{
		title: "Senior Full Stack Developer",
		description: "Architected B2B SaaS platforms and mentored junior devs",
		year: "2023",
	},
	{
		title: "Flutter Mobile Developer",
		description: "Built and published cross-platform mobile apps",
		year: "2024",
	},
	{
		title: "SaaS Product Builder",
		description: "Designing and launching AI-powered SaaS products",
		year: "2025",
	},
];

export const skills: Skill[] = [
	{ name: "React", category: "Frontend" },
	{ name: "Next.js", category: "Frontend" },
	{ name: "TypeScript", category: "Frontend" },
	{ name: "Tailwind", category: "Frontend" },
	{ name: "Redux", category: "Frontend" },
	{ name: "Flutter", category: "Frontend" },
	{ name: "React Native", category: "Frontend" },
	{ name: "Laravel", category: "Frontend" },
	{ name: "WordPress", category: "Frontend" },
	{ name: "Node.js", category: "Backend" },
	{ name: "Express", category: "Backend" },
	{ name: "Laravel", category: "Backend" },
	{ name: "PHP", category: "Backend" },
	{ name: "Python", category: "Backend" },
	{ name: "FastAPI", category: "Backend" },
	{ name: "MongoDB", category: "Backend" },
	{ name: "MySQL", category: "Backend" },
	{ name: "PostgreSQL", category: "Backend" },
	{ name: "REST APIs", category: "Backend" },
	{ name: "Socket.io", category: "Backend" },
	{ name: "Firebase", category: "Backend" },
	{ name: "Supabase", category: "Backend" },
	{ name: "Redis", category: "Backend" },
	{ name: "Microservices", category: "Backend" },
	{ name: "RAG", category: "AI" },
	{ name: "LangChain", category: "AI" },
	{ name: "OpenAI", category: "AI" },
	{ name: "GPT APIs", category: "AI" },
	{ name: "Prompt Engineering", category: "AI" },
	{ name: "Embeddings", category: "AI" },
	{ name: "Vector Databases", category: "AI" },
	{ name: "Document AI", category: "AI" },
	{ name: "Python Automation", category: "AI" },
	{ name: "Workflow Automation", category: "AI" },
	{ name: "n8n", category: "AI" },
	{ name: "Zapier", category: "AI" },
	{ name: "AWS (EC2, S3)", category: "Cloud" },
	{ name: "Docker", category: "Cloud" },
	{ name: "CI/CD", category: "Cloud" },
	{ name: "Linux", category: "Cloud" },
	{ name: "Vercel", category: "Cloud" },
	{ name: "Git", category: "Tools" },
	{ name: "GitHub", category: "Tools" },
	{ name: "VS Code", category: "Tools" },
	{ name: "Postman", category: "Tools" },
	{ name: "GitHub Actions", category: "Tools" },
	{ name: "Figma", category: "Tools" },
];

export const projects: Project[] = [
	{
		id: "maxerp",
		title: "MAXERP",
		description:
			"Full enterprise ERP system with HRM, finance, inventory, CRM, and operations modules.",
		overview:
			"A comprehensive enterprise-grade ERP system built for organizations with 100+ employees. Handles HR management, payroll, attendance, finance, accounting, inventory, supply chain, CRM, and operational workflows in a single unified platform.",
		problem:
			"Organizations relied on disconnected systems for HR, finance, inventory, and customer management — causing data silos, manual errors, and no real-time visibility across operations.",
		solution:
			"Built a modular, scalable ERP with fully integrated modules — HRM, payroll, finance, inventory, CRM, and operations — with role-based access, automated workflows, real-time dashboards, and comprehensive analytics.",
		architecture:
			"Distributed services with dedicated modules for each ERP domain, real-time dashboards via Socket.io, event-driven communication, and a React-based SPA frontend with a Flutter mobile companion.",
		techStack: [
			"React",
			"Node.js",
			"MongoDB",
			"Socket.io",
			"Flutter",
			"Firebase",
			"AWS",
			"Redis",
		],
		screenshots: ["/Screenshot 2026-08-10 131616.png"],
		logo: "/maxerp-logo.png",
		image: "/Screenshot 2026-08-10 131616.png",
		github: "https://github.com/Meet-Max-Solutions-LLC",
		liveDemo: "https://maxerp.ai",
		results: [
			"Unified 5+ business functions into one ERP platform",
			"Reduced payroll processing time by 85%",
			"Automated 10,000+ monthly attendance records",
		],
		category: "Enterprise",
	},
	// 	{
	// 		id: "ai-resume-analyzer",
	// 		title: "AI Resume Analyzer",
	// 		description:
	// 			"Intelligent resume analysis with ATS scoring, keyword matching, and AI-powered suggestions.",
	// 		overview:
	// 			"An AI-powered tool that analyzes resumes against job descriptions, provides ATS compatibility scores, and offers intelligent improvement suggestions.",
	// 		problem:
	// 			"Job seekers struggle with ATS rejection and lack feedback on how to optimize their resumes for specific roles.",
	// 		solution:
	// 			"Leveraged LLMs and embeddings to analyze resumes, match keywords against job descriptions, and provide actionable improvement suggestions.",
	// 		architecture:
	// 			"RAG pipeline with vector embeddings for semantic search, LLM-powered analysis engine, and real-time streaming responses.",
	// 		techStack: [
	// 			"Next.js",
	// 			"Python",
	// 			"LangChain",
	// 			"OpenAI",
	// 			"Pinecone",
	// 			"FastAPI",
	// 			"Docker",
	// 		],
	// 		screenshots: [],
	// 		github: "https://github.com/SarmadSalee",
	// 		liveDemo: "#",
	// 		results: [
	// 			"95% accuracy in ATS score prediction",
	// 			"Processed 5,000+ resume analyses",
	// 			"Users reported 40% more interview calls",
	// 		],
	// 		category: "AI",
	// 	},
	{
		id: "toolnova",
		title: "ToolNova",
		description:
			"A premium suite of 500+ free online tools for developers, designers, and professionals — fast, secure, and privacy-first.",
		overview:
			"A modern toolkit platform offering 500+ free online tools across 15 categories — from JSON formatting and QR generation to PDF editing and image compression — all running in the browser.",
		problem:
			"Professionals juggle dozens of scattered, signup-gated online tools, wasting time on ads, accounts, and privacy-hostile free utilities.",
		solution:
			"Built a single fast, privacy-first platform with 500+ tools organized into 15 categories. Everything runs client-side — no accounts, no data storage, and no usage limits.",
		architecture:
			"Next.js application with category-driven routing, lightweight client-side tool engines, and a responsive, accessible interface across desktop and mobile.",
		techStack: ["Next.js", "TypeScript", "Tailwind", "React", "Vercel"],
		screenshots: ["/I_need_looks_like_ads_202608101401.jpeg"],
		logo: "/Gemini_Generated_Image_l8kes8l8kes8l8ke-removebg-preview.png",
		image: "/I_need_looks_like_ads_202608101401.jpeg",
		github: "https://github.com/SarmadSalee",
		liveDemo: "https://toolnova-delta.vercel.app",
		results: [
			"500+ tools across 15 categories",
			"Serving 1M+ users",
			"100% free with no signup required",
		],
		category: "SaaS",
	},
	{
		id: "paperhouse",
		title: "PaperHouse",
		description:
			"Pakistan's #1 free past papers library — Matric & FSc papers for all Punjab boards, free forever.",
		overview:
			"A free library of Matric and FSc past papers covering all Punjab boards and subjects from 2018–2026, built to make exam preparation accessible to every student.",
		problem:
			"Students across Punjab boards struggle to find past papers — sources are scattered, outdated, or behind signups and paywalls.",
		solution:
			"Centralized 30+ past papers across 12 subjects into one fast, searchable library. Papers are browsable by class, subject, and board, with a request flow that adds missing papers within 48 hours.",
		architecture:
			"Next.js application with category-based routing, full-text search, a blog, and a paper-request workflow — optimized for fast load times on low-end devices.",
		techStack: ["Next.js", "TypeScript", "Tailwind", "React", "Vercel"],
		screenshots: ["/Screenshot 2026-08-10 140920.png"],
		logo: "/enhance_this_image_2K_202608101414.jpeg",
		image: "/Screenshot 2026-08-10 140920.png",
		github: "https://github.com/SarmadSalee",
		liveDemo: "https://paper-house.vercel.app",
		results: [
			"30+ past papers across 12 subjects",
			"All Punjab boards, 2018–2026",
			"100% free with no signup or login",
		],
		category: "SaaS",
	},
	// 	{
	// 		id: "wp-form-builder",
	// 		title: "WordPress Form Builder",
	// 		description:
	// 			"Drag-and-drop form builder with conditional logic, multi-step forms, and dynamic fields.",
	// 		overview:
	// 			"A powerful WordPress plugin that enables drag-and-drop form creation with advanced conditional logic, multi-step workflows, and dynamic field population.",
	// 		problem:
	// 			"Existing WordPress form builders were either too simplistic or overly complex with bloated codebases.",
	// 		solution:
	// 			"Built a lightweight, performant form builder with intuitive drag-and-drop interface, powerful conditional logic engine, and developer-friendly hooks.",
	// 		architecture:
	// 			"React-powered admin interface with PHP backend, REST API for form submissions, and optimized database schema for complex form structures.",
	// 		techStack: ["React", "PHP", "WordPress", "MySQL", "REST API", "JavaScript"],
	// 		screenshots: [],
	// 		github: "https://github.com/SarmadSalee",
	// 		liveDemo: "#",
	// 		results: [
	// 			"5,000+ active installations",
	// 			"4.8-star rating on WordPress repository",
	// 			"Used by 200+ businesses",
	// 		],
	// 		category: "WordPress",
	// 	},
	// 	{
	// 		id: "ai-rag-assistant",
	// 		title: "AI RAG Assistant",
	// 		description:
	// 			"Document Q&A system with PDF upload, semantic search, streaming chat, and vector database.",
	// 		overview:
	// 			"A Retrieval-Augmented Generation system that allows users to upload documents and ask questions with context-aware streaming responses.",
	// 		problem:
	// 			"Teams waste hours searching through documents for specific information without an intelligent way to query their knowledge base.",
	// 		solution:
	// 			"Implemented RAG pipeline with document chunking, vector embeddings, semantic search, and LLM-powered contextual answering with source citations.",
	// 		architecture:
	// 			"Document processing pipeline with OCR, chunking, and embedding generation. Vector database for similarity search. Streaming LLM responses via Server-Sent Events.",
	// 		techStack: [
	// 			"Next.js",
	// 			"Python",
	// 			"LangChain",
	// 			"OpenAI",
	// 			"ChromaDB",
	// 			"FastAPI",
	// 			"WebSockets",
	// 		],
	// 		screenshots: [],
	// 		github: "https://github.com/SarmadSalee",
	// 		liveDemo: "#",
	// 		results: [
	// 			"100% improvement in document retrieval time",
	// 			"98% relevance in answer accuracy",
	// 			"Handles 500+ page documents seamlessly",
	// 		],
	// 		category: "AI",
	// 	},
	{
		id: "flowpilot",
		title: "FlowPilot",
		description:
			"AI workflow copilot for automating internal operations and team productivity.",
		overview:
			"A workflow orchestration platform designed to help teams automate repetitive tasks, streamline internal operations, and improve decision-making with AI guidance.",
		problem:
			"Operations teams were spending too much time coordinating repetitive processes across tools, leading to slow execution and fragmented collaboration.",
		solution:
			"Built a workflow automation assistant with AI-triggered steps, intelligent task routing, and structured execution flows for operational teams.",
		architecture:
			"Event-driven automation engine, API orchestration layer, rule-based workflows, and AI-powered decision support connected to business tooling.",
		techStack: [
			"Next.js",
			"TypeScript",
			"Node.js",
			"OpenAI",
			"PostgreSQL",
			"Redis",
			"Docker",
		],
		screenshots: ["/enhance_this_image_ads_2K_202608100036.jpeg"],
		logo: "/Enhance_this_image_2K_202608101428.jpeg",
		image: "/enhance_this_image_ads_2K_202608100036.jpeg",
		github: "https://github.com/SarmadSalee/FlowPilot",
		liveDemo: "#",
		results: [
			"Reduced repetitive ops work by 50%",
			"Improved cross-team coordination",
			"Accelerated workflow execution across business processes",
		],
		category: "AI",
	},
	{
		id: "leadengine",
		title: "LeadEngine",
		description:
			"Lead intelligence and automation platform for outbound sales pipelines.",
		overview:
			"A lead management system that brings together intake, qualification, scoring, and automation to help sales teams prioritize the best opportunities.",
		problem:
			"Sales teams were losing time on low-quality leads and manual pipeline triage, which hurt conversion efficiency and forecasting quality.",
		solution:
			"Created a lead engine with qualification workflows, scoring logic, routing rules, and analytics to help teams focus on high-intent prospects.",
		architecture:
			"Modular SaaS stack with pipeline orchestration, data enrichment services, scoring engine, and role-based dashboards for sales operations.",
		techStack: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"Express",
			"Docker",
			"AWS",
		],
		screenshots: ["/Enhancing_image_with_second_logo_202608081531.jpeg"],
		logo: "/ChatGPT Image Aug 3, 2026, 12_55_54 PM.png",
		image: "/Enhancing_image_with_second_logo_202608081531.jpeg",
		github: "https://github.com/SarmadSalee/LeadEngine",
		liveDemo: "#",
		results: [
			"Shortened lead qualification cycle",
			"Improved sales focus on high-value prospects",
			"Increased pipeline visibility and reporting",
		],
		category: "SaaS",
	},
	{
		id: "flowengine",
		title: "FlowEngine",
		description:
			"Business workflow automation engine for process execution and task routing.",
		overview:
			"A workflow engine built to manage multi-step business processes, automate approvals, and coordinate tasks between teams and systems.",
		problem:
			"Manual approvals and task coordination were creating bottlenecks, delays, and inconsistent execution across operational workflows.",
		solution:
			"Designed a configurable process engine with workflow states, role-based approvals, automation triggers, and analytics for operational visibility.",
		architecture:
			"Workflow state machine, API integration layer, execution scheduler, and event-based automation system for cross-system coordination.",
		techStack: [
			"Next.js",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"TypeScript",
			"Docker",
			"Kafka",
		],
		screenshots: ["/enhance_this_image_for_post_202608092310.jpeg"],
		logo: "/ChatGPT Image Aug 4, 2026, 12_14_18 AM.png",
		image: "/enhance_this_image_for_post_202608092310.jpeg",
		github: "https://github.com/SarmadSalee/FlowEngine",
		liveDemo: "#",
		results: [
			"Reduced workflow turnaround time",
			"Improved approvals and accountability",
			"Standardized operational execution across teams",
		],
		category: "Automation",
	},
];

export const experiences: Experience[] = [
	{
		role: "Senior Full Stack Developer",
		company: "Max HR",
		period: "May 2023 – Present",
		achievements: [
			"Spearheaded development of scalable B2B SaaS applications, translating complex business requirements into technical solutions",
			"Architected and optimized backend services using Node.js and Express to handle high-volume data transactions",
			"Engineered real-time features using Socket.io and implemented Firebase integrations for authentication and database management",
			"Mentored junior developers, conducted code reviews, and enforced best practices in code quality and system architecture",
			"Deployed and managed application infrastructure on AWS (EC2, S3), supporting reliable delivery of production services",
			"Built cross-platform Flutter mobile applications and managed release to Google Play Store and Apple App Store",
			"Packaged and deployed desktop application builds for Windows and macOS",
		],
		technologies: [
			"Node.js",
			"Express",
			"React",
			"MongoDB",
			"Socket.io",
			"Firebase",
			"Flutter",
			"AWS",
		],
	},
	{
		role: "Junior Full Stack Developer",
		company: "Max HR",
		period: "Jul 2022 – Apr 2023",
		achievements: [
			"Collaborated with senior engineers to build, test, and deploy interactive full-stack web applications",
			"Played key role in frontend and backend development of MAXERP, an enterprise-grade productivity and employee tracking platform",
			"Developed responsive, user-friendly interfaces using React.js while ensuring cross-platform compatibility",
		],
		technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
	},
	{
		role: "Junior Full Stack Developer",
		company: "Plan Z Web",
		period: "Mar 2022 – Jul 2022",
		achievements: [
			"Handled end-to-end development lifecycles for diverse web projects in a comprehensive full-stack role",
			"Formulated complex backend logic and optimized algorithmic performance for client applications",
			"Gained hands-on experience in full-stack deployment pipelines and server management",
		],
		technologies: ["React", "Node.js", "PHP", "WordPress", "MongoDB"],
	},
	{
		role: "Back End Developer",
		company: "Plan Z Web",
		period: "Jan 2022 – Feb 2022",
		achievements: [
			"Bridged backend architecture with frontend integrations, expanding technical expertise across the stack",
			"Contributed to frontend feature development using React.js while maintaining core backend stability",
			"Quickly adapted to new JavaScript libraries to meet rapid project delivery timelines",
		],
		technologies: ["Node.js", "Express", "React", "JavaScript", "REST APIs"],
	},
	{
		role: "WordPress Developer",
		company: "Plan Z Web",
		period: "Aug 2021 – Jan 2022",
		achievements: [
			"Developed custom WordPress solutions tailored to diverse client specifications",
			"Engineered and deployed custom WordPress plugins to extend CMS functionality",
			"Customized intricate themes and optimized overall site speed and performance metrics",
		],
		technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
	},
	{
		role: "WordPress Intern",
		company: "Plan Z Web",
		period: "Jun 2021 – Jul 2021",
		achievements: [
			"Completed intensive internship focusing on core WordPress development and web fundamentals",
			"Shadowed senior developers to learn industry standards in PHP development and client-side scripting",
		],
		technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS"],
	},
];

export const aiLabItems = [
	{
		title: "RAG Systems",
		description: "Retrieval-Augmented Generation for document intelligence",
		icon: "search",
	},
	{
		title: "AI Agents",
		description: "Autonomous agents for workflow automation",
		icon: "bot",
	},
	{
		title: "Prompt Engineering",
		description: "Advanced prompt strategies for LLM optimization",
		icon: "message",
	},
	{
		title: "OpenAI Integration",
		description: "GPT-4 and embedding API implementations",
		icon: "sparkles",
	},
	{
		title: "Embeddings",
		description: "Text embeddings for semantic search and clustering",
		icon: "network",
	},
	{
		title: "Document AI",
		description: "Intelligent document processing and analysis",
		icon: "file",
	},
	{
		title: "Knowledge Base",
		description: "Vector databases for enterprise knowledge management",
		icon: "database",
	},
	{
		title: "Semantic Search",
		description: "Meaning-based search beyond keyword matching",
		icon: "search",
	},
	{
		title: "LLM Applications",
		description: "Production LLM applications with monitoring",
		icon: "cpu",
	},
	{
		title: "Workflow Automation",
		description: "AI-driven business process automation",
		icon: "zap",
	},
];

export const services: Service[] = [
	{
		title: "B2B SaaS Development",
		description:
			"Build production-ready B2B SaaS platforms using MERN stack with real-time features.",
		icon: "cloud",
	},
	{
		title: "Flutter Mobile Apps",
		description:
			"Cross-platform mobile applications published to Google Play and Apple App Store.",
		icon: "smartphone",
	},
	{
		title: "REST API Development",
		description:
			"Design and build scalable, documented REST APIs for your applications.",
		icon: "code",
	},
	{
		title: "Real-Time Systems",
		description:
			"Engineer real-time features with Socket.io for chat, notifications, and live updates.",
		icon: "zap",
	},
	{
		title: "Cloud Deployment",
		description:
			"Deploy and scale applications on AWS (EC2, S3) with CI/CD pipelines.",
		icon: "server",
	},
	{
		title: "WordPress Development",
		description:
			"Custom WordPress plugins, themes, and performance optimization.",
		icon: "layout",
	},
	{
		title: "Desktop App Packaging",
		description:
			"Package and deploy desktop applications for Windows and macOS.",
		icon: "monitor",
	},
];

export const testimonials: Testimonial[] = [
	{
		name: "Ahmed Hassan",
		role: "CTO",
		company: "TechNova Solutions",
		content:
			"Sarmad delivered an exceptional enterprise HRMS that transformed our HR operations. His understanding of both frontend and backend architecture is outstanding.",
	},
	{
		name: "Zara Malik",
		role: "Product Manager",
		company: "SaaS Labs",
		content:
			"Working with Sarmad was a great experience. He built our AI-powered lead generation platform that exceeded our expectations in both performance and user experience.",
	},
	{
		name: "Omar Farooq",
		role: "Engineering Lead",
		company: "Enterprise Systems Inc.",
		content:
			"The RAG document assistant Sarmad built for us has revolutionized how our team accesses information. His expertise in AI and full-stack development is remarkable.",
	},
];

export const currentlyBuilding = [
	{
		title: "ToolNova",
		description: "Expanding to 500+ free online tools across new categories",
		status: "live",
	},
	{
		title: "PaperHouse",
		description: "Growing the past papers library to more boards and classes",
		status: "live",
	},
	{
		title: "AI Resume Analyzer",
		description: "Adding GPT-5 integration and video interview analysis",
		status: "in-progress",
	},
	{
		title: "MAXERP",
		description: "Building mobile app and AI-powered HR analytics",
		status: "in-progress",
	},
	{
		title: "AI Workflow Automation",
		description: "No-code workflow builder with AI agents",
		status: "planning",
	},
	{
		title: "Personal AI Assistant",
		description: "Multi-modal AI assistant with voice and vision",
		status: "planning",
	},
];
