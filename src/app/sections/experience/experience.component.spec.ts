import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
    let fixture: ComponentFixture<ExperienceComponent>;
    let component: ExperienceComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExperienceComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have openIndex start at 0', () => {
        expect(component.openIndex()).toBe(0);
    });

    it('should set openIndex to -1 when toggling the already-open index', () => {
        component.toggle(0);
        expect(component.openIndex()).toBe(-1);
    });

    it('should set openIndex to 1 when toggling index 1 while index 0 is open', () => {
        component.toggle(1);
        expect(component.openIndex()).toBe(1);
    });

    it('should render #experience section', () => {
        const section = fixture.debugElement.query(By.css('#experience'));
        expect(section).toBeTruthy();
    });

    it('should render app-experience-row elements', () => {
        const rows = fixture.debugElement.queryAll(By.css('app-experience-row'));
        expect(rows.length).toBe(component.jobs.length);
    });
});
