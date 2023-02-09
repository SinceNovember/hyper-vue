<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <code-main-header ref="headerRef" @search="refreshTable" @deleteSelect="deleteSelect"></code-main-header>
            <code-main-table ref="tableRef" @openEdit="openEdit"></code-main-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import CodeMainHeader from './components/CodeMainHeader.vue'
import CodeMainTable from './components/CodeMainTable.vue'
export default {
    components: {
        CodeMainHeader,
        CodeMainTable,
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