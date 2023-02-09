<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <user-header ref="userHeader" @search="refreshTable" @deleteSelect="deleteSelect"></user-header>
            <user-table ref="userTable" @openEdit="openEdit"></user-table>
        </Card>
        </Col>
    </Row>
</template>
<script>
import UserHeader from './components/UserHeader.vue'
import UserTable from './components/UserTable.vue'
export default {
    components: {
        UserHeader,
        UserTable,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            this.$refs.userTable.refreshTable(params)
        },
        openEdit(params) {
            this.$refs.userHeader.openEditDialog(params)
        },
        deleteSelect() {
            this.$refs.userTable.deleteSelect()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>