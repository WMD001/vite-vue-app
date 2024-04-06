import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import Index from "../components/Index.vue";
import FlowChart from "../components/FlowChart.vue";

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '/flow',
        name: '流程图',
        component: FlowChart
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})