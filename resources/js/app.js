require('./bootstrap');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import { BootstrapVue, Sidebar } from 'bootstrap-vue';
import Chart from 'chart.js';

// ---------------------------------------- //

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChartBar, faShoppingCart, faBarcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faChartBar, faShoppingCart, faBarcode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// ---------------------------------------- //

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// ---------------------------------------- //
Vue.use(BootstrapVue)
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.component('Chart', Chart);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
