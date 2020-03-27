import Vue from 'vue'
import CreateAPI from 'vue-create-api'

/* eslint-disable */

export default (component, single = true, config = {}) => {
  const defConfig = {
    componentPrefix: 'El',
    apiPrefix: '$app-',
  };

  if (typeof single === 'object') {
    config = single;
    single = typeof config === 'object' ? true : config;
  }

  Vue.use(CreateAPI, {
    ...defConfig,
    ...config,
  });

  return Vue.createAPI(component, single);
};
