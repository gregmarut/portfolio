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

    it('should render num inside .num', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const numElement = fixture.nativeElement.querySelector('.num');
        expect(numElement?.textContent).toBe('01');
    });

    it('should render label in .kicker', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const kickerElement = fixture.nativeElement.querySelector('.kicker');
        expect(kickerElement?.textContent).toContain('About');
    });

    it('should render title in .title', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const titleElement = fixture.nativeElement.querySelector('.title');
        expect(titleElement?.textContent).toBe('About Me');
    });

    it('should render subtitle in .sub when provided', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.componentRef.setInput('sub', 'This is a subtitle');
        fixture.detectChanges();

        const subElement = fixture.nativeElement.querySelector('.sub');
        expect(subElement?.textContent).toBe('This is a subtitle');
    });

    it('should not render .sub element when sub is empty (default)', () => {
        fixture.componentRef.setInput('num', '01');
        fixture.componentRef.setInput('label', 'About');
        fixture.componentRef.setInput('title', 'About Me');
        fixture.detectChanges();

        const subElement = fixture.nativeElement.querySelector('.sub');
        expect(subElement).toBeNull();
    });
});
