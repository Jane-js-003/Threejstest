// 找不到 .vue 的声明文件，实际上就是 TS 无法识别 .vue 类型的文件。
// 那么就需要添加一下 .vue 类型文件的声明
// 方案一
// declare module "*.vue" {
//   import Vue from 'vue';
//   export default Vue;
// }
// // 方案二
// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   const Component: ReturnType<typeof defineComponent>
//   export default Component
// }
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
