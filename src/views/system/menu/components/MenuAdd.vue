<template>
    <div class="menu-tabs">
        <Tabs :value="menuInfo.type" @on-click="handleTabs">
            <TabPane label="目录" name="DIRECTORY">
            </TabPane>
            <TabPane label="菜单" name="MENU">
            </TabPane>
            <TabPane label="按钮" name="BUTTON">标签三的内容</TabPane>
        </Tabs>
        <Form :model="menuInfo" ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem v-if="menuInfo.type != 'DIRECTORY'" label="上级菜单" prop="parentId">
                <tree-select :data="treeModelData" :modelValue.sync="menuInfo.parentId"></tree-select>
            </FormItem>
            <FormItem :label="menuInfo.type != 'BUTTON' ? '菜单名称' : '按钮名称'" prop="title">
                <Input v-model="menuInfo.title"></Input>
            </FormItem>
            <Row v-if="menuInfo.type != 'BUTTON'">
                <Col span="16">
                <FormItem label="菜单图标">
                    <div class="icon-list">
                        <Select v-model="menuInfo.icon" filterable>
                            <template #prefix>
                                <div class="prefix-icon-badget"><i :class="menuInfo.icon"></i></div>
                            </template>
                            <Option v-for="icon in materialIcons" :value="'mdi mdi-' + icon.name"
                                :key="'mdi mdi-' + icon.name" :label="'mdi mdi-' + icon.name">
                                <i class="mdi " :class="'mdi-' + icon.name"></i>
                            </Option>
                        </Select>
                    </div>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="标志" prop="name">
                    <Input v-model="menuInfo.name"></Input>
                </FormItem>
                </Col>
            </Row>
            <FormItem :label="menuInfo.type != 'BUTTON' ? '路由地址' : 'API地址'" prop="path">
                <Input v-model="menuInfo.path"></Input>
            </FormItem>
            <FormItem v-if="menuInfo.type == 'MENU'" label="组件地址" prop="component">
                <Input v-model="menuInfo.component"></Input>
            </FormItem>
            <FormItem v-if="menuInfo.type == 'BUTTON'" label="API类型">
                    <RadioGroup v-model="menuInfo.requestMethod">
                        <Radio label="GET"></Radio>
                        <Radio label="POST"></Radio>
                        <Radio label="PUT"></Radio>
                        <Radio label="DELETE"></Radio>
                        <Radio label="PATCH"></Radio>
                </RadioGroup>
            </FormItem>
            <Row>
                <Col span="12" v-if="menuInfo.type != 'BUTTON'">
                <FormItem label="重定向" prop="date">
                    <Input v-model="menuInfo.redirect"></Input>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="排序">
                    <InputNumber v-model="menuInfo.orderNum" controls-outside width="100%" />
                </FormItem>
                </Col>
            </Row>
            <FormItem v-if="menuInfo.type != 'BUTTON'">
                <Checkbox v-model="menuInfo.hidden">隐藏</Checkbox>
                <Checkbox v-model="menuInfo.alwaysShow">公开</Checkbox>
                <Checkbox v-model="menuInfo.breadCrumb">面包屑</Checkbox>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { fetchMenuTreeModel, addOrUpdateMenu } from '@/api/menu'
import materialIcons from '@/assets/theme/json/materialicons.json'
import TreeSelect from '@/components/TreeSelect'

export default {
    props: {
        menuInfo: Object,
    },
    components: {
        TreeSelect
    },
    data() {
        return {
            materialIcons,
            treeModelData: [],
            currentTab: "DIRECTORY",
            ruleValidate: {
                parentId: [
                    { required: true, type: "number", message: '父节点不可为空', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: '名称不可为空', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '标志不能为空', trigger: 'blur' }
                ],
                path: [
                    { required: true, message: '地址不可为空', trigger: 'blur' }
                ],
                component: [
                    { required: true, message: '组件不可为空', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.loadTreeModel()
    },
    methods: {
        loadTreeModel() {
            fetchMenuTreeModel().then(res => {
                this.treeModelData = res.data;
            });
        },
        search() {
            this.$emit("search")
        },
        save() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    addOrUpdateMenu(this.menuInfo)
                        .then(res => {
                            this.search()
                            this.$emit("cancel")
                            this.$Message.success('保存成功')
                        })
                }
            })
        },
        handleTabs(name) {
            this.menuInfo.type = name
        }
    }
}
</script>

<style lang="scss" scoped>
.ivu-form {
    padding: 0px 40px;
}

.ivu-input-number {
    width: 100%;
}

.ivu-checkbox-wrapper {
    margin-right: 24px;
}

.prefix-icon-badget {
    position: relative;
    top: -1px;
    width: 28px;
    height: 30px;
    line-height: 30px;
    background: var(--ct-ivu-select-prefix-icon-badget-bg);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 20px;
    }
}
</style>