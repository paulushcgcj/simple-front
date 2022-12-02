declare global {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    env: any;
  }
}

// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/no-explicit-any
export const env: Record<string, any> = { ...process.env, ...window.env };
