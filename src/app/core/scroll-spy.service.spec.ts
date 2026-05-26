import { TestBed } from '@angular/core/testing';
import { ScrollSpyService } from './scroll-spy.service';
import { vi } from 'vitest';

type IOCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

let capturedCallback: IOCallback | null = null;
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

class MockIntersectionObserver {
    constructor(callback: IOCallback) {
        capturedCallback = callback;
    }
    observe = mockObserve;
    disconnect = mockDisconnect;
}

describe('ScrollSpyService', () => {
    let service: ScrollSpyService;

    beforeEach(() => {
        capturedCallback = null;
        mockObserve.mockClear();
        mockDisconnect.mockClear();
        vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

        TestBed.configureTestingModule({});
        service = TestBed.inject(ScrollSpyService);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should expose active$ observable', () => {
        expect(service.active$).toBeTruthy();
    });

    it('observe() should not throw when called with valid ids', () => {
        const div = document.createElement('div');
        div.id = 'test-section';
        document.body.appendChild(div);

        expect(() => service.observe(['test-section'])).not.toThrow();

        document.body.removeChild(div);
    });

    it('active$ emits the most-intersecting section id', () => {
        const div = document.createElement('div');
        div.id = 'about';
        document.body.appendChild(div);
        service.observe(['about']);

        const emitted: string[] = [];
        service.active$.subscribe((id) => emitted.push(id));

        capturedCallback!([{ isIntersecting: true, intersectionRatio: 0.6, target: div }]);

        expect(emitted).toEqual(['about']);
        document.body.removeChild(div);
    });

    it('active$ does not emit duplicate consecutive ids (distinctUntilChanged)', () => {
        const div = document.createElement('div');
        div.id = 'work';
        document.body.appendChild(div);
        service.observe(['work']);

        const emitted: string[] = [];
        service.active$.subscribe((id) => emitted.push(id));

        capturedCallback!([{ isIntersecting: true, intersectionRatio: 0.5, target: div }]);
        capturedCallback!([{ isIntersecting: true, intersectionRatio: 0.5, target: div }]);

        expect(emitted).toEqual(['work']);
        document.body.removeChild(div);
    });

    it('disconnects old observer when observe() is called again', () => {
        const div = document.createElement('div');
        div.id = 'stack';
        document.body.appendChild(div);

        service.observe(['stack']);
        expect(mockDisconnect).not.toHaveBeenCalled();

        service.observe(['stack']);
        expect(mockDisconnect).toHaveBeenCalledTimes(1);

        document.body.removeChild(div);
    });

    it('disconnects observer on ngOnDestroy', () => {
        const div = document.createElement('div');
        div.id = 'contact';
        document.body.appendChild(div);
        service.observe(['contact']);

        service.ngOnDestroy();
        expect(mockDisconnect).toHaveBeenCalled();

        document.body.removeChild(div);
    });
});
