import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackComponent } from './stack.component';
import { STACK } from '../../../data/stack';

describe('StackComponent', () => {
    let component: StackComponent;
    let fixture: ComponentFixture<StackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StackComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have groups property with 5 items matching STACK length', () => {
        expect(component.groups.length).toBe(5);
        expect(component.groups.length).toBe(STACK.length);
    });

    it('should render #stack section', () => {
        const section = fixture.nativeElement.querySelector('section#stack');
        expect(section).toBeTruthy();
    });

    it('should render .stack__grid element', () => {
        const grid = fixture.nativeElement.querySelector('.stack__grid');
        expect(grid).toBeTruthy();
    });

    it('should render .stack__card elements for each group', () => {
        const cards = fixture.nativeElement.querySelectorAll('.stack__card');
        expect(cards.length).toBe(5);
        expect(cards.length).toBe(component.groups.length);
    });

    it('should render .stack__group elements with group names', () => {
        const groupElements = fixture.nativeElement.querySelectorAll('.stack__group');
        expect(groupElements.length).toBe(5);

        groupElements.forEach((element: HTMLElement, index: number) => {
            expect(element.textContent).toContain(component.groups[index].group);
        });
    });
});
