<template>
    <Row span="24">
        <Col span="4">
        <Input v-model="params.codeName" placeholder="代码名称..." suffix="ios-search" @on-enter="search" />
        </Col>
        <Col span="12" offset="8">
        <Row justify="end">
            <Button size="large" type="primary" custom-icon="mdi mdi-account-plus" @click="openAdd">添加代码</Button>
            <Button size="large" type="error" custom-icon="mdi mdi-close-thick" @click="deleteSelect">删除选中</Button>
        </Row>
        </Col>
        <Modal v-model="modal" title="添加" @on-ok="save" width="740px">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">添加代码</strong>
            </div>
            <code-main-add ref="addRef" @search="search" @cancel="cancel" :dataInfo="dataInfo"></code-main-add>
            <div slot="footer">
                <Button type="text" @click="cancel">取消</Button>
                <Button type="primary" @click="save">确定</Button>
            </div>
        </Modal>
    </Row>
</template>
<script>

import CodeMainAdd from './CodeMainAdd.vue'
export default {
    components: {
        CodeMainAdd
    },
    data() {
        return {
            modal: false,
            params: {
                codeName: '',
            },
            dataInfo: {},
        }
    },
    methods: {
        openAdd() {
            this.dataInfo = {
                orderNum: 0,
            }
            this.modal = true
        },
        openEditDialog(dataInfo) {
            this.dataInfo = dataInfo
            this.modal = true
        },
        save() {
            this.$refs.addRef.save()
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
