import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-project-mark',
    standalone: true,
    templateUrl: './project-mark.component.html',
    styleUrl: './project-mark.component.scss',
})
export class ProjectMarkComponent {
    name = input.required<string>();
    icon = input<string>();

    initials = computed(() => {
        const parts = this.name().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return this.name().slice(0, 2).toUpperCase();
    });
}
