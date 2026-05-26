export interface Experience {
    title: string;
    company: string;
    location: string;
    from: string;
    to: string;
    bullets: string[];
    tags: string[];
}

export const EXPERIENCE: Experience[] = [
    {
        title: 'Director of R&D',
        company: 'Three Sixty Corp',
        location: 'SDVOSB',
        from: '2023',
        to: 'Present',
        bullets: [
            'Founding technical partner at a service-disabled veteran-owned small business. Lead R&D end-to-end — architected and delivered three full-stack platforms from concept to production across security, supply-chain intelligence, and AI-driven entertainment.',
            'Designed and built Joust: secure communications and file dissemination with E2E encryption, granular access controls, watermarking, and real-time revocation. Encrypted streaming architecture handles large-file transfer with traceability and controlled lifecycle.',
            'Created OrbWeaver — graph-based supply-chain risk intelligence over federal procurement data, mapping agency dependencies to surface systemic risk.',
            'Built TuneScript — an AI-powered interactive entertainment platform generating live, audience-driven music using real-time input and generative models.',
        ],
        tags: [
            'Java',
            'Spring Boot',
            'Angular',
            'Rust/WASM',
            'React Native',
            'Neo4J',
            'MariaDB',
            'MongoDB',
            'Redis',
            'AWS',
        ],
    },
    {
        title: 'Senior Java Engineer',
        company: 'ThreatConnect',
        location: 'Cybersecurity',
        from: '2015',
        to: '2023',
        bullets: [
            'Researched and prototyped new full-stack solutions independently. Took ownership over the Java SDK, shipping enhancements and bug fixes to partner clients.',
            'Rewrote a J2EE microservice on Spring Boot — turned a multi-step deploy into download-and-run. Dockerized the entire software stack, standardizing dev environments across engineering.',
            'Built a custom testing framework so developers could unit- and integration-test ThreatConnect apps. Authored a Maven plugin for packaging those apps for distribution.',
            'Extended Log4J to index logs in Elastic Search, adding searchable observability across the core product and its apps.',
        ],
        tags: [ 'Java', 'JEE', 'Angular', 'TypeScript', 'Spring Boot', 'Maven', 'Docker', 'Log4J', 'Elastic Search', 'AWS' ],
    },
    {
        title: 'Senior Java Engineer',
        company: 'Phase One Consulting · USDA',
        location: 'Federal',
        from: '2013',
        to: '2015',
        bullets: [
            'Rebuilt a legacy USDA application on modern frameworks. Designed the architecture and directly refactored hot paths — final implementation ran ~6,000% faster than its predecessor.',
            "Stood up the team's build infrastructure on AWS: Stash → Jenkins CI → Sonar → Nexus. Migrated the team off SVN to Git and instituted code review.",
            "Shipped a Java Swing client for offline access on Windows 8 field laptops — sync'd with the server over REST whenever connectivity returned.",
        ],
        tags: [ 'Java', 'Spring', 'Hibernate', 'Swing', 'Jenkins', 'AWS', 'REST' ],
    },
    {
        title: 'Java Developer',
        company: 'Merlin International · VA / USDA',
        location: 'Federal',
        from: '2011',
        to: '2013',
        bullets: [
            'Designed and implemented frontend and backend Java for the Veterans Benefit Management System (VBMS) inside a daily-scrum agile team.',
            'Worked directly with the customer to gather sprint requirements; mentored junior developers in a paired-programming and code-review environment.',
            'Discovered and escalated system vulnerabilities directly to the client. Implemented Spring Security and authored schema-migration SQL.',
            'Built a rapid Android prototype to demonstrate a proof-of-concept mobile experience for the client.',
        ],
        tags: [ 'Java', 'Spring', 'Hibernate', 'jQuery', 'Android', 'Agile', 'Apache Tiles' ],
    },
    {
        title: 'Java Developer',
        company: 'IBM · TSA / FEMA',
        location: 'Federal',
        from: '2009',
        to: '2011',
        bullets: [
            'Refactored e-SecureFlight for the TSA end-to-end — requirements through production support. Redesigned the system with UML class and sequence diagrams, then implemented it on Struts 2 / Apache Tiles / JMS / WebSphere.',
            'Built the login system for the FEMA State Shelter System (Struts + Spring + iBATIS) and expanded functionality across the National Shelter System.',
        ],
        tags: [ 'Java', 'Struts 2', 'Spring', 'JMS', 'WebSphere', 'JBoss' ],
    },
];
