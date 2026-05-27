import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a footer element', () => {
        const footerElement = fixture.nativeElement.querySelector('footer');
        expect(footerElement).toBeTruthy();
    });

    it('should contain footer comment with "hand-built with care"', () => {
        const commentElement = fixture.nativeElement.querySelector('.comment');
        expect(commentElement.textContent).toContain('hand-built with care');
    });
});
