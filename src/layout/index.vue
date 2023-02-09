<template>

    <body class="show">
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
    </body>

</template>
  
<script>
import { getLoginUserInfo } from '@/api/user'
import { Sidebar, Navbar, Topnav, AppMain, Settings } from "./components"
import { mapGetters } from "vuex"

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
    mounted() {
        this.loadUserInfo()
    },
    methods: {
        loadUserInfo() {
            getLoginUserInfo().then(res => {
                this.$store.dispatch("user/saveUserInfo", res.data)
            })
        }
    }
};
</script>
  
<style >

</style>