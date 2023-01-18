<template>
    <Row span="24">
        <Col span="4">
        <Input v-model="params.title" placeholder="菜单名称..." suffix="ios-search" @on-enter="search" />
        </Col>
        <Col span="12" offset="8">
        <Row justify="end">
            <Button size="large" type="primary" custom-icon="mdi mdi-view-grid-plus" @click="openAdd">添加菜单</Button>
            <Button size="large" class="btn btn-light mb-2" custom-icon="mdi mdi-view-grid-plus">导出</Button>
        </Row>
        </Col>
        <Modal v-model="modal" title="添加菜单" @on-ok="save" width="680px" :styles="{top: '50px', padding: '2px'}" >
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">添加菜单</strong>
            </div>
            <menu-add ref="menuAdd" @search="search" @cancel="cancel" :menuInfo="menuInfo"></menu-add>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="save">确定</Button>
            </div>
        </Modal>
    </Row>
</template>
<script>
import MenuAdd from './MenuAdd.vue'
export default {
    components: {
        MenuAdd
    },
    data() {
        return {
            modal: false,
            params: {
                title: "",
            },
            menuInfo: {},
        }
    },
    methods: {
        openAdd() {
            this.menuInfo = {
                type: "DIRECTORY",
                orderNum: 0,
                requestMethod: "GET",
                alwaysShow: true,
                hidden: false,
                breadCrumb: true,
            }
            this.modal = true
        },
        openEditDialog(menuInfo) {
            this.menuInfo = menuInfo
            this.modal = true
        },
        save() {
            this.$refs.menuAdd.save()
        },
        search() {
            this.$emit('search', this.params)
        },
        cancel() {
            this.modal = false
        }
    }
}
</script>
