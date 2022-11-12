<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="leftside-menu menuitem-active">

        <!-- Logo Light -->

        <logo></logo>

        <!-- Sidebar Hover Menu Toggle Button -->
        <button type="button" class="btn button-sm-hover p-0" data-bs-toggle="tooltip" data-bs-placement="right"  @click="fixedSidebar"
            aria-label="Show Full Sidebar">
            <i class="ri-checkbox-blank-circle-line align-middle"></i>
        </button>

        <!-- Sidebar -left -->
        <div class="h-100 show" id="leftside-menu-container" data-simplebar="init">
            <div class="simplebar-wrapper" style="margin: 0px;">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                        <div class="simplebar-content-wrapper" tabindex="0" role="region"
                            aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                            <div class="simplebar-content" style="padding: 0px;">
                                <!-- Leftbar User -->
                                <div class="leftbar-user">
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-profile.html">
                                        <img src="@/assets/theme/img/avatar-1.jpg" alt="user-image" height="42"
                                            class="rounded-circle shadow-sm">
                                        <span class="leftbar-user-name">Dominic Keller</span>
                                    </a>
                                </div>

                                <!--- Sidemenu -->
                                <sidebar-menu></sidebar-menu>
                                <!--- End Sidemenu -->

                                <!-- Help Box -->
                                <div class="help-box text-white text-center">
                                    <a href="javascript: void(0);" class="float-end close-btn text-white">
                                        <i class="mdi mdi-close"></i>
                                    </a>
                                    <img src="@/assets/theme/img/help-icon.svg" height="90" alt="Helper Icon Image">
                                    <h5 class="mt-3">Unlimited Access</h5>
                                    <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
                                    <a href="javascript: void(0);" class="btn btn-secondary btn-sm">Upgrade</a>
                                </div>
                                <!-- end Help Box -->

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="simplebar-placeholder" style="width: auto; height: 2590px;"></div>
            </div>
            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
            </div>
            <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                <div class="simplebar-scrollbar"
                    style="height: 137px; transform: translate3d(0px, 244px, 0px); display: block;"></div>
            </div>
        </div>
    </div>
    <!-- ========== Left Sidebar End ========== -->
</template>

<script>
import Logo from "./Logo"
import SidebarMenu from "./SidebarMenu"
export default {

    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        Logo,
        SidebarMenu
    },
    mounted() {
    },
    methods: {
        loadThemes() {
            fetchThemes().then(res => {
                this.themeList = res.data.records;
            });
        },
        fixedSidebar() {
            this.$store.dispatch("app/fixedSidebar")
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
