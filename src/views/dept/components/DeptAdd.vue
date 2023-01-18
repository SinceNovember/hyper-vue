<template>
    <div class="form-wrapper">
        <Form :model="deptInfo" ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="上级部门">
                <tree-select :data="treeModelData" :modelValue.sync="deptInfo.parentId"></tree-select>
            </FormItem>
            <FormItem label="部门名称" prop="deptName">
                <Input v-model="deptInfo.deptName"></Input>
            </FormItem>

            <Row>
                <Col span="12">
                <FormItem label="部门简称">
                    <Input v-model="deptInfo.deptShortName"></Input>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="排序">
                    <InputNumber v-model="deptInfo.orderNum" controls-outside width="100%" />
                </FormItem>
                </Col>
            </Row>
            <FormItem label="描述">
                <Input type="textarea" :rows="4" v-model="deptInfo.description"></Input>
            </FormItem>
        </Form>
    </div>
</template>
<script>

import { fetchDeptTreeModel, addOrUpdateDept } from '@/api/dept'
import TreeSelect from '@/components/TreeSelect'


export default {
    props: {
        deptInfo: Object,
    },
    components: {
        TreeSelect,
    },
    data() {
        return {
            treeModelData: [],
            ruleValidate: {
                deptName: [
                    { required: true, message: '部门名称不能为空', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.loadTreeModel()
    },
    methods: {
        loadTreeModel() {
            fetchDeptTreeModel().then(res => {
                this.treeModelData = res.data.data;
            });
        },
        search() {
            this.$emit("search")
        },
        save() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    addOrUpdateDept(this.deptInfo)
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