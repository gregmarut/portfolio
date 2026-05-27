import { Component } from '@angular/core';
import { TerminalComponent } from '../../shared/terminal/terminal.component';

const STATS = [
    { value: '25', label: 'years building' },
    { value: '4', label: 'companies founded' },
    { value: '6', label: 'platforms shipped' },
    { value: 'KJYO', label: 'home airport' },
];

const MARQUEE_ITEMS = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'React Native',
    'AWS',
    'PostgreSQL',
    'MariaDB',
    'Redis',
    'MongoDB',
    'RabbitMQ',
    'Neo4J',
    'Docker',
    'Rust',
    'WASM',
];

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [ TerminalComponent ],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
})
export class HeroComponent {
    readonly stats = STATS;
    readonly marqueeItems = MARQUEE_ITEMS;

    scrollTo(e: Event, id: string): void {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
