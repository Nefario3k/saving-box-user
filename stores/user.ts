// @ts-check
import { defineStore } from 'pinia'
import { ref } from '@nuxtjs/composition-api'
import { useRouter } from '@nuxtjs/composition-api'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
    if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
    if (p === 'ed') return Promise.resolve({ isAdmin: false })
    return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: ref('Eduardo'),
        /** @type {boolean} */
        isAdmin: true,
        /** @type {boolean} */
        isLoggedIn: ref(true),
        stuff: ref('hey'),
    }),

    actions: {
        logout() {
            this.$patch({
                name: '',
                isAdmin: false,
            })

            // we could do other stuff like redirecting the user
        },

        greet() {
            alert('good day ' + this.name);
            // let router = useRouter();
            // router.push('/')
        },

        /**
         * Attempt to login a user
         */
        async login(user: string, password: string) {
            const userData = await apiLogin(user, password)

            this.$patch({
                name: user,
                ...userData,
                stuff: 'hey',
            })
        },
    },
})