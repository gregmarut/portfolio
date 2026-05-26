import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [SectionHeaderComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {}
