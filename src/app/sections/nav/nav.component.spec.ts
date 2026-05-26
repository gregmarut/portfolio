import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { ScrollSpyService } from '../../core/scroll-spy.service';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { By } from '@angular/platform-browser';

const mockObserve = vi.fn();

const mockScrollSpyService = {
    active$: of('about'),
    observe: mockObserve,
};

class MockIntersectionObserver {
    observe = vi.fn();
    disconnect = vi.fn();
    unobserve = vi.fn();
    constructor() {}
}

describe('NavComponent', () => {
    let fixture: ComponentFixture<NavComponent>;
    let component: NavComponent;

    beforeEach(async () => {
        vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
        mockObserve.mockClear();

        await TestBed.configureTestingModule({
            imports: [NavComponent],
            providers: [{ provide: ScrollSpyService, useValue: mockScrollSpyService }],
        }).compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('scrolled signal should start false', () => {
        expect(component.scrolled()).toBe(false);
    });

    it('activeSection signal should have initial value "about"', () => {
        expect(component.activeSection()).toBe('about');
    });

    it('scrollTo should call scrollIntoView on the element', () => {
        const mockScrollIntoView = vi.fn();
        const mockEl = { scrollIntoView: mockScrollIntoView } as unknown as HTMLElement;
        const spy = vi.spyOn(document, 'getElementById').mockReturnValue(mockEl);

        component.scrollTo('about');

        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
        spy.mockRestore();
    });

    it('scrollTo should do nothing when element is not found', () => {
        const spy = vi.spyOn(document, 'getElementById').mockReturnValue(null);

        //should not throw
        expect(() => component.scrollTo('nonexistent')).not.toThrow();
        spy.mockRestore();
    });

    it('nav should have class nav--scrolled when scrolled() is true', () => {
        component.scrolled.set(true);
        fixture.detectChanges();

        const nav = fixture.debugElement.query(By.css('nav'));
        expect(nav.nativeElement.classList.contains('nav--scrolled')).toBe(true);
    });

    it('nav should not have class nav--scrolled when scrolled() is false', () => {
        component.scrolled.set(false);
        fixture.detectChanges();

        const nav = fixture.debugElement.query(By.css('nav'));
        expect(nav.nativeElement.classList.contains('nav--scrolled')).toBe(false);
    });
});
