import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ExperienceRowComponent } from '../../shared/experience-row/experience-row.component';
import { EXPERIENCE } from '../../../data/experience';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [SectionHeaderComponent, ExperienceRowComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    openIndex = signal<number>(0); //first row open by default
    readonly jobs = EXPERIENCE;

    toggle(i: number): void {
        if (this.openIndex() === i) {
            this.openIndex.set(-1);
        } else {
            this.openIndex.set(i);
        }
    }
}
