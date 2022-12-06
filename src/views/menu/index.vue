<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <Row span="24">
                <Col span="4">
                <Input v-model="params.menuTitle" placeholder="菜单名称..." suffix="ios-search" @on-enter="loadPageMenus" />
                </Col>
                <Col span="12" offset="8">
                <Row justify="end">

                    <Space>
                        <Button size="large" type="primary" custom-icon="mdi mdi-view-grid-plus"
                            @click="modal = true">添加菜单</Button>
                        <Button size="large" class="btn btn-light mb-2" custom-icon="mdi mdi-view-grid-plus">导出</Button>

                    </Space>
                </Row>
                </Col>
            </Row>
            <Table row-key="id" :columns="columns" :data="menus">
                <template slot-scope="{ row }" slot="hidden">
                    <Checkbox v-model="single"></Checkbox>
                </template>

                <template slot-scope="{ row }" slot="public">
                    <Checkbox v-model="single"></Checkbox>
                </template>

                <template slot-scope="{ row, index }" slot="action">

                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-pencil"></i></a>
                    <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
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
        </Card>
        </Col> <!-- end col -->
        <Modal v-model="modal" title="添加菜单" width="680px" @on-ok="ok" @on-cancel="cancel">
            <div class="toast-header" slot="header">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="brand-logo" height="16" class="me-1" />
                <strong class="me-auto">添加菜单</strong>
            </div>
            <menu-add></menu-add>
        </Modal>
    </Row>
    <!-- end row -->


</template>
<script>
import { fetchPageMenus } from "@/api/menu"
import MenuAdd from './components/MenuAdd.vue'
export default {
    components: {
        MenuAdd
    },
    data() {
        return {
            modal: false,
            menus: [],
            total: 0,
            single: '',
            spinShow: true,
            params: {
                menuTitle: "",
                pageNum: 1,
                pageSize: 10
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
                    width: 80
                },
                {
                    title: '隐藏',
                    slot: 'hidden',
                    align: 'center',
                    width: 70
                },
                {
                    title: '公开',
                    slot: 'public',
                    align: 'center',
                    width: 70
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 120,
                    align: 'center'
                }
            ],
            datas: [
                {
                    id: '100',
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    id: '101',
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    children: [
                        {
                            id: '10100',
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park'
                        },
                        {
                            id: '10101',
                            name: 'Joe Blackn',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park'
                        },
                        {
                            id: '10102',
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            children: [
                                {
                                    id: '1010200',
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'New York No. 1 Lake Park'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '102',
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    id: '103',
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                }
            ]
        }
    },
    mounted() {
        this.loadPageMenus()
    },
    methods: {
        changePageNum(pageNum) {
            this.params.pageNum = pageNum
            this.loadPageMenus()
        },
        changePageSize(pageSize) {
            this.params.pageSize = pageSize
            this.loadPageMenus()
        },
        loadPageMenus() {
            this.spinShow = true
            fetchPageMenus(this.params).then(res => {
                this.menus = res.data.data.list
                this.total = res.data.data.total
                this.spinShow = false

            })

        },
        ok() {
            this.$Message.info('Clicked ok');
        },
        cancel() {
            this.$Message.info('Clicked cancel');
        }
    }
}
</script>
<style lang="scss" scoped>


</style>