<template>
       <div class="dropdown-menu" aria-labelledby="topnav-pages">
        <template v-for="(subMenu, index) in route.children">
            <div v-if="hasShowingChild(subMenu.children, subMenu)" class="dropdown">
                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ subMenu.meta.title }}
                    <div class="arrow-down"></div>
                </a>
                <topbar-menu-item :route="subMenu" :key="index"> </topbar-menu-item>
            </div>
            <router-link v-else ref="tag" :key="subMenu.path" :to="{ path: subMenu.path }" class="dropdown-item">
                {{ subMenu.meta.title }}
            </router-link>
        </template>
    </div>
</template>
<script>
export default {
    name: "TopbarMenuItem",
    data() {
        this.onlyOneChild = null;
        return {};
    },
    props: {
        route: {
            type: Object
        },
        root: {
            type: Boolean
        }
    },
    methods: {
        hasShowingChild(children = []) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    // Temp set(will be used if only has one showing child)
                    // this.onlyOneChild = item;
                    return true;
                }
            })

            // When there is only one child router, the child router is displayed by default
            if (showingChildren.length > 0) {
                return true;
            }

            // Show parent if there are no child router to display
            // if (showingChildren.length === 0) {
            //     this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
            //     return true;
            // }

        }
    }
}
</script>