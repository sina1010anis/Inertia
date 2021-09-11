// require('./bootstrap');
//
// /*
// |----------------------------------------------------------------
// | Vue 3
// |----------------------------------------------------------------
// */
//
// import { createApp, h } from 'vue'
// import { App, plugin } from '@inertiajs/inertia-vue3'
// import { InertiaProgress } from '@inertiajs/progress'
//
// InertiaProgress.init()
const el = document.getElementById('app')
//
// createApp({
//     render: () => h(App, {
//         initialPage: JSON.parse(el.dataset.page),
//         resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
//     })
// })
//     .mixin({
//         methods: {
//             route: (name, params, absolute) => route(name, params, absolute, Ziggy),
//         },
//     })
//     .use(plugin)
//     .mount(el)

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import { Head, Link } from '@inertiajs/inertia-vue3';
import Welcome from "./Pages/Welcome";
createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({el, App, props, plugin}) {
        createApp({
            render: () => h(App, props),
        })
            .use(plugin)
            .mount('#app')
    },
})
const app = createApp({
    data: () => ({
        test:'test'
    }),
    components:{
        Link, Head , Welcome
    }
})

app.mount('#app')
