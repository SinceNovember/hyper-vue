<template>
    <Row class="table-card">
        <Col span="24">
        <code-item-header ref="headerRef" @search="refreshTable" :codeId="codeId"
            @deleteSelect="deleteSelect"></code-item-header>
        <code-item-table ref="tableRef" @search="refreshTable" @openEdit="openEdit" :codeId="codeId"
            :itemList="itemList" :itemSpinShow="itemSpinShow"></code-item-table>
        </Col>
    </Row>
</template>
<script>
import CodeItemHeader from './components/CodeItemHeader.vue'
import CodeItemTable from './components/CodeItemTable.vue'
export default {
    components: {
        CodeItemHeader,
        CodeItemTable,
    },
    props: {
        codeId: Number,
        itemList: Object,
        itemSpinShow: Boolean,
    },
    data() {
        return {
        }
    },
    methods: {
        refreshTable(params) {
            params = { ...params, codeId: this.codeId }
            this.$emit('searchItem', params)
            // this.$refs.tableRef.refreshTable(params)
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
.table-card {
    padding: 4px 16px;
}
</style>