import { Component, input, output } from '@angular/core';
import { Experience } from '../../../data/experience';

@Component({
    selector: 'app-experience-row',
    standalone: true,
    templateUrl: './experience-row.component.html',
    styleUrl: './experience-row.component.scss',
})
export class ExperienceRowComponent {
    job = input.required<Experience>();
    open = input<boolean>(false);
    toggle = output<void>();
}
