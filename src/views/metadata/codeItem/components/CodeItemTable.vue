<template>
    <div class="table-container">
        <Table row-key="id" ref="table" :columns="columns" :data="itemList.list" @on-sort-change="sortTable">
            <template slot-scope="{ row, index }" slot="action">
                <a href="javascript:void(0);" class="action-icon" @click="openDetail(row)"> <i
                        class="mdi mdi-eye"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="openEdit(row)"> <i
                        class="mdi mdi-pencil"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="deleteOne(row)"> <i
                        class="mdi mdi-delete"></i></a>
            </template>

        </Table>
        <Spin fix v-show="itemSpinShow">
            <div class="spinner-border text-primary" role="status"></div>
        </Spin>

        <Row justify="start">
            <Col span="24">
            <Page :total="itemList.total" show-total show-elevator show-sizer @on-change="changePageNum"
                @on-page-size-change="changePageSize" />
            </Col>
        </Row>

        <Modal v-model="infoModal" width="750">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">代码项详情</strong>
            </div>
            <code-item-info :dataInfo="dataInfo"></code-item-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>
    </div>
</template>
<script>

import { fetchPageCodeItems, getCodeItem, deleteCodeItem } from "@/api/codeItem"
import CodeItemInfo from './CodeItemInfo.vue'
export default {
    components: {
        CodeItemInfo
    },
    props: {
        codeId: Number,
        itemList: Object,
        itemSpinShow: Boolean,
    },
    data() {
        return {
            list: [],
            total: 0,
            spinShow: false,
            infoModal: false,
            dataInfo: {},
            params: {
                codeId: this.codeId,
                itemText: '',
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
                    title: '代码项名',
                    key: 'itemText',
                    width: 240,

                },
                {
                    title: '代码项值',
                    key: 'itemValue',
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
    methods: {
        refreshTable(params) {
            this.$emit('search', params)
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
        openDetail(row) {
            getCodeItem({
                id: row.id
            }).then(res => {
                this.dataInfo = res.data
                this.infoModal = true
            })
        },
        openEdit(row) {
            getCodeItem({
                id: row.id
            }).then(res => {
                this.$emit('openEdit', res.data)
            })
        },
        deleteOne(row) {
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除该记录？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteCodeItem({
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
                        deleteCodeItem({
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
</style>