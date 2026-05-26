import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExperienceRowComponent } from './experience-row.component';
import { Experience } from '../../../data/experience';

const mockJob: Experience = {
    title: 'Software Engineer',
    company: 'Acme Corp',
    location: 'Remote',
    from: '2020',
    to: '2023',
    bullets: ['Built things', 'Fixed bugs'],
    tags: ['TypeScript', 'Angular', 'RxJS', 'NgRx'],
};

@Component({
    standalone: true,
    imports: [ExperienceRowComponent],
    template: `<app-experience-row [job]="job" [open]="open()" (toggle)="onToggle()" />`,
})
class TestHostComponent {
    job = mockJob;
    open = signal(false);
    toggleCalled = false;
    onToggle(): void {
        this.toggleCalled = true;
    }
}

describe('ExperienceRowComponent', () => {
    let hostFixture: ComponentFixture<TestHostComponent>;
    let host: TestHostComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        hostFixture = TestBed.createComponent(TestHostComponent);
        host = hostFixture.componentInstance;
        hostFixture.detectChanges();
    });

    it('should create with job input and open=false', () => {
        expect(host).toBeTruthy();
        const row = hostFixture.debugElement.query(By.directive(ExperienceRowComponent));
        expect(row).toBeTruthy();
    });

    it('should render .er__head', () => {
        const head = hostFixture.debugElement.query(By.css('.er__head'));
        expect(head).toBeTruthy();
    });

    it('should not have .er--open class when open is false', () => {
        const er = hostFixture.debugElement.query(By.css('.er'));
        expect(er.nativeElement.classList.contains('er--open')).toBe(false);
    });

    it('should have .er--open class when open is true', () => {
        host.open.set(true);
        hostFixture.detectChanges();
        const er = hostFixture.debugElement.query(By.css('.er'));
        expect(er.nativeElement.classList.contains('er--open')).toBe(true);
    });

    it('should call toggle.emit() when head is clicked', () => {
        const head = hostFixture.debugElement.query(By.css('.er__head'));
        head.nativeElement.click();
        expect(host.toggleCalled).toBe(true);
    });

    it('should not render .er__body when closed', () => {
        const body = hostFixture.debugElement.query(By.css('.er__body'));
        expect(body).toBeNull();
    });

    it('should render .er__body when open is true', () => {
        host.open.set(true);
        hostFixture.detectChanges();
        const body = hostFixture.debugElement.query(By.css('.er__body'));
        expect(body).toBeTruthy();
    });

    it('should render bullet items when open', () => {
        host.open.set(true);
        hostFixture.detectChanges();
        const bullets = hostFixture.debugElement.queryAll(By.css('.er__bullet'));
        expect(bullets.length).toBe(mockJob.bullets.length);
    });
});
