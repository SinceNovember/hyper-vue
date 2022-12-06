<template>
    <div class="content-page">
        <div class="content">
            <!-- Start Content-->
            <div class="container-fluid">
                <page-title></page-title>
                <keep-alive>
                    <router-view :key="key" :include="key"/>
                </keep-alive>
            </div>
        </div>
    </div>

</template>
  
<script>
import PageTitle from './PageTitle'
export default {
    name: "AppMain",
    components: {
        PageTitle
    },
    computed: {
        key() {
            this.$route.path;
        }
    }
};
</script>
  
<style>

</style>