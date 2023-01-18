<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <role-header ref="roleHeader" @search="refreshTable" @deleteSelect="deleteSelect"></role-header>
            <role-table ref="roleTable" @openEdit="openEdit"></role-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import RoleHeader from './components/RoleHeader.vue'
import RoleTable from './components/RoleTable.vue'
export default {
    components: {
        RoleHeader,
        RoleTable,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            this.$refs.roleTable.refreshTable(params)
        },
        openEdit(userInfo) {
            this.$refs.roleHeader.openEditDialog(userInfo)
        },
        deleteSelect() {
            this.$refs.roleTable.deleteSelect()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>