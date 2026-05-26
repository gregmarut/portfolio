import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PROJECTS } from '../../../data/projects';

@Component({
    selector: 'app-work',
    standalone: true,
    imports: [SectionHeaderComponent, ProjectCardComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss',
})
export class WorkComponent {
    layout = signal<'cards' | 'list'>('cards');
    readonly projects = PROJECTS;
}
