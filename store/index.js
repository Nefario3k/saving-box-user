export const state = () => ({
    counter: 2
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}