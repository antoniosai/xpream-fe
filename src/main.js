require('./bootstrap');

import Vue from 'vue'
import store from './store'
import apolloProvider from './apollo'
import router from './router'
import Gate from './gate'

import LightTimeline from 'vue-light-timeline';
 

Vue.use(LightTimeline);

import { abilitiesPlugin } from '@casl/vue'

import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadStock from 'highcharts/modules/stock';


loadStock(Highcharts);
Vue.use(VueHighcharts, {Highcharts});


import titleMixin from './mixin/titleMixin'
import Permissions from './mixin/Permissions';
// import Permissions from './mixin/permission'

var dummy_user = {
    name: 'Antonio Saiful',
    role: 'superadmin',
    permissions: [
        {
            slug: 'planning_gate_edit',
            display_name: 'Planning Gates - Edit Mode',
            description: 'Users can edit & view the Plan Gates'
        },
    ]
}

Vue.prototype.$gate = new Gate(dummy_user)

// console.log(Gate(dummy_user))

Vue.use(abilitiesPlugin)
// Base template, contains Header, Menu, Content and so on
Vue.component('main-layout', require('./layouts/Main.vue').default);

Vue.mixin(titleMixin)
Vue.mixin(Permissions)

const app = new Vue({
    el: '#app',
    router, store,
	apolloProvider
    // render: h => h(App)
});
