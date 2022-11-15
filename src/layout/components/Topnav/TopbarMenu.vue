<template>
    <ul class="navbar-nav">
        <template v-for="(route, index) in menus">
            <li class="dropdown nav-item">
                <router-link :key="route.path" :to="{ path: route.path }" id="topnav-pages" role="button"
                    :data-bs-toggle="hasChild(route.children, route) ? 'dropdown' : ''" aria-haspopup="true"
                    class="nav-link dropdown-toggle arrow-none" aria-expanded="false">
                    <i :class="route.meta.icon"></i>
                    {{ route.meta.title }}
                    <div v-if="hasChild(route.children, route)" class="arrow-down"></div>
                </router-link>
                <topbar-menu-item v-if="hasChild(route.children, route)" :route="route" :key="index">
                </topbar-menu-item>
            </li>
        </template>
    </ul>
</template>
<script>
import TopbarMenuItem from "./TopbarMenuItem"
export default {
    name: "TopbarMenu",
    components: {
        TopbarMenuItem
    },
    data() {
        return {
            menus: global.antRouter
        }
    },
    methods: {
        hasChild(children = []) {
            if (children.length > 0) {
                return true;
            }
            return false;
        }
    }
}
</script>
