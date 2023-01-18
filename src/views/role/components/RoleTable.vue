<template>
    <div class="table-container">
        <Table row-key="id" ref="table" :columns="columns" :data="roles" @on-sort-change="sortTable">
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

        <Modal v-model="infoModal" width="750">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">菜单详情</strong>
            </div>
            <role-info :roleInfo="roleInfo"></role-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import { fetchPageRoles, getRole, deleteRole } from "@/api/role"
import RoleInfo from './RoleInfo.vue'
export default {
    components: {
        RoleInfo
    },
    data() {
        return {
            value: false,
            roles: [],
            total: 0,
            single: '',
            spinShow: true,
            infoModal: false,
            roleInfo: {},
            params: {
                roleName: '',
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
                    title: '角色名称',
                    key: 'roleName',
                },
                {
                    title: '角色标志',
                    key: 'roleTag',
                    width: 140,
                },
                {
                    title: '排序',
                    width: 100,
                    sortable: 'sortable',
                    key: 'orderNum',
                    align: 'center'
                },
                {
                    title: '状态',
                    width: 140,
                    slot: 'status',
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
                this.params.roleName = params.roleName
            }
            this.spinShow = true
            fetchPageRoles(this.params).then(res => {
                this.roles = res.data.data.list
                this.total = res.data.data.total
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
            getRole({
                id: row.id
            }).then(res => {
                console.log(res)
                this.roleInfo = res.data.data
                this.infoModal = true
            })
        },
        openEdit(row) {
            getRole({
                id: row.id
            }).then(res => {
                this.$emit('openEdit', res.data.data)
            })
        },
        deleteOne(row) {
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除用户？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteRole({
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
                        deleteRole({
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