<template>
<div class="icon-list"> 
    <i v-for="icon in materiaIcons" class="mdi " :class="'mdi-' + icon.name"></i>
</div>

</template>
<script>
import materiaIcons from '@/assets/theme/json/materialicons.json'
export default {
    data() {
        return {
            materiaIcons: []
        }
    },
    mounted() {
        this.materiaIcons = materiaIcons
    }
}
</script>
<style lang="scss" scoped>
.icon-list {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    i {
        margin: 4px;
        font-size: 28px;
        cursor: pointer;
        transition: background .2s ease-in-out;

        &:hover {
            background: #fff000;
        }
    }
}
</style>