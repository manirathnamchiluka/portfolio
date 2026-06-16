// Minimal React/JSX shims for build environments where @types/react is missing.
// If you later install proper types, these can be removed.

declare module 'react' {
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;

  export function useEffect(effect: any, deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };

  export const StrictMode: any;
}


declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

