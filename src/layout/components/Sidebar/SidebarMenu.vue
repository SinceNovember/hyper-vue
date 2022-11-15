<template>
    <!--- Sidemenu -->
    <ul class="side-nav">
        <sidebar-menu-item v-for="(route, index) in menus" :route="route" :key="index"></sidebar-menu-item>
    </ul>
    <!--- End Sidemenu -->

</template>
    
<script>
import SidebarMenuItem from "./SidebarMenuItem"
export default {
    name: "SidebarMenu",
    components: {
        SidebarMenuItem
    },
    data() {
        return {
            menus: global.antRouter
        }
    },
    mounted() {
    },
    methods: {
        loadThemes() {
            fetchThemes().then(res => {
                this.themeList = res.data.records;
            });
        },
        //换主题
        changeTheme(type) {
            window.document.documentElement.setAttribute("data-sidenav-size", "condensed");

        }
    }
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
    