<template>
    <div class="info-body">
        <div class="panel-side">
            <div class="panel-side-header">
                授权角色
            </div>
            <div class="panel-side-body">
                <Input v-model="filterText" placeholder="Enter something..." />
                <div class="panel-side-content">
                    <Tree :data="treeData" @on-check-change="valueChanged" ref="tree" show-checkbox></Tree>
                </div>
            </div>
        </div>

        <div class="panel-side">
            <div class="panel-side-header">
                已选记录({{ selectedList.length }})
            </div>
            <div class="panel-side-body">
                <div class="panel-setting-header">
                    <i class="mdi mdi-delete me-1" @click="deleteAll"></i>
                    <i class="mdi mdi-arrow-u-left-top me-1" @click="reset"></i>
                </div>
                <div class="panel-side-content">
                    <div class="panel-side-inner">
                        <div class="text-line" v-for="item in selectedList">
                            <p>{{ item.title }}</p>
                            <i class="mdi mdi-delete"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TreeList",
    props: {
        // Tree 的数据
        data: {
            type: Array,
            default: () => []
        },
        selectedNode: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            filterText: '',
            selectedList: this.selectedNode,
            treeData: JSON.parse(JSON.stringify(this.data)),
        }
    },
    watch: {
        selectedNode(newVal, old) {
            this.selectedList = newVal
            if (!this.filterText) {
                this.treeData = JSON.parse(JSON.stringify(this.data))
            }
        },
        filterText(val) {
            var tempData = JSON.parse(JSON.stringify(this.data))
            if (!val) {
                this.treeData = tempData
                this.recursiveNode(this.treeData, this.selectedList.map(item => item.value))
            } else {
                this.treeData = []
                this.recursiveFilterNode(tempData, this.treeData, val, this.selectedList.map(item => item.value))
            }
        },
    },
    methods: {
        valueChanged(val) {
            if (this.filterText) {
                var _selectedList = JSON.parse(JSON.stringify(this.selectedList))
                //将筛选的选中的先添加到列表中后去重
                _selectedList.push.apply(_selectedList, val)
                let map = new Map();
                for (let item of _selectedList) {
                    if (!map.has(item.value)) {
                        map.set(item.value, item);
                    };
                };
                _selectedList = [...map.values()];

                //获取筛选列表与已选节点的差集（勾选取消的节点）
                var intersection = this.treeData
                    .filter(item => !new Set(val.map(item => item.value)).has(item.value))
                    .map(item => item.value)
                //去掉勾选取消的节点
                this.selectedList = _selectedList.filter(item => intersection.indexOf(item.value) <= -1)
            } else {
                this.selectedList = val
            }
        },
        deleteAll() {
            this.treeData.forEach(item => {
                item.checked = false
            })
            this.selectedList = []
        },
        reset() {
            this.treeData = JSON.parse(JSON.stringify(this.data))
            this.selectedList = this.selectedNode
        },
        recursiveFilterNode(tempData, treeData, val, arr) {
            tempData.forEach(node => {
                if (node.title.indexOf(val) != -1) {
                    treeData.push({
                        title: node.title,
                        value: node.value,
                        checked: node.checked = arr.indexOf(node.value) != -1
                    })
                }
                if (node.children && node.children.length > 0) {
                    this.recursiveFilterNode(node.children, treeData, val, arr)
                }
            })
        },
        recursiveNode(tempData, arr) {
            tempData.forEach(node => {
                if (arr.indexOf(node.value) != -1) {
                    node.checked = true
                } else {
                    node.checked = false
                }
                if (node.children && node.children.length > 0) {
                    this.recursiveNode(node.children, arr)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>