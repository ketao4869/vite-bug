/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare type asdasd = 'aaa' | 'bbb'

declare interface crudEl {
    asd?: 123
    aaa: asdasd
}
