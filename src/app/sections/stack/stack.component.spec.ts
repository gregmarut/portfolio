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

    it('should render .grid element', () => {
        const grid = fixture.nativeElement.querySelector('.grid');
        expect(grid).toBeTruthy();
    });

    it('should render .group elements for each group', () => {
        const groups = fixture.nativeElement.querySelectorAll('.group');
        expect(groups.length).toBe(5);
        expect(groups.length).toBe(component.groups.length);
    });

    it('should render .title elements with group names', () => {
        const titleElements = fixture.nativeElement.querySelectorAll('.group .title');
        expect(titleElements.length).toBe(5);

        titleElements.forEach((element: HTMLElement, index: number) => {
            expect(element.textContent).toContain(component.groups[index].group);
        });
    });
});
