<template>
    <div class="table-container">
        <Table row-key="id" ref="table" :columns="columns" :data="list" @on-sort-change="sortTable">
            <template slot-scope="{ row, index }" slot="action">
                <a href="javascript:void(0);" class="action-icon" @click="openDetail(row)"> <i
                        class="mdi mdi-eye"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="deleteOne(row)"> <i
                        class="mdi mdi-delete"></i></a>
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
                <strong class="me-auto">登录日志详情</strong>
            </div>
            <login-log-info :dataInfo="dataInfo"></login-log-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>
    </div>
</template>
<script>

import { fetchPageLoginLogs, getLoginLog, deleteLoginLog } from "@/api/monitor/loginLog"
import LoginLogInfo from './LoginLogInfo.vue'
export default {
    components: {
        LoginLogInfo
    },
    data() {
        return {
            list: [],
            total: 0,
            spinShow: true,
            infoModal: false,
            dataInfo: {},
            params: {
                nickname: '',
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
                    title: '登录名',
                    key: 'nickname',
                    width: 240,

                },
                {
                    title: '登录地',
                    key: 'location',
                    width: 240,

                },
                {
                    title: 'IP',
                    width: 100,
                    key: 'ip',
                },
                {
                    title: '系统',
                    key: 'system',
                },
                {
                    title: '浏览器',
                    key: 'browser',
                },
                {
                    title: '登录时间',
                    key: 'loginTime',
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
                this.params.nickname = params.nickname
            }
            this.spinShow = true
            fetchPageLoginLogs(this.params).then(res => {
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
        openDetail(row) {
            getLoginLog({
                id: row.id
            }).then(res => {
                this.dataInfo = res.data
                this.infoModal = true
            })
        },
        openEdit(row) {
            getLoginLog({
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
                    deleteLoginLog({
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
                        deleteLoginLog({
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