<template>
    <div class="table-container">
        <Table row-key="id" :columns="columns" :data="menus" @on-sort-change="sortTable">
            <template slot-scope="{ row }" slot="hidden">
                <Checkbox v-model="row.hidden" @on-change="edit(row)"></Checkbox>
            </template>

            <template slot-scope="{ row }" slot="alwaysShow">
                <Checkbox v-model="row.alwaysShow" @on-change="edit(row)"></Checkbox>
            </template>

            <template slot-scope="{ row, index }" slot="action">

                <!-- <a href="javascript:void(0);" class="action-icon" @click="openDetail(row)"> <i
                        class="mdi mdi-eye"></i></a> -->
                <a href="javascript:void(0);" class="action-icon" @click="openEdit(row)"> <i
                        class="mdi mdi-pencil"></i></a>
                <a href="javascript:void(0);" class="action-icon" @click="remove(row)"> <i
                        class="mdi mdi-delete"></i></a>
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
                            <a href="javascript:void(0);" class="dropdown-item" @click="openAssign(row)">
                                <i class="mdi mdi-exit-to-app me-1"></i>分配权限
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
                <strong class="me-auto">菜单详情</strong>
            </div>
            <menu-info :menuInfo="menuInfo"></menu-info>
            <div slot="footer">
                <Button type="text" @click="cancel">关闭</Button>
            </div>
        </Modal>

        <Modal v-model="assignModal" width="750" :styles="{ top: '50px' }">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">菜单权限分配</strong>
            </div>
            <menu-assign ref="menuAssign" @cancel="cancelAssign" :menuId="menuInfo.id"></menu-assign>
            <div slot="footer">
                <Button type="text" @click="cancelAssign">关闭</Button>
                <Button type="primary" @click="save">保存</Button>
            </div>
        </Modal>


    </div>
</template>
<script>
import { fetchPageMenus, getMenu, addOrUpdateMenu, deleteMenu } from "@/api/menu"
import MenuInfo from './MenuInfo.vue'
import MenuAssign from './MenuAssign.vue'

export default {
    components: {
        MenuInfo,
        MenuAssign
    },
    data() {
        return {
            menus: [],
            total: 0,
            single: '',
            spinShow: true,
            infoModal: false,
            assignModal: false,
            menuInfo: {},
            params: {
                title: '',
                pageNum: 1,
                pageSize: 10,
                orderBy: '',
                orderType: '',
            },
            columns: [
                {
                    title: '菜单名称',
                    key: 'meta',
                    tree: true,
                    width: 180,
                    render: (h, params) => {
                        return h('span', params.row.meta.title);
                    }
                },
                {
                    title: '图标',
                    key: 'meta',
                    width: 80,
                    render: (h, params) => {
                        return h('i', {
                            class: params.row.meta.icon
                        });
                    }
                },
                {
                    title: '组件路径',
                    key: 'component'
                },
                {
                    title: '路由地址',
                    key: 'path'
                },
                {
                    title: '重定向地址',
                    key: 'redirect',
                    width: 140
                },
                {
                    title: '排序',
                    key: 'orderNum',
                    align: 'center',
                    sortable: 'sortable',
                    width: 100
                },
                {
                    title: '隐藏',
                    slot: 'hidden',
                    align: 'center',
                    width: 70
                },
                {
                    title: '公开',
                    slot: 'alwaysShow',
                    align: 'center',
                    width: 70
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 140,
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
                this.params.title = params.title
            }
            this.spinShow = true
            fetchPageMenus(this.params).then(res => {
                this.menus = res.data.data.list
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
            getMenu({
                id: row.id
            })
                .then(res => {
                    this.menuInfo = res.data.data
                    this.infoModal = true
                })
        },
        openEdit(row) {
            getMenu({
                id: row.id
            })
                .then(res => {
                    this.$emit('openEdit', res.data.data)
                })
        },
        openAssign(row) {
            getMenu({
                id: row.id
            })
                .then(res => {
                    this.menuInfo = res.data.data
                    this.assignModal = true
                })
        },
        edit(row) {
            row = { ...row, ...row.meta }
            addOrUpdateMenu(row)
                .then(res => {
                    console.log(res);
                })
        },
        remove(row) {
            if (row.children.length > 0) {
                this.$Message.error('当前菜单下包含子菜单，无法删除')
                return;
            }
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除菜单？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    deleteMenu({
                        id: row.id
                    }).then(res => {
                        this.refreshTable()
                        this.$Message.success('删除成功')
                    })
                }
            });
        },
        save() {
            this.$refs.menuAssign.save()
        },
        cancel() {
            this.infoModal = false
        },
        cancelAssign() {
            this.assignModal = false
        }
    }
}
</script>
<style lang="scss" scoped>
.ivu-dropdown-menu {
    padding-left: 0px;

    .dropdown-item {
        padding: 5px 20px;
    }
}
</style>