import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';

export const TERM_LINES: Array<{ cmd: string; out: string }> = [
    { cmd: 'ls projects/', out: 'joust/ orbweaver/ tunescript/ ...' },
    { cmd: 'curl api.status', out: '{"status":"available","role":"swe"}' },
    { cmd: 'uptime', out: '25 yrs professional · always learning · always iterating' },
];

@Component({
    selector: 'app-terminal',
    standalone: true,
    imports: [],
    templateUrl: './terminal.component.html',
    styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
    step = signal(0);
    typed = signal('');
    phase = signal<'typing' | 'output' | 'pause'>('typing');

    currentLine = computed(() => TERM_LINES[this.step()]);

    private timerRef = 0;

    constructor() {
        const destroyRef = inject(DestroyRef);
        destroyRef.onDestroy(() => clearTimeout(this.timerRef));

        effect(() => {
            const currentPhase = this.phase();
            const currentTyped = this.typed();
            const currentStep = this.step();
            const line = TERM_LINES[currentStep];

            clearTimeout(this.timerRef);

            if (currentPhase === 'typing') {
                if (currentTyped.length < line.cmd.length) {
                    const delay = 55 + Math.random() * 40;
                    this.timerRef = window.setTimeout(() => {
                        this.typed.set(line.cmd.slice(0, currentTyped.length + 1));
                    }, delay);
                } else {
                    this.timerRef = window.setTimeout(() => {
                        this.phase.set('output');
                    }, 280);
                }
            } else if (currentPhase === 'output') {
                this.timerRef = window.setTimeout(() => {
                    this.phase.set('pause');
                }, 1400);
            } else {
                this.timerRef = window.setTimeout(() => {
                    this.step.set((this.step() + 1) % TERM_LINES.length);
                    this.typed.set('');
                    this.phase.set('typing');
                }, 1100);
            }
        });
    }
}
