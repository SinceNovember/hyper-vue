<template>
    <div class="form-wrapper">
        <Form :model="roleInfo" ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="角色名称" prop="roleName">
                <Input v-model="roleInfo.roleName"></Input>
            </FormItem>
            <FormItem label="角色标志" prop="roleTag">
                <Input v-model="roleInfo.roleTag"></Input>
            </FormItem>
            <Row>
                <Col span="12">
                <FormItem label="状态">
                    <Select v-model="roleInfo.status">
                        <Option v-for="item in statusOptions" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="排序">
                    <InputNumber v-model="roleInfo.orderNum" controls-outside width="100%" />
                </FormItem>
                </Col>
            </Row>
            <FormItem label="描述">
                <Input type="textarea" :rows="4" v-model="roleInfo.description"></Input>
            </FormItem>
        </Form>
    </div>
</template>
<script>

import { addOrUpdateRole } from '@/api/role'
import { getStatusOption } from '@/api/option'

export default {
    props: {
        roleInfo: Object,
    },
    data() {
        return {
            statusOptions: [
                {
                    value: 'VALID',
                    label: '启用'
                },
                {
                    value: 'LOCK',
                    label: '禁用'
                },
            ],
            ruleValidate: {
                roleName: [
                    { required: true, message: '角色名不能为空', trigger: 'blur' }
                ],
                roleTag: [
                    { required: true, message: '角色标志不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.loadStatusOptionModel()
    },
    methods: {
        loadStatusOptionModel() {
            getStatusOption().then(res => {
                this.statusOptions = res.data
            })
        },
        search() {
            this.$emit("search")
        },
        save() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    addOrUpdateRole(this.roleInfo)
                        .then(res => {
                            this.search()
                            this.$emit("cancel")
                            this.$Message.success('保存成功')
                        })
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.form-wrapper {

    .ivu-form {
        padding: 10px 20px;
    }

    .ivu-input-number {
        width: 100%;
    }

}
</style>