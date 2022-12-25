import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
