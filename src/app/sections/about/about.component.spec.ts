import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ AboutComponent ],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have #about section', () => {
        const section = fixture.nativeElement.querySelector('#about');
        expect(section).toBeTruthy();
    });

    it('should have .about__p--lead paragraph', () => {
        const leadPara = fixture.nativeElement.querySelector('.about__p--lead');
        expect(leadPara).toBeTruthy();
    });

    it('should have .hl highlights in content', () => {
        const highlights = fixture.nativeElement.querySelectorAll('.hl');
        expect(highlights.length).toBeGreaterThan(0);
    });

    it('should have 4 principle items in list', () => {
        const principles = fixture.nativeElement.querySelectorAll('.about__principles li');
        expect(principles.length).toBe(4);
    });

    it('should have 3 spec card rows', () => {
        const specRows = fixture.nativeElement.querySelectorAll('.about__spec-row');
        expect(specRows.length).toBe(3);
    });

    it('should render app-section-header component', () => {
        const sectionHeader = fixture.debugElement.query((el) => el.name === 'app-section-header');
        expect(sectionHeader).toBeTruthy();
    });
});
