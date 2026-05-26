import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HeroComponent] })
            .overrideComponent(HeroComponent, {
                set: { imports: [], schemas: [NO_ERRORS_SCHEMA] },
            })
            .compileComponents();

        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 4 stats', () => {
        expect(component.stats.length).toBe(4);
    });

    it('should have marquee items', () => {
        expect(component.marqueeItems.length).toBeGreaterThan(0);
    });

    it('should render .hero__h1', () => {
        const el: HTMLElement = fixture.nativeElement;
        expect(el.querySelector('.hero__h1')).toBeTruthy();
    });

    it('should render .hero__meta with name and title', () => {
        const el: HTMLElement = fixture.nativeElement;
        const meta = el.querySelector('.hero__meta');
        expect(meta).toBeTruthy();
        expect(meta!.textContent).toContain('Greg Marut');
    });

    it('should render .btn--primary button', () => {
        const el: HTMLElement = fixture.nativeElement;
        expect(el.querySelector('.btn--primary')).toBeTruthy();
    });

    it('should render .btn--ghost button', () => {
        const el: HTMLElement = fixture.nativeElement;
        expect(el.querySelector('.btn--ghost')).toBeTruthy();
    });
});
