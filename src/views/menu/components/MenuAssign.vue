<template>
    <div class="assign-tabs">
        <Tabs :value="tabName" @on-click="handleTabs">
            <TabPane label="角色" name="ROLE">
            </TabPane>
            <TabPane label="部门" name="DEPT">
            </TabPane>
            <TabPane label="用户" name="USER"></TabPane>
            {{ menuId }}
        </Tabs>
        <tree-list v-show="tabName == 'ROLE'" ref="roleTreeList" :menuId="menuId" :data="roleTreeModelData"
            :selectedNode="roleSelectedNode"></tree-list>
        <tree-list v-show="tabName == 'DEPT'" ref="deptTreeList" :menuId="menuId" :data="deptTreeModelData"
            :selectedNode="deptSelectedNode"></tree-list>
        <tree-list v-show="tabName == 'USER'" ref="userTreeList" :menuId="menuId" :data="userTreeModelData"
            :selectedNode="userSelectedNode"></tree-list>
        <!-- <div class="info-body">
            <div class="panel-side">
                <div class="panel-side-header">
                    授权角色
                </div>
                <div class="panel-side-body">
                    <Input v-model="value" placeholder="Enter something..." />
                    <div class="panel-side-content">

                        <template v-show="tabName == 'ROLE'">
                            <Tree :data="roleTreeModelData" @on-check-change="valueChanged" show-checkbox></Tree>
                        </template>
                        <template v-show="tabName == 'DEPT'">
                            <Tree :data="deptTreeModelData" @on-check-change="valueChanged" show-checkbox>
                                </Tree>
                        </template>

                        <template v-show="tabName == 'USER'">
                            <Tree  :data="userTreeModelData" @on-check-change="valueChanged" show-checkbox></Tree>
                        </template>

                    </div>
                </div>

            </div>
            <div class="panel-side">
                <div class="panel-side-header">
                    已选记录(4)
                </div>
                <div class="panel-side-body">
                    <div class="panel-setting-header">
                        <i class="mdi mdi-delete me-1"></i>
                        <i class="mdi mdi-arrow-u-left-top me-1"></i>
                    </div>
                    <div class="panel-side-content">
                        <div class="panel-side-inner">
                            <template v-if="tabName == 'ROLE'">
                                <div class="text-line" v-for="item in roleSelectedList">
                                    <p>{{ item.title }}</p>
                                    <i class="mdi mdi-delete"></i>
                                </div>
                            </template>
                            <template v-else-if="tabName == 'DEPT'">
                                <div class="text-line" v-for="item in deptSelectedList">
                                    <p>{{ item.title }}</p>
                                    <i class="mdi mdi-delete"></i>
                                </div>
                            </template>
                            <template v-else>
                                <div class="text-line" v-for="item in userSelectedList">
                                    <p>{{ item.title }}</p>
                                    <i class="mdi mdi-close"></i>
                                </div>
                            </template>
                        </div>

                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>
<script>
import { addOrUpdateMenuPermission, fetchMenuPermissions } from '@/api/menu'
import { fetchRoleTreeModel } from '@/api/role'
import { fetchDeptTreeModel } from '@/api/dept'
import { fetchUserTreeModel } from '@/api/user'
import TreeSelect from '@/components/TreeSelect'
import TreeList from '@/components/TreeList'

