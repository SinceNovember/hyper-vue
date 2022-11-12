<template>

    <!-- ========== Topbar Start ========== -->
    <div class="navbar-custom topnav-navbar">
        <div class="container-fluid detached-nav">
            <Logo></Logo>

            <!-- Sidebar Menu Toggle Button -->
            <button class="button-toggle-menu" @click="toggleSidebar">
                <i class="mdi mdi-menu"></i>
            </button>

            <!-- Horizontal Menu Toggle Button -->
            <button class="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <navbar-menu></navbar-menu>
            <navbar-search></navbar-search>
        </div>
    </div>

</template>
<script>
import { mapGetters } from "vuex";
import Logo from "./Logo"
import NavbarMenu from "./NavbarMenu"
import NavbarSearch from "./NavbarSearch"
export default {
    components: {
        Logo,
        NavbarMenu,
        NavbarSearch
    },
    computed: {
        ...mapGetters(["sidebar"]),
        isCollapse() {
            return !this.sidebar.opened;
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch("app/toggleSideBar");
        }
    }
}
</script>
<style>

</style>