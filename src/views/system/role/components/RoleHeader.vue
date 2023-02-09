<template>
    <Row span="24">
        <Col span="4">
        <Input v-model="params.roleName" placeholder="角色名称..." suffix="ios-search" @on-enter="search" />
        </Col>
        <Col span="12" offset="8">
        <Row justify="end">
            <Button size="large" type="primary" custom-icon="mdi mdi-account-plus" @click="openAdd">添加角色</Button>
            <Button size="large" type="error" custom-icon="mdi mdi-close-thick" @click="deleteSelect">删除选中</Button>
        </Row>
        </Col>
        <Modal v-model="modal" title="添加" @on-ok="save" width="740px">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">添加角色</strong>
            </div>
            <role-add ref="roleAdd" @search="search" @cancel="cancel" :roleInfo="roleInfo"></role-add>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="save">确定</Button>
            </div>
        </Modal>
    </Row>
</template>
<script>
import RoleAdd from './RoleAdd.vue'
export default {
    components: {
        RoleAdd
    },
    data() {
        return {
            modal: false,
            params: {
                roleName: '',
            },
            roleInfo: {},
        }
    },
    methods: {
        openAdd() {
            this.roleInfo = {
                status: 'VALID',
                orderNum: 0,
            }
            this.modal = true
        },
        openEditDialog(roleInfo) {
            this.roleInfo = roleInfo
            this.modal = true
        },
        save() {
            this.$refs.roleAdd.save()
        },
        search() {
            this.$emit('search', this.params)
        },
        deleteSelect() {
            this.$emit('deleteSelect')
        },
        cancel() {
            this.modal = false
        }
    }
}
</script>
