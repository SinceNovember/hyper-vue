<template>

    <body class="show" >
        <!-- Begin page -->
        <div class="wrapper">

            <navbar></navbar>
            
            <div v-if="layout != 'topnav'">
                <!-- ========== Left Sidebar Start ========== -->
                <sidebar></sidebar>
                <!-- ========== Left Sidebar End ========== -->
            </div>
            <div v-else>
                <!-- ========== Horizontal Menu Start ========== -->
                <topnav></topnav>
                <!-- ========== Horizontal Menu End ========== -->
            </div>
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->
            <app-main></app-main>
            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

        </div>
        <!-- END wrapper -->

        <!-- Theme Settings -->
        <settings></settings>


        <!-- settings mask -->
        <!-- <div :class="{ 'offcanvas-backdrop fade show': isShow }"></div> -->

    </body>

</template>
  
<script>
import { mapGetters } from "vuex";
import { Sidebar, Navbar, Topnav, AppMain, Settings } from "./components";
export default {
    name: "Layout",
    computed: {
        ...mapGetters(["sidebar", "settings"]),
        isShow() {
            return this.settings.opened
        },
        layout() {
            return this.settings.layout
        }
    },
    components: {
        Sidebar,
        Navbar,
        Topnav,
        AppMain,
        Settings
    },
    methods: {
        closeMask() {

        }
    }
};
</script>
  
<style >

</style>