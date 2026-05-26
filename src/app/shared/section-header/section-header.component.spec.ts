import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header.component';

describe('SectionHeaderComponent', () => {
    let component: SectionHeaderComponent;
    let fixture: ComponentFixture<SectionHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectionHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SectionHeaderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render num inside .sh__num', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const numElement = fixture.nativeElement.querySelector('.sh__num');
        expect(numElement?.textContent).toBe('01');
    });

    it('should render label in .sh__kicker', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const kickerElement = fixture.nativeElement.querySelector('.sh__kicker');
        expect(kickerElement?.textContent).toContain('About');
    });

    it('should render title in .sh__title', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const titleElement = fixture.nativeElement.querySelector('.sh__title');
        expect(titleElement?.textContent).toBe('About Me');
    });

    it('should render subtitle in .sh__sub when provided', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.componentRef.setInput('sub', 'This is a subtitle');
        fixture.detectChanges();

        const subElement = fixture.nativeElement.querySelector('.sh__sub');
        expect(subElement?.textContent).toBe('This is a subtitle');
    });

    it('should not render .sh__sub element when sub is empty (default)', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const subElement = fixture.nativeElement.querySelector('.sh__sub');
        expect(subElement).toBeNull();
    });
});
