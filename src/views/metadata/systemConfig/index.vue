<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <system-config-header ref="headerRef" @search="refreshTable" @deleteSelect="deleteSelect"></system-config-header>
            <system-config-table ref="tableRef" @openEdit="openEdit"></system-config-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import SystemConfigHeader from './components/SystemConfigHeader.vue'
import SystemConfigTable from './components/SystemConfigTable.vue'
export default {
    components: {
        SystemConfigHeader,
        SystemConfigTable,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            this.$refs.tableRef.refreshTable(params)
        },
        openEdit(params) {
            this.$refs.headerRef.openEditDialog(params)
        },
        deleteSelect() {
            this.$refs.tableRef.deleteSelect()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>