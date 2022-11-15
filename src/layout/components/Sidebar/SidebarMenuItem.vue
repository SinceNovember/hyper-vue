<template>
    <li v-if="!route.hidden" class="side-nav-item">
        <template v-if="hasChild(route.children)">
            <router-link ref="tag" :key="route.path" :to="{ path: route.path + '#' + route.name }"
                data-bs-toggle="collapse" :class="{ 'side-nav-link': !route.parentId }" aria-expanded="false" tag="a">
                <i v-if="route.meta.icon" :class="route.meta.icon"></i>
                <span> {{ route.meta.title }} </span>
                <span v-if="route.children.length > 0" class="menu-arrow"></span>
            </router-link>
        </template>
        <template v-else>
            <router-link :key="route.path" :to="{ path: route.path }" tag="a"
                :class="{ 'side-nav-link': !route.parentId }">
                <i v-if="route.meta.icon" :class="route.meta.icon"></i>
                <span> {{ route.meta.title }} </span>
            </router-link>
        </template>
        <template v-if="hasChild(route.children)">
            <div class="collapse" :id="route.name">
                <ul :class="!route.parentId ? 'side-nav-second-level' : 'side-nav-third-level'">
                    <template v-for="(subMenu, index) in route.children">
                        <sidebar-menu-item :route="subMenu"></sidebar-menu-item>
                    </template>
                </ul>
            </div>
        </template>
    </li>
</template>
<script>
export default {
    name: "SidebarMenuItem",
    data() {
        this.onlyOneChild = null;
        return {};
    },
    props: {
        route: {
            type: Object
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
<style>

</style>