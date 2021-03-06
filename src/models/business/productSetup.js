import { call, put } from 'dva/effects';

export default {

  namespace: 'business',
  state: {
  },

  subscriptions: [
    function(dispatch) {
    },
  ],

  effects: {
    *['examples/query']({ payload }) {
    },
  },

  reducers: {
    ['examples/save'](state, action) {
      return { ...state, ...action.payload };
    },
  },

}
