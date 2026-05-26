import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { Project } from '../../../data/projects';

const mockProject: Project = {
    name: 'Joust',
    year: '2021',
    status: 'Live',
    role: 'Founder',
    tagline: 'A Secure communications platform.',
    desc: [ 'Full description here.' ],
    tags: [ 'Angular', 'TypeScript' ],
    link: 'https://www.joust.com',
};

describe('ProjectCardComponent', () => {
    let component: ProjectCardComponent;
    let fixture: ComponentFixture<ProjectCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ ProjectCardComponent ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectCardComponent);
        component = fixture.componentInstance;
    });

    it('should create in cards layout with a project input', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'cards');
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create in list layout', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'list');
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should start with expanded signal false', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.detectChanges();
        expect(component.expanded()).toBe(false);
    });

    it('should flip expanded to true after one toggle()', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.detectChanges();
        component.toggle();
        expect(component.expanded()).toBe(true);
    });

    it('should return expanded to false after two toggle() calls', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.detectChanges();
        component.toggle();
        component.toggle();
        expect(component.expanded()).toBe(false);
    });

    it('should render .pc in cards layout', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'cards');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pc');
        expect(el).toBeTruthy();
    });

    it('should render .pl in list layout', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'list');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pl');
        expect(el).toBeTruthy();
    });

    it('should show .pc__desc when expanded in cards layout', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'cards');
        fixture.detectChanges();
        component.toggle();
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pc__desc');
        expect(el).toBeTruthy();
    });

    it('should not render .pc__desc when not expanded', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'cards');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pc__desc');
        expect(el).toBeNull();
    });

    it('should render the project name', () => {
        fixture.componentRef.setInput('project', mockProject);
        fixture.componentRef.setInput('layout', 'cards');
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('.pc__name');
        expect(el?.textContent?.trim()).toBe('Joust');
    });
});
