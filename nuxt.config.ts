import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Techian by Oji Halawa",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Techian by Oji Halawa.' }
      ],
    }
  },
  components: true,
  // build: {},
  postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},

  css: ["@/assets/css/main.css"],
  ssr: false,
  // target: "static",
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: ["@nuxt/image-edge"],
});
