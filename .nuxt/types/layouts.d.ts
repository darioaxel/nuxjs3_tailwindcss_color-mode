import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/darioaxel/Trabajo/nuxjs3_tailwindcss_color-mode/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}