// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  target: "static",
  app: {
    // buildAssetsDir: "something/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
      title: "Home",
      titleTemplate: `%s | Upwork Assignment Project`,
      meta: [{ name: "description", content: "Upwork Assignment Project" }],
    },
  },
  meta: {
    link: [
      {
        rel: "shortcut icon",
        type: "image/png",
        href: "~/public//images/favicon.png",
      },
      { rel: "icon", href: "//images/favicon.png" },
    ],
  },

  
  css: ["bootstrap/dist/css/bootstrap.min.css","~/assets/css/style.css"],
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  modules: [],
  buildModules: ["@nuxtjs/axios"],
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL ? process.env.BASE_API_URL : 'http://127.0.0.1:8000',
    },
  },
  components: [
    "~/components",
    { path: "~/components/common", extensions: ["vue"] },
  ],
  plugins: [
    { src: "@/plugins/custom.js", mode: "client" },
  ],
  loading: '~/components/reusable/loader/loading.vue',
  generate: { fallback: true },
  routes: ["/"],
  navigationFallback: {
    rewrite: "index.html"
  },
});
