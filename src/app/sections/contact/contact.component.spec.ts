import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 4 links', () => {
        expect(component.links.length).toBe(4);
    });

    it('should have a #contact section', () => {
        const section = fixture.nativeElement.querySelector('#contact');
        expect(section).toBeTruthy();
    });

    it('should render the title with contact__title class', () => {
        const title = fixture.nativeElement.querySelector('.contact__title');
        expect(title).toBeTruthy();
    });

    it('should render 4 contact__row elements', () => {
        const rows = fixture.nativeElement.querySelectorAll('.contact__row');
        expect(rows.length).toBe(4);
    });

    it('should have email link with correct href', () => {
        const emailLink = fixture.nativeElement.querySelector(
            'a[href="mailto:greg.marut@gmail.com"]',
        );
        expect(emailLink).toBeTruthy();
    });
});
