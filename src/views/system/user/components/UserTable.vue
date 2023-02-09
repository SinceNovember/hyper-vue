<template>
    <div class="table-container">

        <Table row-key="id" ref="table" :columns="columns" :data="users" @on-sort-change="sortTable">
            <template slot-scope="{ row }" slot="nickname">
                <div class="avatar-cell">
                    <Avatar :src="row.avatar" />
                    <span class="cell-span">{{ row.nickname }}</span>
                </div>
            </template>

            <template slot-scope="{ row }" slot="sex">
                {{ row.sex | SexFilter }}
            </template>
            <template slot-scope="{ row }" slot="status">
                <Badge :status="row.status == 'VALID' ? 'success' : 'error'" />{{ row.status | StatusTypeFilter }}
            </template>

            <template slot-scope="{ row, index }" slot="action">
                <a href="javascript:void(0);" class="action-icon" @click="openDetail(row)"> <i
                        class="mdi mdi-eye"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="openEdit(row)"> <i
                        class="mdi mdi-pencil"></i></a>
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

        <Drawer :closable="false" v-model="infoModal" width="400">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">用户信息</strong>
            </div>
            <user-info :dataInfo="dataInfo"></user-info>
        </Drawer>
    </div>
</template>
<script>
import { fetchPageUsers, getUser, deleteUser } from "@/api/user"
import UserInfo from './UserInfo.vue'
export default {
    components: {
        UserInfo
    },
    data() {
        return {
            users: [],
            total: 0,
            single: '',
            spinShow: true,
            infoModal: false,
            dataInfo: {},
            sex: 'FEMALE',
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
                    title: '昵称',
                    slot: 'nickname',
                    width: 140,
                },
                {
                    title: '用户名',
                    key: 'username',
                },
                {
                    title: '性别',
                    slot: 'sex',
                },
                {
                    title: '部门',
                    key: 'deptName',
                },
                {
                    title: '手机号',
                    key: 'mobile',
                    width: 140,
                },
                {
                    title: '邮箱',
                    key: 'email',
                    width: 180,
                },
                {
                    title: '创建日期',
                    key: 'createTime',
                    sortable: 'sortable',
                    width: 120,
                },
                {
                    title: '状态',
                    slot: 'status',
                    align: 'center',

                },

                {
                    title: '操作',
                    slot: 'action',
                    align: 'center',
                    width: 120,
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
            fetchPageUsers(this.params).then(res => {
                this.users = res.data.list
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
            getUser({
                id: row.id
            }).then(res => {
                this.dataInfo = res.data
                this.infoModal = true
            })
        },
        openEdit(row) {
            getUser({
                id: row.id
            }).then(res => {
                this.$emit('openEdit', res.data)
            })
        },
        deleteOne(row) {
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除用户？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteUser({
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
                    content: '<p>确认删除选中的用户？</p>',
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => {
                        var ids = rows.map(item => item.id)
                        console.log(ids)
                        deleteUser({
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