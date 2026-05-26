import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { NavComponent } from './sections/nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { WorkComponent } from './sections/work/work.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { StackComponent } from './sections/stack/stack.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        NavComponent,
        HeroComponent,
        AboutComponent,
        WorkComponent,
        ExperienceComponent,
        StackComponent,
        ContactComponent,
        FooterComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        afterNextRender(() => {
            const handler = (e: PointerEvent) => {
                document.documentElement.style.setProperty('--mx', e.clientX + 'px');
                document.documentElement.style.setProperty('--my', e.clientY + 'px');
            };
            window.addEventListener('pointermove', handler, { passive: true });
            this.destroyRef.onDestroy(() => window.removeEventListener('pointermove', handler));
        });
    }
}
