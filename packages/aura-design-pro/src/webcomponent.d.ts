import 'solid-js';

declare module 'solid-js' {
    namespace JSX {
        interface IntrinsicElements {
            [key: string]: any;
        }
    }
}
