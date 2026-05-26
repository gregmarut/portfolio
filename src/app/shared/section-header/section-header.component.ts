import { Component, input } from '@angular/core';

@Component({
    selector: 'app-section-header',
    standalone: true,
    templateUrl: './section-header.component.html',
    styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
    num = input.required<string>();
    label = input.required<string>();
    title = input.required<string>();
    sub = input<string>('');
}
