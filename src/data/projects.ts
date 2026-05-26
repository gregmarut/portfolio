export interface Project {
    name: string;
    year: string;
    status: 'Live' | 'Sunset' | 'Archived';
    role: string;
    tagline: string;
    desc: string[];
    tags: string[];
    link: string | null;
}

export const PROJECTS: Project[] = [
    {
        name: 'TuneScript',
        year: '2025',
        status: 'Live',
        role: 'Creator · co-founder',
        tagline: 'AI-powered live music experiences driven by the audience in real time.',
        desc: [
            'A generative platform where audience input shapes a live, evolving musical performance — prompts, mood signals, and crowd reactions feed into generative models that compose on the fly.',
            "Built from the ground up to handle streaming generation with low enough latency that the music feels like it's responding to you, because it is.",
        ],
        tags: [ 'Generative AI', 'Java', 'Spring Boot', 'Angular', 'WebSockets', 'AWS' ],
        link: null,
    },
    {
        name: 'OrbWeaver',
        year: '2024',
        status: 'Live',
        role: 'Creator · co-founder',
        tagline: 'Graph-based supply-chain risk intelligence built on government procurement data.',
        desc: [
            'Ingests large-scale federal procurement datasets and maps the dependencies between agencies, vendors, and sub-tiers as a navigable graph.',
            "Surfaces systemic risk — single points of failure, foreign-influence exposure, and concentration risk — that flat tabular tooling can't see.",
        ],
        tags: [ 'Neo4J', 'Java', 'Spring Boot', 'Angular', 'Mongo DB', 'AWS' ],
        link: null,
    },
    {
        name: 'Joust',
        year: '2021',
        status: 'Live',
        role: 'Creator · co-founder',
        tagline:
            "Share, don't send. Secure dissemination with full audit trail and instant revocation.",
        desc: [
            'A data-loss-prevention and collaboration platform that lets owners share documents without ever giving up control — every view is logged, watermarked, and revocable in real time.',
            'End-to-end encrypted chat and video sit alongside, with automatic key cycling. I learned Rust to offload client-side encryption into WASM for performance, and shipped native Android + iOS apps in React Native.',
        ],
        tags: [
            'Spring Boot',
            'Angular 20',
            'Rust/WASM',
            'MariaDB',
            'Redis',
            'React Native',
            'AWS ECS',
        ],
        link: 'https://joustip.com',
    },
    {
        name: 'Surfr',
        year: '2018',
        status: 'Sunset',
        role: 'Co-founder · engineering',
        tagline: 'Music discovery as a waterfall — surface what the world is playing right now.',
        desc: [
            'Monitored thousands of public radio streams in real time. The moment a song changed, custom classification + indexing pushed it to every listener tuned to that genre over MQTT.',
            'Open the app, pick a genre, ride an endless waterfall of new music — tap any track to connect straight into the source stream. Loved by users; monetization never caught up. Wound down 2021.',
        ],
        tags: [ 'MQTT', 'Java', 'Spring', 'Android', 'iOS', 'AWS' ],
        link: null,
    },
    {
        name: 'Double Take',
        year: '2014',
        status: 'Archived',
        role: 'Solo · SkyBit Labs',
        tagline: 'Published native Android app backed by a modern Java/Spring stack.',
        desc: [
            'A shipping side-project under SkyBit Labs LLC — native Android client talking to a Spring/Hibernate backend over REST, deployed on AWS for flexible scaling.',
            'Built from scratch using modern Java design patterns; an early proving ground for the architecture that would later power Joust and TuneScript.',
        ],
        tags: [ 'Java', 'Spring', 'Hibernate', 'Android', 'REST', 'AWS' ],
        link: null,
    },
    {
        name: 'TalkStreamLive',
        year: '2006',
        status: 'Live',
        role: 'Creator · co-founder',
        tagline: 'Online access to top talk-radio stations — ~10M hits/month at its peak.',
        desc: [
            'First real venture, founded straight out of college. Built the entire stack — Spring MVC, Hibernate, MySQL on AWS, iPhone and Android clients, a JSON/XML API for mobile.',
            'Attracted a silent partner with a $25K investment and ran for nearly two decades. The schoolhouse where I learned to ship.',
        ],
        tags: [ 'Spring MVC', 'Hibernate', 'MySQL', 'iOS', 'Android', 'AWS' ],
        link: 'https://www.talkstreamlive.com',
    },
];
