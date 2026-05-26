# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start               # dev server at localhost:4200
npm run build           # production build
npm test                # run all tests (vitest via Angular builder, no --watch)
npx ng test --include="src/path/to/component.spec.ts" --watch=false  # single spec file
npx ng build --configuration development  # fast dev build (no optimization)
npx prettier --write "src/**/*.{ts,html,scss}"  # format all source files
```

Tests run through `@angular/build:unit-test` (vitest + jsdom). Do **not** run `npx vitest run` directly — globals aren't injected outside the Angular builder.

## Architecture

Single-page scroll site: **Nav → Hero → About → Work → Experience → Stack → Contact → Footer**. No router. `app.html` mounts all eight section components inside a `.page` wrapper.

**Design tokens** live in `src/styles/tokens.scss` as `:root` CSS custom properties (`--bg`, `--accent`, `--text`, `--surface`, etc.). `angular.json` sets `stylePreprocessorOptions.includePaths: ["src"]` so any component SCSS can `@use 'styles/tokens'` without a relative path.

**Global styles** (`src/styles.scss`) define shared utility classes: `.mono`, `.serif`, `.btn`, `.btn--primary`, `.btn--ghost`, `.tag`, `.tag--ghost`, `.card`, `.card__head`, `.status-dot`, `.cursor-glow`, and keyframes (`pulse`, `marq`, `fadein`, `bl`). Never redefine these in component SCSS.

**Scroll-spy** (`src/app/core/scroll-spy.service.ts`) wraps a single `IntersectionObserver` (`rootMargin: '-30% 0px -55% 0px'`) and exposes `active$: Observable<string>` with `distinctUntilChanged()`. `NavComponent` calls `observe(ids)` inside `afterNextRender` and converts to a signal with `toSignal`.

**Data** is plain TypeScript in `src/data/` — no services, no HTTP. `projects.ts` exports `Project[]` (`desc: string[]`, `year: string`), `experience.ts` exports `Experience[]`, `stack.ts` exports `StackGroup[]`.

**Shared components** in `src/app/shared/`: `SectionHeaderComponent` (num/label/title/sub inputs), `TerminalComponent` (signal-driven typewriter using `effect()` + `setTimeout`), `ProjectMarkComponent`, `ProjectCardComponent` (cards + list layouts, `expanded` signal), `ExperienceRowComponent` (`input()`/`output()` accordion row).

## Angular Conventions

- **All DI via `inject()`** — never constructor injection.
- **`input()` / `input.required()` / `output()`** — never `@Input()` / `@Output()`.
- **`@if` / `@for` / `@else`** in templates — never `*ngIf` / `*ngFor`.
- **Standalone components** with explicit `imports` array — no NgModules.
- Observables converted to signals at the component boundary with `toSignal()`.
- Browser-only side effects in `afterNextRender`; cleanup via `DestroyRef.onDestroy` or `takeUntilDestroyed()` (call in constructor so it captures the component's `DestroyRef` automatically).

## Code Style

- **Prettier** enforces formatting (`printWidth: 100`, `singleQuote: true`, angular HTML parser). Run before committing.
- **No early returns** — use `if`/`else` blocks.
- **Null on the left** — `null == x`, never `x == null`.
- **No `continue` statements**.
- Inline comments: no space after `//`, lowercase first letter.
- 4-space indentation (TypeScript, HTML, SCSS).

## Testing Patterns

- Mock `IntersectionObserver` with `vi.stubGlobal('IntersectionObserver', MockClass)` in specs that involve `ScrollSpyService`.
- Use `NO_ERRORS_SCHEMA` or `overrideComponent` to silence unknown child elements when testing a parent in isolation.
- Use `vi.useFakeTimers()` for anything involving `setTimeout` (e.g. `TerminalComponent` typewriter).
- Signal-based inputs in test hosts need `signal()` wrappers to avoid `ExpressionChangedAfterItHasBeenCheckedError`.
