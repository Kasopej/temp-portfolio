export default {
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kasope's Portfolio",
    description: "Kasope's Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      // { name: "format-detection", content: "telephone=no" },
      { property: "og:title", content: "Kasope's Portfolio" },
      {
        property: "og:description",
        content: "Kasope's Portfolio",
      },
      {
        property: "og:url",
        content: "https://kasope-portfolio.netlify.app/",
      },
      {
        property: "og:image",
        content: "https://kasope-portfolio.netlify.app/site_screenshot.png",
      },
      {
        name: "twitter:image",
        content: "https://kasope-portfolio.netlify.app/site_screenshot.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["~/assets/app.css"],
  plugins: [],

  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
