<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <menu-header ref="menuHeader" @search="refreshTable"></menu-header>
            <menu-table ref="menuTable" @openEdit="openEdit"></menu-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import MenuHeader from './components/MenuHeader.vue'
import MenuTable from './components/MenuTable.vue'
export default {
    components: {
        MenuHeader,
        MenuTable,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            this.$refs.menuTable.refreshTable(params)
        },
        openEdit(menuInfo) {
            this.$refs.menuHeader.openEditDialog(menuInfo)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>