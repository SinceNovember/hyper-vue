<template>
    <Row span="24">
        <Col span="4">
        <Input v-model="params.nickname" placeholder="用户昵称..." suffix="ios-search" @on-enter="search" />
        </Col>
        <Col span="12" offset="8">
        <Row justify="end">
            <Button size="large" type="primary" custom-icon="mdi mdi-account-plus" @click="openAdd">添加用户</Button>
            <Button size="large" type="error" custom-icon="mdi mdi-close-thick" @click="deleteSelect">删除选中</Button>
        </Row>
        </Col>
        <Modal v-model="modal" title="添加" @on-ok="save" width="740px" :styles="{ top: '50px' }">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">添加用户</strong>
            </div>
            <user-add ref="userAdd" @search="search" @cancel="cancel" :userInfo="userInfo"></user-add>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="save">确定</Button>
            </div>
        </Modal>
    </Row>
</template>
<script>
import UserAdd from './UserAdd.vue'
export default {
    components: {
        UserAdd
    },
    data() {
        return {
            modal: false,
            params: {
                nickname: '',
            },
            userInfo: {},
        }
    },
    methods: {
        openAdd() {
            this.userInfo = {
                avatar: 'https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg',
                status: 'VALID'
            }
            this.modal = true
           
        },
        openEditDialog(userInfo) {
            this.userInfo = userInfo
            this.modal = true
        },
        save() {
            this.$refs.userAdd.save()
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
