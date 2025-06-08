/// <reference types="vite/client" />

declare module 'react' {
  interface JSX {
    IntrinsicElements: {
      [elemName: string]: any;
    };
  }
}

declare module 'framer-motion' {
  export * from 'framer-motion';
}

declare module 'lucide-react' {
  export * from 'lucide-react';
}

declare module 'react-intersection-observer' {
  export * from 'react-intersection-observer';
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}

declare module '*.webp' {
  const content: any;
  export default content;
}

declare module '*.mp4' {
  const content: any;
  export default content;
}

declare module '*.webm' {
  const content: any;
  export default content;
}

declare module '*.ogg' {
  const content: any;
  export default content;
}

declare module '*.mp3' {
  const content: any;
  export default content;
}

declare module '*.wav' {
  const content: any;
  export default content;
}

declare module '*.flac' {
  const content: any;
  export default content;
}

declare module '*.aac' {
  const content: any;
  export default content;
}
