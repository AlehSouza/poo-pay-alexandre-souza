import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#26250F',
        secondary: '#F7C600',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});

// background: linear-gradient(92.62deg, #26250F 0.28%, #0F1517 54.92%, #322D3F 154.68%);
