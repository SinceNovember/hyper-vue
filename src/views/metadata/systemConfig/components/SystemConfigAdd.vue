<template>
    <div class="form-wrapper">
        <Form :model="dataInfo" ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="参数名称" prop="configName">
                <Input v-model="dataInfo.configName"></Input>
            </FormItem>
            <FormItem label="参数值" prop="configValue">
                <Input v-model="dataInfo.configValue"></Input>
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

import { addOrUpdateSystemConfig } from '@/api/systemConfig'

export default {
    props: {
        dataInfo: Object,
    },
    data() {
        return {
            ruleValidate: {
                configName: [
                    { required: true, message: '参数名不能为空', trigger: 'blur' }
                ],
                configValue: [
                    { required: true, message: '参数值不能为空', trigger: 'blur' }
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
                    addOrUpdateSystemConfig(this.dataInfo)
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