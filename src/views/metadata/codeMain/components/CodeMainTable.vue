<template>
    <div class="table-container">
        <Table row-key="id" ref="table" :columns="columns" :data="list" @on-sort-change="sortTable">
            <template slot-scope="{ row, index }" slot="action">
                <a href="javascript:void(0);" class="action-icon" @click="openDetail(row)"> <i
                        class="mdi mdi-eye"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="openEdit(row)"> <i
                        class="mdi mdi-pencil"></i></a>
                <Dropdown trigger="click" placement="bottom" :transfer="true">
                    <a href="javascript:void(0)" class="action-icon">
                        <i class="mdi mdi-dots-vertical font-18"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <div class="dropdown" data-popper-placement="bottom">
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item" @click="openDetail(row)">
                                <i class="mdi mdi-eye me-1"></i>详情
                            </a>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item" @click="openCodeItem(row)">
                                <i class="mdi mdi-exit-to-app me-1"></i>配置代码项
                            </a>
                        </div>

                    </DropdownMenu>
                </Dropdown>
            </template>
        </Table>
        <Spin fix v-show="spinShow">
            <div class="spinner-border text-primary" role="status"></div>
        </Spin>

        <Row justify="start">
            <Col span="24">
            <Page :total="total" show-total show-elevator show-sizer @on-change="changePageNum"
                @on-page-size-change="changePageSize" />
            </Col>
        </Row>

        <Modal v-model="infoModal" width="750">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">代码详情</strong>
            </div>
            <code-main-info :dataInfo="dataInfo"></code-main-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>

        <Modal v-model="itemModal" width="1200" :styles="{ top: '50px' }">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">配置代码项</strong>
            </div>
            <code-item ref="codeItem" @cancel="cancelItem" @searchItem="loadItemList" :codeId="dataInfo.id"
                :itemList="itemList" :itemSpinShow="itemSpinShow"></code-item>
            <div slot="footer">
                <Button type="text" @click="cancelItem">关闭</Button>
            </div>
        </Modal>
    </div>
</template>
<script>

import { fetchPageCodeMains, getCodeMain, deleteCodeMain } from "@/api/codeMain"
import { fetchPageCodeItems } from "@/api/codeItem"
import CodeMainInfo from './CodeMainInfo.vue'
import CodeItem from '../../codeItem/index.vue'

export default {
    components: {
        CodeMainInfo,
        CodeItem
    },
    data() {
        return {
            list: [],
            total: 0,
            spinShow: true,
            itemSpinShow: true,
            infoModal: false,
            itemModal: false,
            dataInfo: {},
            itemList: [],
            params: {
                codeName: '',
                pageNum: 1,
                pageSize: 10,
                orderBy: '',
                orderType: '',
            },
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '代码名称',
                    key: 'codeName',
                    width: 240,

                },
                {
                    title: '排序',
                    width: 100,
                    sortable: 'sortable',
                    key: 'orderNum',
                    align: 'center'
                },
                {
                    title: '描述',
                    key: 'description',
                },
                {
                    title: '创建时间',
                    key: 'createTime',
                    width: 180
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 120,
                    align: 'center'
                }
            ]
        }
    },
    mounted() {
        this.refreshTable()
    },
    methods: {
        refreshTable(params) {
            if (params) {
                this.params.codeName = params.codeName
            }
            this.spinShow = true
            fetchPageCodeMains(this.params)
                .then(res => {
                    this.list = res.data.list
                    this.total = res.data.total
                    this.spinShow = false
                }).catch(e => {
                    this.spinShow = false
                })
        },
        changePageNum(pageNum) {
            this.params.pageNum = pageNum
            this.refreshTable()
        },
        changePageSize(pageSize) {
            this.params.pageSize = pageSize
            this.refreshTable()
        },
        sortTable(params) {
            this.params.orderBy = params.key
            this.params.orderType = params.order
            this.refreshTable()
        },
        loadItemList(params) {
            this.itemList = []
            this.itemSpinShow = true
            console.log(params)
            fetchPageCodeItems(params).then(res => {
                this.itemList = res.data
                this.itemSpinShow = false
            })
        },
        // searchItem(params) {
        //     this.itemSpinShow = true
        //     fetchPageCodeItems(params)
        //         .then(res => {
        //             this.itemList = res.data
        //             this.itemSpinShow = false

        //         })
        // },
        openDetail(row) {
            getCodeMain({
                id: row.id
            }).then(res => {
                this.dataInfo = res.data
                this.infoModal = true
            })
        },
        openEdit(row) {
            getCodeMain({
                id: row.id
            }).then(res => {
                this.$emit('openEdit', res.data)
            })
        },
        openCodeItem(row) {
            this.itemModal = true
            this.dataInfo = row
            this.loadItemList({
                codeId: row.id
            })
        },
        deleteOne(row) {
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除该记录？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteCodeMain({
                        ids: [row.id]
                    }).then(res => {
                        this.refreshTable()
                        this.$Message.success('删除成功')
                    })
                }
            });
        },
        deleteSelect() {
            var rows = this.$refs.table.getSelection()
            if (rows.length <= 0) {
                this.$Message.warning('至少选中一条记录')
            } else {
                this.$Modal.confirm({
                    title: '删除确认',
                    content: '<p>确认删除选中的记录？</p>',
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => {
                        var ids = rows.map(item => item.id)
                        deleteCodeMain({
                            ids: ids
                        }).then(res => {
                            this.refreshTable()
                            this.$Message.success('删除成功')
                        })
                    }
                });

            }
        },
        cancel() {
            this.infoModal = false
        },
        cancelItem() {
            this.itemModal = false
        }
    }
}
</script>
<style lang="scss" scoped>
.ivu-avatar {
    height: 34px;
    width: 34px;
}

.avatar-cell {
    display: flex;
    align-items: center;

    .cell-span {
        margin-left: 10px;
    }
}

.ivu-dropdown-menu {
    padding-left: 0px;

    .dropdown-item {
        padding: 5px 20px;
    }
}
</style>