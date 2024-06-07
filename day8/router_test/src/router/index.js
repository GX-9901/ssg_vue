import Vue from "vue";
import VueRouter from "vue-router";


import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import News from "@/views/News";
import Detail from "@/views/Detail";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            component: Home,
            name: "Home",
            redirect: "/home/news",
            children: [
                {
                    path: "/home/message",
                    component: Message,
                    name: "Message",
                    children: [
                        {
                            name: "Detail",
                            path: "/home/message/:id",
                            component: Detail,
                        },
                    ],
                },
                {
                    path: "news",
                    component: News,
                    name: "News",
                    meta: {
                        name: "jack",
                        age: 18,
                    },
                },
            ],
        },
        {
            path: "/about",
            component: About,
            name: "About",
        },
        {
            path: "*",
            redirect: "/home",
        },
    ],
});

export default router;
