# NUXT3 Tailwindcss color-mode
Small project just to test the implementation of color-mode with tailwindcss


## TailwindCSS
Adding TailwindCSS to our project:
```bash
yarn add -D @nuxtjs/tailwindcss  
yarn add @nuxtjs/tailwindcss
```
Now we need to include a a module to be build in nuxt.config.ts :
```
   buildModules: ['@nuxtjs/tailwindcss']
```
This module needs a tailwind.config.js file to show the context help inline. We can do it automatically with:
```bash
npx tailwindcss init
```
As a text app.vue is filled with:
```html
<template>
  <div class=" text-center text-2xl text-orange-400">
    This is a test of Tailwindcss with Nuxt3 color-module
  </div>
</template>
```
## Nuxt3 Color-mode
Adding color-mode to our project:
```bash
yarn add -D @nuxtjs/color-mode 
```
Now we need to include a a module to be build in nuxt.config.ts :
```javascript
   buildModules: ['@nuxtjs/color-mode']
```
