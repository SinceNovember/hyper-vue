<template>
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <breadcrumb></breadcrumb>
                </div>
                <h4 class="page-title">{{ routeTitle }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
    data() {
        return {
            routeTitle: null
        }
    },
    watch: {
        $route(route) {
            // if (route.path.startWith('/redirect/')) {
            //     return
            // }
            this.getRouteTitle()
        }
    },
    components: {
        Breadcrumb
    },
    created() {
        this.getRouteTitle()
    },
    methods: {
        getRouteTitle() {
            this.routeTitle = this.$route.meta.title
        }
    }
}
</script>