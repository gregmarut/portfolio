export interface StackGroup {
    group: string;
    items: string[];
}

export const STACK: StackGroup[] = [
    { group: 'Languages', items: [ 'Java 21', 'TypeScript', 'Rust', 'SQL', 'WASM' ] },
    {
        group: 'Backend',
        items: [
            'Spring Boot',
            'Hibernate (JPA)',
            'Spring Security',
            'JUnit · Mockito',
            'RabbitMQ',
            'REST',
            'WebSockets'
        ],
    },
    { group: 'Frontend', items: [ 'Angular 20', 'React Native', 'STOMP' ] },
    { group: 'Data', items: [ 'MariaDB', 'MySQL', 'MongoDB', 'Neo4J', 'Redis', 'Elastic Search' ] },
    {
        group: 'Infra',
        items: [
            'AWS',
            'Docker',
            'Jenkins',
            'NGINX',
            'Linux'
        ],
    },
];
