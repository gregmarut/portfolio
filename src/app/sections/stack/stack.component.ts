import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { STACK } from '../../../data/stack';

@Component({
    selector: 'app-stack',
    standalone: true,
    imports: [SectionHeaderComponent],
    templateUrl: './stack.component.html',
    styleUrl: './stack.component.scss',
})
export class StackComponent {
    readonly groups = STACK;
}
