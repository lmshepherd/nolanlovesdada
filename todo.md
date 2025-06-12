# Father's Day Mad-Libs Web App — TODO Checklist

Use this as a running checklist. Mark each task complete (`[x]`) as you finish it. Tasks are grouped into the same chunks and fine-grained steps defined in `prompt_plan.md`.

---

## Chunk A – Tooling & Skeleton

- [ ] A1-1  Initialize Git repository (`git init`).
- [ ] A1-2  Create `.gitignore` (ignore `node_modules`, `dist`, `.env`).
- [ ] A1-3  Scaffold Vite React-TypeScript app (`npm create vite@latest fatherly-madlibs -- --template react-ts`).
- [ ] A1-4  Install root dependencies (`cd fatherly-madlibs && npm install`).
- [ ] A1-5  Commit scaffold ("chore: project scaffold").
- [ ] A2-1  Add Prettier dev-dependency and config (`.prettierrc`).
- [ ] A2-2  Add ESLint dev-dependencies and config (`.eslintrc.json`).
- [ ] A2-3  Add `npm run format` and `npm run lint` scripts.
- [ ] A2-4  Commit configs ("chore: add Prettier & ESLint").
- [ ] A3-1  Remove Vite boilerplate assets (`App.css`, logo, etc.).
- [ ] A3-2  Update `App.tsx` to minimal placeholder `<Layout>Hello Dad 👋</Layout>`.
- [ ] A3-3  Commit cleanup ("refactor: clean starter app").

## Chunk B – Theming

- [ ] B1-1  Add `src/theme/colors.ts` with color palette.
- [ ] B1-2  Import Google Font "Patrick Hand" in `src/index.css`.
- [ ] B1-3  Add CSS reset (Eric Meyer 2.0) and set base font.
- [ ] B1-4  Commit global theme setup.
- [ ] B2-1  Create `src/components/Layout.tsx` (centered wrapper with background).
- [ ] B2-2  Import and use `Layout` in `App.tsx`.
- [ ] B2-3  Commit layout component.

## Chunk C – Data & State

- [ ] C1-1  Add `src/types/MadLibInputs.ts` interface (8–10 fields).
- [ ] C1-2  Create `src/data/templates.ts` with 5 template strings using placeholders.
- [ ] C1-3  Commit types and templates.
- [ ] C2-1  Implement `AppStateContext` (`inputs`, `slideIndex`, setters).
- [ ] C2-2  Wrap provider around app in `main.tsx`.
- [ ] C2-3  Commit context.

## Chunk D – Form Page

- [ ] D1-1  Create `MadLibForm.tsx` with controlled inputs & playful labels.
- [ ] D1-2  Disable Submit until all fields filled using local `isValid`.
- [ ] D1-3  On Submit, save inputs to context and navigate to `/reveal` (React Router v6).
- [ ] D1-4  Add route for `/` to render `MadLibForm`.
- [ ] D1-5  Commit form page.
- [ ] D2-1  Extract `isFormValid(inputs)` utility in `src/utils`.
- [ ] D2-2  Replace in-component validation with utility call.
- [ ] D2-3  Add Jest test `isFormValid.test.ts`.
- [ ] D2-4  Commit validation utility & tests.

## Chunk E – Reveal Engine

- [ ] E1-1  Create `Section.tsx` (fills template, displays image).
- [ ] E1-2  Create `Reveal.tsx` (reads context, manages slide index).
- [ ] E1-3  Add Back/Next buttons, disable at ends.
- [ ] E1-4  Create `FinalScreen.tsx` with message.
- [ ] E1-5  Add route `/reveal` → `Reveal`.
- [ ] E1-6  Commit reveal engine.
- [ ] E2-1  Redirect to `/` if no inputs present.
- [ ] E2-2  Add keyboard navigation (Left/Right arrows).
- [ ] E2-3  Commit navigation guards.

## Chunk F – Integration

- [ ] F1-1  Wire React Router base (`/` and `/reveal/*`).
- [ ] F1-2  Add simple `ErrorBoundary.tsx` and wrap routes.
- [ ] F1-3  Commit integration & error handling.

## Chunk G – Polish

- [ ] G1-1  Add `Button.module.css` and style Back/Next buttons.
- [ ] G1-2  Style inputs (rounded corners, shadow, font size).
- [ ] G1-3  Apply styles in `MadLibForm`.
- [ ] G1-4  Commit styling polish.
- [ ] G2-1  Add `aria-label`s to nav buttons.
- [ ] G2-2  Ensure images have descriptive `alt` text.
- [ ] G2-3  Verify visible focus outlines.
- [ ] G2-4  Commit accessibility updates.

## Chunk H – Tests & Docs

- [ ] H1-1  Write Jest test `Reveal.test.tsx` covering slide navigation and final screen.
- [ ] H1-2  Ensure `npm test` runs all tests without errors.
- [ ] H1-3  Commit navigation tests.
- [ ] H2-1  Expand `README.md` with overview, installation, dev, test, build, tech stack, license.
- [ ] H2-2  Add screenshot placeholder to README.
- [ ] H2-3  Commit final README.

---

### Ongoing

- [ ] Keep commits small and descriptive.
- [ ] Run `npm run lint` and `npm run format` before each commit.
- [ ] Manually test flow in browser after major changes. 