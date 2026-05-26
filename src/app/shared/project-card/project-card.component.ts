import { Component, signal } from '@angular/core';
import { input } from '@angular/core';
import { Project } from '../../../data/projects';
import { ProjectMarkComponent } from '../project-mark/project-mark.component';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [ProjectMarkComponent],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
    project = input.required<Project>();
    layout = input<'cards' | 'list'>('cards');
    expanded = signal(false);

    toggle(): void {
        this.expanded.set(!this.expanded());
    }
}
