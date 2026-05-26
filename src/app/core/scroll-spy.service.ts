import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
    private readonly activeSubject = new Subject<string>();
    private observer: IntersectionObserver | null = null;

    readonly active$: Observable<string> = this.activeSubject.pipe(distinctUntilChanged());

    observe(ids: string[]): void {
        this.observer?.disconnect();

        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => null != el);

        if (elements.length) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    const visible = entries
                        .filter((e) => e.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                    if (visible[0]) {
                        this.activeSubject.next(visible[0].target.id);
                    }
                },
                {
                    rootMargin: '-30% 0px -55% 0px',
                    threshold: [0, 0.25, 0.5, 0.75, 1],
                },
            );

            elements.forEach((el) => this.observer!.observe(el));
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
        this.activeSubject.complete();
    }
}
