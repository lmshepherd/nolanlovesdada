export const colors = {
  // Default (dark mode)
  primary: '#388E3C', // Forest green
  primaryDark: '#1B5E20', // Deep pine green
  secondary: '#A5D6A7', // Soft moss green
  accent: '#FF7043', // Toadstool orange/red
  background: '#23291f', // Deep woodland green (dark mode)
  formBackground: '#2d2217', // Deep bark brown (dark mode)
  text: '#F1F8E9', // Light leafy text (dark mode)
  placeholderText: '#A5D6A7', // Lighter shade for placeholder text
  white: '#F0F8F0', // Off-white with blue/green hue
  black: '#000000',
  gray: {
    light: '#E9ECEF',
    medium: '#CED4DA',
    dark: '#6C757D',
  },
  error: '#C62828', // Berry red
  success: '#43A047', // Vibrant green
  disabled: '#BDBDBD',
  modes: {
    light: {
      background: '#F1F8E9', // Leafy off-white/green
      formBackground: '#F5E9DA', // Warm tan for form
      text: '#4E342E', // Bark brown
      placeholderText: '#6C757D', // Darker shade for placeholder text
    },
    dark: {
      background: '#23291f', // Deep woodland green
      formBackground: '#2d2217', // Deep bark brown
      text: '#F1F8E9', // Light leafy text
      placeholderText: '#A5D6A7', // Lighter shade for placeholder text
    },
  },
} as const; 