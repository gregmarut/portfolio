import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WorkComponent } from './work.component';
import { PROJECTS } from '../../../data/projects';

describe('WorkComponent', () => {
    let component: WorkComponent;
    let fixture: ComponentFixture<WorkComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WorkComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(WorkComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize layout signal as "cards"', () => {
        expect(component.layout()).toBe('cards');
    });

    it('should change layout signal to "list" when set', () => {
        component.layout.set('list');
        expect(component.layout()).toBe('list');
    });

    it('should have a .grid element', () => {
        const gridElement = debugElement.query(By.css('.grid'));
        expect(gridElement).toBeTruthy();
    });

    it('should not have grid--list class when layout is "cards"', () => {
        component.layout.set('cards');
        fixture.detectChanges();
        const gridElement = debugElement.query(By.css('.grid'));
        expect(gridElement.nativeElement.classList.contains('grid--list')).toBe(false);
    });

    it('should have grid--list class when layout is "list"', () => {
        component.layout.set('list');
        fixture.detectChanges();
        const gridElement = debugElement.query(By.css('.grid'));
        expect(gridElement.nativeElement.classList.contains('grid--list')).toBe(true);
    });

    it('should have a .toolbar element', () => {
        const toolbarElement = debugElement.query(By.css('.toolbar'));
        expect(toolbarElement).toBeTruthy();
    });

    it('should have both layout toggle buttons', () => {
        const toggleButtons = debugElement.queryAll(By.css('.tog'));
        expect(toggleButtons.length).toBe(2);
    });

    it('should have projects property', () => {
        expect(component.projects).toEqual(PROJECTS);
    });
});
