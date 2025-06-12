
# Father’s Day Interactive Mad-Libs Web App  
Blueprint ➜ Iterative Chunks ➜ Fine-Grained Steps ➜ LLM Prompts

---

## 1. High-Level Blueprint

1. Project scaffold and tooling  
2. Global theme (colors, fonts, layout wrapper)  
3. Mad-Libs data model & templates  
4. Input form page  
5. Client-side validation  
6. Slideshow reveal engine  
7. Section component (photo + filled template)  
8. Navigation & state transitions  
9. Final “I love you dad” screen  
10. Asset loading strategy  
11. Styling polish & accessibility  
12. Unit / integration tests  
13. Build script & README

---

## 2. Iterative Chunks

### Chunk A – Tooling & Skeleton
A1. Initialize repo, gitignore, README stub  
A2. Set up Vite + React + TypeScript  
A3. Prettier / ESLint config  
A4. App root with placeholder pages

### Chunk B – Theming
B1. Global CSS reset & variables  
B2. Woodland font import & usage  
B3. Layout wrapper component

### Chunk C – Data & State
C1. TypeScript types for inputs  
C2. Mad-Lib templates object  
C3. React context or top-level state

### Chunk D – Form Page
D1. Controlled inputs & labels  
D2. Required-field validation logic  
D3. Submit button enable/disable

### Chunk E – Reveal Engine
E1. Slide index state & navigation  
E2. Section component (photo+text)  
E3. Final message screen

### Chunk F – Integration
F1. Wire form ➜ slideshow hand-off  
F2. Guard rails on “Back/Next”  
F3. Basic error boundaries

### Chunk G – Polish
G1. CSS theming of inputs & buttons  
G2. Accessibility pass (focus, aria)  
G3. Responsive tweaks (optional)

### Chunk H – Tests & Docs
H1. Unit tests for validation & nav  
H2. Integration test full flow  
H3. Expand README (setup, run, build)

---

## 3. Fine-Grained Steps (Right-Sized)

Below, every chunk is now split into atomic, “commit-sized” actions that can be implemented safely in sequence.

### Chunk A – Tooling & Skeleton
1. `git init` and create `.gitignore` for Node/Vite.  
2. Run `npm create vite@latest` with React-TS template.  
3. Add Prettier config (`.prettierrc`).  
4. Add ESLint with `eslint-config-react-app` and TypeScript plugin.  
5. Clean Vite starter to a blank `<App />` showing “Hello Dad 👋”.  

### Chunk B – Theming
6. Create `src/theme/colors.ts` with palette.  
7. Import Google Font “Patrick Hand” in `index.css`.  
8. Add global CSS reset and `body { font-family }`.  
9. Build `Layout.tsx` that centers content and applies background color.  

### Chunk C – Data & State
10. Define `MadLibInputs` TypeScript interface.  
11. Craft constant `TEMPLATES: string[]` with five themed strings containing placeholders (e.g. `${inputs.adjective}`).  
12. Create `AppStateContext` with React `createContext` holding inputs and current slide.  

### Chunk D – Form Page
13. Build `MadLibForm.tsx` with controlled inputs mapped from `MadLibInputs`.  
14. Add local validation: disable submit unless every field non-empty.  
15. On submit, store inputs in context and navigate to `/reveal`.  

### Chunk E – Reveal Engine
16. Generate `Reveal.tsx` that reads inputs & slide index from context.  
17. Render current `Section` component: fills template string + shows photo.  
18. Add “Back” & “Next” buttons; disable at ends.  
19. Add `FinalScreen.tsx` after last slide showing “I love you dad! <3 Nolan”.  

### Chunk F – Integration
20. Wire React-Router routes: `/` ➜ form, `/reveal/*` ➜ slideshow.  
21. Guard navigation: redirect to `/` if inputs missing.  
22. Add simple error boundary component.  

### Chunk G – Polish
23. Style inputs with playful borders & colors.  
24. Add keyboard navigation (Left/Right arrows switch slides).  
25. Confirm color contrast; add `aria-label` to nav buttons.  

### Chunk H – Tests & Docs
26. Write Jest tests for `isFormValid(inputs)`.  
27. Write React Testing Library test simulating full flow.  
28. Update README with install, dev, test, build instructions.  

---

## 4. LLM Code-Generation Prompts  
Each prompt is self-contained, builds on previous outputs, and results in no orphaned code.  
Copy/paste one prompt at a time into your code-gen model of choice.

### Prompt A1 – Repo Init
```text
You are in an empty folder.  
Task: initialize a Node project for a React-TypeScript web app using Vite.

Steps:  
1. Run `git init` and create a `.gitignore` that ignores `node_modules`, `dist`, `.env`.  
2. Execute `npm create vite@latest fatherly-madlibs -- --template react-ts`.  
3. Inside the new folder, run `npm install`.  
4. Provide the final folder tree after installation (omit `node_modules` listing).  
Ensure no code edits beyond scaffolding.
```

### Prompt A2 – Code Quality Tools
```text
Context: Vite React-TS project scaffolded.  
Task: Add Prettier and ESLint configs.

1. Install dev-deps: `npm i -D prettier eslint eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser`.  
2. Create `.prettierrc` with { "singleQuote": true, "trailingComma": "all" }.  
3. Create `.eslintrc.json` extending `react-app` and enabling TypeScript parser.  
4. Add `format` and `lint` npm scripts.  
Output only the new/changed config files and package.json scripts.
```

