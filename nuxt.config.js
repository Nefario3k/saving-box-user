import colors from 'vuetify/es5/util/colors'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - savingsbox-users-app',
        title: 'savingsbox-users-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            {
                rel: "stylesheet",
                crossorigin: "anonymous",
                integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
                type: "text/css",
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            },
        ],
        script: [
            {
                src: "/scripts/jquery-3.3.1.min.js",
                type: "text/javascript",
            }, {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                type: "text/javascript",
                integrity: "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
                crossorigin: "anonymous",
                body: true,
                defer: true,
            }, {
                src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js",
                type: "text/javascript",
                body: true,
                defer: true,
            }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/static/css/main.css',
        '~/static/css/auth-pages.css',
        '~/static/css/savings.css',
        '~/static/css/menu.css',
        '~/static/css/file-input.css',
        '~/static/css/button.scss',
        '~/static/css/landing-generics.scss',
        '~/static/css/overide.scss',
        '~/static/css/responsive.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        // for pinia
        '@nuxtjs/composition-api/module',
        /* '@pinia/nuxt', */
        //gsap animation plugin
        'nuxt-gsap-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://auth.nuxtjs.org/
        '@nuxtjs/auth-next',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // baseURL: process.env.BASE_URL
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.grey.darken3,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                light: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2
                    accent: colors.indigo.base, // #3F51B5
                },
            }
        }
    },

    gsap: {
        extraPlugins: {
            scrollTo: true,
            scrollTrigger: true
        },
        extraEases: {
            expoScaleEase: true
        }
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: process.env.BASE_URL + 'user/login', method: 'post' },
                    logout: { url: process.env.BASE_URL + 'user/logout', method: 'post' },
                    user: { url: process.env.BASE_URL + 'user', method: 'get', propertyName: 'user' },
                }
            }
        }
    },

    publicRuntimeConfig: {
        apiURL: process.env.BASE_URL,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}