export default {
    props: {
        menuId: Number,
    },
    components: {
        TreeSelect,
        TreeList
    },
    watch: {
        menuId(newVal, old) {
            this.loadMenuPermission()
        }
    },
    data() {
        return {
            tabName: 'ROLE',
            roleTreeModelData: [],
            deptTreeModelData: [],
            userTreeModelData: [],
            roleSelectedList: [],
            deptSelectedList: [],
            userSelectedList: [],
            roleSelectedNode: [],
            deptSelectedNode: [],
            userSelectedNode: []
        }
    },
    mounted() {
        this.loadRoleTreeModel()
        this.loadDeptTreeModel()
        this.loadUserTreeModel()
    },
    methods: {
        loadMenuPermission() {
            fetchMenuPermissions({
                menuId: this.menuId
            }).then(res => {
                var data = res.data.data;
                this.roleSelectedList = []
                this.deptSelectedList = []
                this.userSelectedList = []
                this.roleSelectedNode = []
                this.deptSelectedNode = []
                this.userSelectedNode = []
                if (data.ROLE) {
                    this.roleSelectedList = data.ROLE
                }
                if (data.DEPT) {
                    this.deptSelectedList = data.DEPT
                }
                if (data.USER) {
                    this.userSelectedList = data.USER
                }
                this.recursiveNode(this.roleTreeModelData, this.roleSelectedList, this.roleSelectedNode)
                this.recursiveNode(this.deptTreeModelData, this.deptSelectedList, this.deptSelectedNode)
                this.recursiveNode(this.userTreeModelData, this.userSelectedList, this.userSelectedNode)
            })
        },
        loadRoleTreeModel() {
            fetchRoleTreeModel().then(res => {
                this.roleTreeModelData = res.data.data
            });
        },
        loadDeptTreeModel() {
            fetchDeptTreeModel().then(res => {
                this.deptTreeModelData = res.data.data
            });
        },
        loadUserTreeModel() {
            fetchUserTreeModel().then(res => {
                this.userTreeModelData = res.data.data
            });
        },
        recursiveNode(tree, arr, nodeArr) {
            tree.forEach(node => {
                if (arr.indexOf(node.value) != -1) {
                    node.checked = true
                    nodeArr.push({
                        title: node.title,
                        value: node.value
                    })
                } else {
                    node.checked = false
                }
                if (node.children && node.children.length > 0) {
                    this.recursiveNode(node.children, arr, nodeArr);
                }
            });
        },
        search() {
            this.$emit("search")
        },
        save() {
            var menuPermissionMap = {
                ROLE: this.$refs.roleTreeList.selectedList.map(item => item.value),
                DEPT: this.$refs.deptTreeList.selectedList.map(item => item.value),
                USER: this.$refs.userTreeList.selectedList.map(item => item.value)
            }
            addOrUpdateMenuPermission({
                menuId: this.menuId,
                menuPermissionMap: menuPermissionMap
            }).then(res => {
                this.$emit("cancel")
                this.$Message.success('保存成功')
            })
        },
        handleTabs(name) {
            this.tabName = name
        },
        valueChanged(val) {
            if (this.tabName == 'ROLE') {
                this.roleSelectedList = val
            } else if (this.tabName == 'DEPT') {
                this.deptSelectedList = val
            } else {
                this.userSelectedList = val
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.ivu-form {
    padding: 0px 40px;
}

.assign-tabs {

    .info-body {
        display: flex;
        min-height: 400px;
        margin-top: 16px;

        .panel-side {
            position: relative;
            width: 50%;
            margin: 0px 10px;
            border: 1px solid var(--ct-ivu-component-border-color);


            .panel-side-header {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -30px;
                height: 30px;
                min-width: 40px;
                padding: 10px;
                border: 1px solid var(--ct-ivu-component-border-color);
                border-bottom: none;
                border-top-left-radius: 10%;
                border-top-right-radius: 10%;
                color: var(--ct-link-color);
            }

            .panel-side-body {
                padding: 12px;

                .panel-setting-header {
                    display: flex;
                    justify-content: flex-end;
                    height: 30px;
                    border-bottom: 1px solid var(--ct-ivu-component-border-color);
                    color: #aaacb1;
                    font-size: 16px;

                    i {
                        cursor: pointer;
                    }
                }

                .panel-side-content {
                    margin: 8px 0px;
                    height: 320px;
                    overflow-y: scroll;

                    .panel-side-inner {
                        margin-top: 8px;

                        .text-line {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 8px;
                            cursor: pointer;

                            p {
                                margin-bottom: 0px;
                            }

                            i {
                                display: none;
                                margin-right: 12px;
                                font-size: 14px;
                                color: #aaacb1;
                            }

                            &:hover {
                                i {
                                    display: inline-block;
                                }
                            }
                        }

                    }


                }
            }
        }


    }

}
</style>