### Prompt A3 – Clean App Root
```text
Goal: simplify starter app to minimal entry.

1. Delete `App.css`, logo import, and default markup.  
2. Edit `App.tsx` to return `<Layout>Hello Dad 👋</Layout>`.  
3. Provide the full updated `App.tsx` and removed lines context.  
No other changes.
```

### Prompt B1 – Theme Colors & Font
```text
Add global theme.

1. Add file `src/theme/colors.ts` exporting an object with primary, secondary, background, text.  
2. Import Google Font "Patrick Hand" in `index.css`; apply to `body`.  
3. Insert CSS reset (Eric Meyer 2.0).  
Return new file and diff for `index.css`.
```

### Prompt B2 – Layout Component
```text
Create `src/components/Layout.tsx`.

• Wraps children in a centered `div` 960 px wide  
• Sets background color from theme and min-height 100vh  
• Exports default component

Show full code. Update `App.tsx` import accordingly.
```

### Prompt C1 – Types & Templates
```text
1. Add `src/types/MadLibInputs.ts` defining interface with 8–10 fields (noun1, adjective1, food, etc.).  
2. Create `src/data/templates.ts` exporting `TEMPLATES` array of 5 template strings using placeholders like `${inputs.noun1}`.  
Provide both files.
```

### Prompt C2 – Context
```text
Implement `AppStateContext`.

1. Create `src/context/AppStateContext.tsx` with React Context holding:
   • inputs: MadLibInputs | null  
   • slideIndex: number  
   • setInputs, setSlideIndex functions.  
2. Provide Context provider component wrapping children.  
3. Wrap provider around App in `main.tsx`.  
Return relevant new/changed files only.
```

### Prompt D1 – Form Component
```text
Build `MadLibForm.tsx`.

• Imports `MadLibInputs` type  
• Controlled `<input>` for each field with label (playful prompt).  
• Local state identical to interface.  
• `isValid` boolean: all fields non-empty.  
• Submit button disabled unless valid.  
• On submit: `setInputs(localState)` and `navigate('/reveal')`.  
Provide full component plus route setup in `App.tsx` (using React Router v6).
```

### Prompt D2 – Validation Utility
```text
Extract validation.

1. Add `src/utils/isFormValid.ts` function returning true if every value non-empty.  
2. Use it inside `MadLibForm`.  
3. Write Jest unit test `isFormValid.test.ts`.  
Return new utility file and test file.
```

### Prompt E1 – Reveal & Section
```text
Create slideshow engine.

1. Add `Section.tsx` component that accepts:
   • template string  
   • photo `src`  
   • inputs  
   and returns filled paragraph + image.

2. Add `Reveal.tsx`:
   • reads `inputs`, `slideIndex` from context  
   • derives `currentTemplate` & image  
   • renders `Section`  
   • navigation buttons update `slideIndex`  
   • when `slideIndex` === templates.length ➜ render `<FinalScreen />`.  

3. Add simple `FinalScreen.tsx` with centered `<h1>I love you dad! <3 Nolan</h1>`.

Update routing (`/reveal`) to point to `Reveal`. Provide new files.
```

### Prompt E2 – Navigation Guards
```text
Enhance navigation.

1. In `Reveal.tsx`, if `!inputs` redirect to `/`.  
2. Disable “Back” on first slide, “Next” on last slide.  
3. Add keyboard listeners: Left/Right arrow to trigger nav handlers.  
Return diff for `Reveal.tsx`.
```

### Prompt F1 – Error Boundary
```text
Add `ErrorBoundary.tsx` using React 18 error boundary pattern.  
Wrap it around Routes in `App.tsx`.  
Provide new file and updated `App.tsx` diff.
```

### Prompt G1 – Styling Polish
```text
1. Style buttons in `Button.module.css` with woodland colors, hover, focus.  
2. Inputs: rounded corners, subtle shadow, 16 px font.  
3. Apply classNames in `MadLibForm.tsx`.  
Return new CSS module and component diffs.
```

### Prompt G2 – Accessibility
```text
Accessibility pass.

• Add `aria-label` to Back/Next buttons.  
• Ensure images have `alt` describing section theme.  
• Confirm focus outlines visible.  
List all updated snippets.
```

### Prompt H1 – Tests
```text
Add navigation tests.

1. In `Reveal.test.tsx`, render context with mock inputs, simulate Next presses, assert slide changes and final screen appears.

2. Ensure tests run via `npm test`.

Provide new test file only.
```

### Prompt H2 – README Finalization
```text
Expand README.

• Overview + screenshot placeholder  
• `npm install`, `npm run dev`, `npm test`, `npm run build` instructions  
• Tech stack bullets  
• License MIT

Return complete README.md replacing stub.
```

---

### How to Use These Prompts

1. Feed Prompt A1 to your code-generation LLM. Run resulting commands/code.  
2. Commit.  
3. Proceed to Prompt A2 → commit, etc.  
4. Each prompt builds on the previous codebase; no orphaned files.  
5. After Prompt H2 you have a fully functional, styled, and tested Father’s Day Mad-Libs site.
