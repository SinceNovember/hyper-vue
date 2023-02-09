<template>
    <div class="table-container">
        <Table row-key="id" ref="table" :columns="columns" :data="depts" @on-sort-change="sortTable">
            <template slot-scope="{ row }" slot="deptShortName">
                <a href="javascript:void(0);" @click="openUserDetail(row)">
                    <avatar-list :list="row.users"></avatar-list>
                </a>
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
            <div class="spinner-border text-primary" dept="status"></div>
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
            <dept-info :dataInfo="dataInfo"></dept-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>

        <Drawer :closable="false" v-model="infoDrawer" width="300">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">部门人员</strong>
            </div>
            <dept-user-list :users="users"></dept-user-list>
        </Drawer>
    </div>
</template>
<script>
import DeptInfo from './DeptInfo.vue'
import DeptUserList from './DeptUserList.vue'
import AvatarList from '@/components/AvatarList'

import { fetchPageDepts, getDept, deleteDept } from "@/api/dept"

export default {
    components: {
        DeptInfo,
        DeptUserList,
        AvatarList,
    },
    data() {
        return {
            value: false,
            depts: [],
            users: [],
            total: 0,
            spinShow: true,
            infoModal: false,
            infoDrawer: false,
            dataInfo: {},
            params: {
                deptName: '',
                pageNum: 1,
                pageSize: 10,
                orderBy: '',
                orderType: '',
            },
            columns: [
                {
                    title: '部门名称',
                    key: 'deptName',
                    tree: true,
                    width: 380,
                },
                {
                    title: '部门简称',
                    key: 'deptShortName'
                },
                {
                    title: '部门人员',
                    slot: 'deptShortName'
                },
                {
                    title: '排序',
                    key: 'orderNum',
                    align: 'center',
                    sortable: 'sortable',
                    width: 100
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
            ],
        }
    },
    mounted() {
        this.refreshTable()
    },
    methods: {
        refreshTable(params) {
            if (params) {
                this.params.deptName = params.deptName
            }
            this.spinShow = true
            fetchPageDepts(this.params).then(res => {
                this.depts = res.data.list
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
            getDept({
                id: row.id
            }).then(res => {
                this.dataInfo = res.data
                this.infoModal = true
            })
        },
        openUserDetail(row) {
            this.users = row.users
            this.infoDrawer = true
        },
        openEdit(row) {
            getDept({
                id: row.id
            }).then(res => {
                this.$emit('openEdit', res.data)
            })
        },
        deleteOne(row) {
            if (row.children.length > 0) {
                this.$Message.error('当前部门下包含子部门，无法删除')
                return;
            }
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除部门？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteDept({
                        ids: [row.id]
                    }).then(res => {
                        this.refreshTable()
                        this.$Message.success('删除成功')
                    })
                }
            });
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