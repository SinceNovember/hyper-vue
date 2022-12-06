<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">
            <Form :model="formItem" :label-width="80">
                <FormItem label="上级菜单">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="菜单名称">
                    <Input v-model="formItem.input"></Input>
                </FormItem>
                <Row>
                    <Col span="16">
                    <FormItem label="菜单图标" prop="date">
                        <div class="icon-list">
                            <Select v-model="icon">
                                <template #prefix>
                                    <div class="prefix-icon-badget"><i :class="icon"></i></div>
                                </template>
                                <Option v-for="icon in materialIcons" :value="'mdi mdi-' + icon.name"
                                    :key="'mdi mdi-' + icon.name" :label="'mdi mdi-' + icon.name">
                                    <i class="mdi " :class="'mdi-' + icon.name"></i>
                                </Option>
                            </Select>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="标志" prop="time">
                        <Input v-model="formItem.input"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="路由地址">
                    <Input v-model="formItem.input"></Input>
                </FormItem>
                <FormItem label="组件地址">
                    <Input v-model="formItem.input"></Input>
                </FormItem>

                <Row>
                    <Col span="12">
                    <FormItem label="重定向" prop="date">
                        <Input v-model="formItem.input"></Input>
                    </FormItem>

                    </Col>
                    <Col span="12">
                    <FormItem label="排序" prop="time">
                        <InputNumber v-model="value" controls-outside width="100%" />
                    </FormItem>
                    </Col>
                </Row>
                <FormItem>
                    <Checkbox v-model="single">隐藏</Checkbox>
                    <Checkbox v-model="single">公开</Checkbox>
                    <Checkbox v-model="single">面包屑</Checkbox>
                </FormItem>
            </Form>
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
// import MaterialIcons from '@/components/MaterialIcons'
import materialIcons from '@/assets/theme/json/materialicons.json'

export default {

    data() {
        return {
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            },
            materialIcons,
            model: '',
            single: ''

        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.ivu-tabs-bar {
    margin-bottom: 24px;
}

.ivu-tabs {
    padding: 0px 40px;
}

.ivu-input-number {
    width: 100%;
}

.ivu-checkbox-wrapper {
    margin-right: 24px;
}

.prefix-icon-badget {
    width: 28px;
    height: 30px;
    line-height: 30px;
    background: var(--ct-ivu-select-prefix-icon-badget-bg);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 20px;
    }
}
</style>