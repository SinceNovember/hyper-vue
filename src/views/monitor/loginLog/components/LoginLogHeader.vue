<template>
    <Row span="24">
        <Col span="4">
        <Input v-model="params.nickname" placeholder="登录名..." suffix="ios-search" @on-enter="search" />
        </Col>
        <Col span="12" offset="8">
        <Row justify="end">
            <Button size="large" type="error" custom-icon="mdi mdi-close-thick" @click="deleteSelect">删除选中</Button>
        </Row>
        </Col>
    </Row>
</template>
<script>

export default {
    data() {
        return {
            params: {
                nickname: '',
            },
        }
    },
    methods: {
        search() {
            this.$emit('search', this.params)
        },
        deleteSelect() {
            this.$emit('deleteSelect')
        },
    }
}
</script>
