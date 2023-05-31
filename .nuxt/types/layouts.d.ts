import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "doors-layout" | "logs-layout" | "main-layout"
declare module "E:/Work/FiverrWork/althenticate-farid/althenticate-task/althenticate/althenticate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}