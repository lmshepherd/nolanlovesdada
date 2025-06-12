# Father's Day Mad-Libs Web App — TODO Checklist

Use this as a running checklist. Mark each task complete (`[x]`) as you finish it. Tasks are grouped into the same chunks and fine-grained steps defined in `prompt_plan.md`.

---

## Chunk A – Tooling & Skeleton

- [x] A1-1  Initialize Git repository (`git init`).
- [x] A1-2  Create `.gitignore` (ignore `node_modules`, `dist`, `.env`).
- [x] A1-3  Scaffold Vite React-TypeScript app (`npm create vite@latest fatherly-madlibs -- --template react-ts`).
- [x] A1-4  Install root dependencies (`cd fatherly-madlibs && npm install`).
- [x] A1-5  Commit scaffold ("chore: project scaffold").
- [x] A2-1  Add Prettier dev-dependency and config (`.prettierrc`).
- [x] A2-2  Add ESLint dev-dependencies and config (`.eslintrc.json`).
- [x] A2-3  Add `npm run format` and `npm run lint` scripts.
- [x] A2-4  Commit configs ("chore: add Prettier & ESLint").
- [x] A3-1  Remove Vite boilerplate assets (`App.css`, logo, etc.).
- [x] A3-2  Update `App.tsx` to minimal placeholder `<Layout>Hello Dad 👋</Layout>`.
- [x] A3-3  Commit cleanup ("refactor: clean starter app").

## Chunk B – Theming

- [x] B1-1  Add `src/theme/colors.ts` with color palette.
- [x] B1-2  Import Google Font "Patrick Hand" in `src/index.css`.
- [x] B1-3  Add CSS reset (Eric Meyer 2.0) and set base font.
- [x] B1-4  Commit global theme setup.
- [x] B2-1  Create `src/components/Layout.tsx` (centered wrapper with background).
- [x] B2-2  Import and use `Layout` in `App.tsx`.
- [x] B2-3  Commit layout component.

## Chunk C – Data & State

- [x] C1-1  Add `src/types/MadLibInputs.ts` interface (8–10 fields).
- [x] C1-2  Create `src/data/templates.ts` with 5 template strings using placeholders.
- [x] C1-3  Commit types and templates.
- [x] C2-1  Implement `AppStateContext` (`inputs`, `slideIndex`, setters).
- [x] C2-2  Wrap provider around app in `main.tsx`.
- [x] C2-3  Commit context.

## Chunk D – Form Page

- [x] D1-1  Create `MadLibForm.tsx` with controlled inputs & playful labels.
- [x] D1-2  Disable Submit until all fields filled using local `isValid`.
- [x] D1-3  On Submit, save inputs to context and navigate to `/reveal` (React Router v6).
- [x] D1-4  Add route for `/` to render `MadLibForm`.
- [x] D1-5  Commit form page.
- [x] D2-1  Extract `isFormValid(inputs)` utility in `src/utils`.
- [x] D2-2  Replace in-component validation with utility call.
- [x] D2-3  Add Jest test `isFormValid.test.ts`.
- [x] D2-4  Commit validation utility & tests.

## Chunk E – Reveal Engine

- [x] E1-1  Create `Section.tsx` (fills template, displays image).
- [x] E1-2  Create `Reveal.tsx` (reads context, manages slide index).
- [x] E1-3  Add Back/Next buttons, disable at ends.
- [x] E1-4  Create `FinalScreen.tsx` with message.
- [x] E1-5  Add route `/reveal` → `Reveal`.
- [x] E1-6  Commit reveal engine.
- [x] E2-1  Redirect to `/` if no inputs present.
- [x] E2-2  Add keyboard navigation (Left/Right arrows).
- [x] E2-3  Commit navigation guards.

## Chunk F – Integration

- [x] F1-1  Wire React Router base (`/` and `/reveal/*`).
- [x] F1-2  Add simple `ErrorBoundary.tsx` and wrap routes.
- [x] F1-3  Commit integration & error handling.

## Chunk G – Polish

- [x] G1-1  Add `Button.module.css` and style Back/Next buttons.
- [x] G1-2  Style inputs (rounded corners, shadow, font size).
- [x] G1-3  Apply styles in `MadLibForm`.
- [x] G1-4  Commit styling polish.
- [x] G2-1  Add `aria-label`s to nav buttons.
- [x] G2-2  Ensure images have descriptive `alt` text.
- [x] G2-3  Verify visible focus outlines.
- [x] G2-4  Commit accessibility updates.

## Chunk H – Tests & Docs

- [x] H1-1  Write Jest test `Reveal.test.tsx` covering slide navigation and final screen.
- [x] H1-2  Ensure `npm test` runs all tests without errors.
- [x] H1-3  Commit navigation tests.
- [x] H2-1  Expand `README.md` with overview, installation, dev, test, build, tech stack, license.
- [x] H2-2  Add screenshot placeholder to README.
- [x] H2-3  Commit final README.

---

### Ongoing

- [ ] Keep commits small and descriptive.
- [ ] Run `npm run lint` and `npm run format` before each commit.
- [ ] Manually test flow in browser after major changes. 