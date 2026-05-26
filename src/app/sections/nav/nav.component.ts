import { Component, WritableSignal, afterNextRender, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { ScrollSpyService } from '../../core/scroll-spy.service';

//section IDs to spy on
const SECTION_IDS = ['about', 'work', 'experience', 'stack', 'contact'];

//nav links definition
const NAV_LINKS = [
    { num: '01', label: 'About', id: 'about' },
    { num: '02', label: 'Work', id: 'work' },
    { num: '03', label: 'Experience', id: 'experience' },
    { num: '04', label: 'Stack', id: 'stack' },
    { num: '05', label: 'Contact', id: 'contact' },
];

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
})
export class NavComponent {
    private readonly scrollSpyService = inject(ScrollSpyService);

    readonly activeSection = toSignal(this.scrollSpyService.active$, { initialValue: 'about' });
    readonly scrolled: WritableSignal<boolean> = signal(false);
    readonly links = NAV_LINKS;

    constructor() {
        fromEvent(window, 'scroll')
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                this.scrolled.set(window.scrollY > 24);
            });

        afterNextRender(() => {
            this.scrollSpyService.observe(SECTION_IDS);
        });
    }

    scrollTo(id: string): void {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
