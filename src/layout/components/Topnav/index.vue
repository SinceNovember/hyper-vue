<template>
    <div class="topnav">
        <div class="container-fluid active">
            <nav class="navbar navbar-dark navbar-expand-lg topnav-menu">
                <div class="collapse navbar-collapse active" id="topnav-menu-content">
                    <topbar-menu></topbar-menu>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import TopbarMenu from "./TopbarMenu"
export default {
    data() {
        return {
        }
    },
    components: {
        TopbarMenu
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style>

</style>