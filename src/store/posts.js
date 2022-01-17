import axios from "axios";

export default {
    state: {
        posts: [],
        allCount: null,
        loading: false,
        detailPost: null
    },
    mutations: {
        getPosts(state, payload) {
            state.posts = payload;
            state.loadong = false;
        },
        getLoading(state, payload) {
            state.loadong = payload
        },
        allCount(state, payload) {
            state.allCount = payload
        },
        getDetailPost(state, payload) {
            state.detailPost = payload
        }
    },
    actions: {
        async getPosts(state, payload) {
            state.commit('getLoading', true)
            await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _page: payload.page,
                    _limit: payload.limit
                }
            }).then(response => {
                    state.commit('getPosts', response.data)
                    state.commit('allCount', response.headers["x-total-count"])
                })
        },
        async changePagePagination(state, payload) {
            await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _page: payload.page,
                    _limit: payload.limit
                }
            }).then(response => {
                state.commit('getPosts', response.data)
            })
        },
        async getDetailPost(state, payload) {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
                .then(response => {
                    state.commit('getDetailPost', response.data)
                })
        },
        async getMainPosts(state, payload) {
            state.commit('getLoading', true)
            await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _limit: payload.limit
                }
            }).then(response => {
                state.commit('getPosts', response.data)
            })
        },
    },
    getters: {
        getPosts: state => state.posts,
        loading: state => state.loading,
        allCount: state => state.allCount,
        detailPost: state => state.detailPost,
    }
}