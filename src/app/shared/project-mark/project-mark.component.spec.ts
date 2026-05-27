import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectMarkComponent } from './project-mark.component';

describe('ProjectMarkComponent', () => {
    let component: ProjectMarkComponent;
    let fixture: ComponentFixture<ProjectMarkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectMarkComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectMarkComponent);
        component = fixture.componentInstance;
    });

    it('should create with a name input', () => {
        fixture.componentRef.setInput('name', 'Joust');
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should return "JO" for single-word name "Joust"', () => {
        fixture.componentRef.setInput('name', 'Joust');
        fixture.detectChanges();
        expect(component.initials()).toBe('JO');
    });

    it('should return "DT" for two-word name "Double Take"', () => {
        fixture.componentRef.setInput('name', 'Double Take');
        fixture.detectChanges();
        expect(component.initials()).toBe('DT');
    });

    it('should return "SU" for single-word name "Surfr"', () => {
        fixture.componentRef.setInput('name', 'Surfr');
        fixture.detectChanges();
        expect(component.initials()).toBe('SU');
    });

    it('should render .pm div in the DOM', () => {
        fixture.componentRef.setInput('name', 'Joust');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pm');
        expect(el).toBeTruthy();
    });

    it('should render initials text inside .initials', () => {
        fixture.componentRef.setInput('name', 'Double Take');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.initials');
        expect(el?.textContent?.trim()).toBe('DT');
    });
});
