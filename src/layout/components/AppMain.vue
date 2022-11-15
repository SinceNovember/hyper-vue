<template>
    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">
                <!-- <keep-alive> -->
                    <router-view :key="key" />
                <!-- </keep-alive> -->
            </div>
        </div>
    </div>

</template>
  
<script>
export default {
    name: "AppMain",
    computed: {
        key() {
            this.$route.path;
        }
    }
};
</script>
  
<style>

</style>