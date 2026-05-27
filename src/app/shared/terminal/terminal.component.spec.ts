import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminalComponent, TERM_LINES } from './terminal.component';

describe('TerminalComponent', () => {
    let component: TerminalComponent;
    let fixture: ComponentFixture<TerminalComponent>;

    beforeEach(async () => {
        vi.useFakeTimers();

        await TestBed.configureTestingModule({
            imports: [TerminalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TerminalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize step signal to 0', () => {
        expect(component.step()).toBe(0);
    });

    it('should initialize typed signal to empty string', () => {
        expect(component.typed()).toBe('');
    });

    it('should initialize phase signal to typing', () => {
        expect(component.phase()).toBe('typing');
    });

    it('should return TERM_LINES[0] from currentLine computed signal', () => {
        expect(component.currentLine()).toEqual(TERM_LINES[0]);
    });

    it('should render the cursor element', () => {
        const cursor = fixture.nativeElement.querySelector('.cursor');
        expect(cursor).toBeTruthy();
    });

    it('should render static prior-session prompt elements', () => {
        const prompts = fixture.nativeElement.querySelectorAll('.prompt');
        //there should be at least one prompt from the static lines plus the active line
        expect(prompts.length).toBeGreaterThan(1);
    });

    it('should render static whoami line', () => {
        const cmds = fixture.nativeElement.querySelectorAll('.cmd');
        const texts = Array.from(cmds).map((el: any) => el.textContent.trim());
        expect(texts).toContain('whoami');
    });

    it('should not show output line when phase is typing', () => {
        //phase starts as 'typing' so output should not be visible
        const outLines = fixture.nativeElement.querySelectorAll('.line--out');
        //only static out lines should be present (8 static ones), not the animated one
        //we check by counting — animated output line should not be present
        const allOutTexts = Array.from(outLines).map((el: any) => el.textContent);
        const hasAnimatedOut = allOutTexts.some((t: string) => t.includes(TERM_LINES[0].out));
        expect(hasAnimatedOut).toBe(false);
    });

    it('should show output line when phase is output', () => {
        component.phase.set('output');
        fixture.detectChanges();

        const outLines = fixture.nativeElement.querySelectorAll('.line--out');
        const allOutTexts = Array.from(outLines).map((el: any) => el.textContent);
        const hasAnimatedOut = allOutTexts.some((t: string) => t.includes(TERM_LINES[0].out));
        expect(hasAnimatedOut).toBe(true);
    });

    it('should show output line when phase is pause', () => {
        component.phase.set('pause');
        fixture.detectChanges();

        const outLines = fixture.nativeElement.querySelectorAll('.line--out');
        const allOutTexts = Array.from(outLines).map((el: any) => el.textContent);
        const hasAnimatedOut = allOutTexts.some((t: string) => t.includes(TERM_LINES[0].out));
        expect(hasAnimatedOut).toBe(true);
    });

    it('should not show output line when phase is typing after being set back', () => {
        component.phase.set('output');
        fixture.detectChanges();

        component.phase.set('typing');
        fixture.detectChanges();

        const outLines = fixture.nativeElement.querySelectorAll('.line--out');
        const allOutTexts = Array.from(outLines).map((el: any) => el.textContent);
        const hasAnimatedOut = allOutTexts.some((t: string) => t.includes(TERM_LINES[0].out));
        expect(hasAnimatedOut).toBe(false);
    });

    it('should update currentLine when step changes', () => {
        component.step.set(1);
        expect(component.currentLine()).toEqual(TERM_LINES[1]);
    });

    it('should display typed text in the active cmd span', () => {
        component.typed.set('ls pro');
        fixture.detectChanges();

        //the last .cmd is the active one
        const cmds = fixture.nativeElement.querySelectorAll('.cmd');
        const lastCmd = cmds[cmds.length - 1];
        expect(lastCmd.textContent).toBe('ls pro');
    });
});
