import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header.component';

@Component({
    standalone: true,
    imports: [SectionHeaderComponent],
    template: `
        <app-section-header [num]="num" [label]="label" [sub]="sub">
            {{ title }}
        </app-section-header>
    `,
})
class TestHostComponent {
    num = '01';
    label = 'About';
    title = 'About Me';
    sub = '';
}

describe('SectionHeaderComponent', () => {
    let host: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        host = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(host).toBeTruthy();
    });

    it('should render num inside .num', () => {
        fixture.detectChanges();
        const numElement = fixture.nativeElement.querySelector('.num');
        expect(numElement?.textContent).toBe('01');
    });

    it('should render label in .kicker', () => {
        fixture.detectChanges();
        const kickerElement = fixture.nativeElement.querySelector('.kicker');
        expect(kickerElement?.textContent).toContain('// about');
    });

    it('should render title in .title', () => {
        fixture.detectChanges();
        const titleElement = fixture.nativeElement.querySelector('.title');
        expect(titleElement?.textContent?.trim()).toBe('About Me');
    });

    it('should render subtitle in .sub when provided', () => {
        host.sub = 'This is a subtitle';
        fixture.detectChanges();

        const subElement = fixture.nativeElement.querySelector('.sub');
        expect(subElement?.textContent).toBe('This is a subtitle');
    });

    it('should not render .sub element when sub is empty (default)', () => {
        fixture.detectChanges();
        const subElement = fixture.nativeElement.querySelector('.sub');
        expect(subElement).toBeNull();
    });
});
