<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <login-log-header ref="headerRef" @search="refreshTable" @deleteSelect="deleteSelect"></login-log-header>
            <login-log-table ref="tableRef" @openEdit="openEdit"></login-log-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import LoginLogHeader from './components/LoginLogHeader.vue'
import LoginLogTable from './components/LoginLogTable.vue'
export default {
    components: {
        LoginLogHeader,
        LoginLogTable,
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