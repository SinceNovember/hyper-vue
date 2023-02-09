<template>
    <div class="form-wrapper">
        <Form :model="dataInfo" ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="代码项名" prop="itemText">
                <Input v-model="dataInfo.itemText"></Input>
            </FormItem>
            <FormItem label="代码项值" prop="itemValue">
                <Input v-model="dataInfo.itemValue"></Input>
            </FormItem>
            <Row>
                <Col span="14">
                <FormItem label="排序">
                    <InputNumber v-model="dataInfo.orderNum" controls-outside width="100%" />
                </FormItem>
                </Col>
            </Row>
            <FormItem label="描述">
                <Input type="textarea" :rows="4" v-model="dataInfo.description"></Input>
            </FormItem>
        </Form>
    </div>
</template>
<script>

import { addOrUpdateCodeItem } from '@/api/codeItem'

export default {
    props: {
        dataInfo: Object,
    },
    data() {
        return {
            ruleValidate: {
                itemText: [
                    { required: true, message: '代码项名不能为空', trigger: 'blur' }
                ],
                itemValue: [
                    { required: true, message: '代码项值不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
    },
    methods: {
        search() {
            this.$emit("search")
        },
        save() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    addOrUpdateCodeItem(this.dataInfo)
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