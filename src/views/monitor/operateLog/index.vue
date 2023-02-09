<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <operate-log-header ref="headerRef" @search="refreshTable" @deleteSelect="deleteSelect"></operate-log-header>
            <operate-log-table ref="tableRef" @openEdit="openEdit"></operate-log-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import OperateLogHeader from './components/OperateLogHeader.vue'
import OperateLogTable from './components/OperateLogTable.vue'
export default {
    components: {
        OperateLogHeader,
        OperateLogTable,
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