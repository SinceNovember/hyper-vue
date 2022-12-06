<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-light-lighten p-2">
            <li class="breadcrumb-item" v-for="(item, index) in levelList">
                <router-link :to="{ path: item.meta.path }">
                    {{ item.meta.title }}
                </router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            levelList: null
        }
    },
    watch: {
        $route(route) {
            // if (route.path.startWith('/redirect/')) {
            //     return
            // }
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]

            this.levelList = matched.filter(item => {
                item.meta.path = item.path
                return item.meta && item.meta.title && item.meta.breadcrumb !== false
            })
        }
    }
}
</script>