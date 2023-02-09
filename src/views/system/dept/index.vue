<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <dept-header ref="deptHeader" @search="refreshTable" @deleteSelect="deleteSelect"></dept-header>
            <dept-table ref="deptTable" @openEdit="openEdit"></dept-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import DeptHeader from './components/DeptHeader.vue'
import DeptTable from './components/DeptTable.vue'
export default {
    components: {
        DeptHeader,
        DeptTable,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            this.$refs.deptTable.refreshTable(params)
        },
        openEdit(params) {
            this.$refs.deptHeader.openEditDialog(params)
        },
        deleteSelect() {
            this.$refs.deptTable.deleteSelect()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>