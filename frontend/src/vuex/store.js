import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  router: {
    pathAfterLogin: null,
  },
  blog: {
    posts: {
      options: null,
      list: null,
      detail: null,
    }
  },
};

const mutations = {
  'SET_BLOG_POSTS_LIST' (state, posts) {
    state.blog.posts.list = posts;
  },

  'SET_BLOG_POSTS_DETAIL' (state, post) {
    state.blog.posts.detail = post;
  },

  'SET_BLOG_POSTS_OPTIONS' (state, options) {
    state.blog.posts.options = options;
  },

  'SET_ROUTER_PATH_AFTER_LOGIN' (state, path) {
    state.router.pathAfterLogin = path;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
