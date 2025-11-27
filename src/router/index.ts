import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CoffeeList from "../views/CoffeeList.vue";
import CoffeeDetail from "../views/CoffeeDetail.vue";
import BrewingList from "../views/BrewingList.vue";
import BrewingDetail from "../views/BrewingDetail.vue";
import KnowledgeList from "../views/KnowledgeList.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/coffees",
      name: "coffees",
      component: CoffeeList,
    },
    {
      path: "/coffees/:id",
      name: "coffee-detail",
      component: CoffeeDetail,
    },
    {
      path: "/brewing",
      name: "brewing",
      component: BrewingList,
    },
    {
      path: "/brewing/:id",
      name: "brewing-detail",
      component: BrewingDetail,
    },
    {
      path: "/knowledge",
      name: "knowledge",
      component: KnowledgeList,
    },
    {
      path: "/knowledge/:id",
      name: "article-detail",
      component: ArticleDetail,
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
