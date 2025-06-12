import { createContext, useContext, useState, type ReactNode } from 'react';
import type { MadLibInputs } from '../types/MadLibInputs';

interface AppState {
  inputs: MadLibInputs | null;
  slideIndex: number;
  setInputs: (inputs: MadLibInputs) => void;
  setSlideIndex: (index: number) => void;
}

const AppStateContext = createContext<AppState | null>(null);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

interface AppStateProviderProps {
  children: ReactNode;
  initialState?: Partial<AppState>;
}

export const AppStateProvider = ({ children, initialState = {} }: AppStateProviderProps) => {
  const [inputs, setInputs] = useState<MadLibInputs | null>(initialState.inputs ?? null);
  const [slideIndex, setSlideIndex] = useState(initialState.slideIndex ?? 0);

  return (
    <AppStateContext.Provider
      value={{
        inputs,
        slideIndex,
        setInputs: initialState.setInputs ?? setInputs,
        setSlideIndex: initialState.setSlideIndex ?? setSlideIndex,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}; 