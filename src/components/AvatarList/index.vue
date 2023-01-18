<template>
    <div class="multi-user">
        <Tooltip v-for="(item, index) in currentList" :key="index" :content="item.nickname" placement="top">
            <a href="javascript:void(0);" class="d-inline-block">
                <img :src="item.avatar" class="rounded-circle avatar-xs" alt="friend">
            </a>
        </Tooltip>
        <Tooltip placement="top" v-if="list.length > max" :content="list.length - max ">
            <div class="avatar-xs">
                <span class="avatar-title rounded-circle">
                    +{{ list.length - max }}
                </span>
            </div>
        </Tooltip>
    </div>  
</template>
<script>
export default {
    name: 'TreeSelect',
    props: {
        list: {
            type: Array,
            default() {
                return [];
            }
        },
        max: {
            type: Number,
            default() {
                return 8
            }
        },
    },
    computed: {
        currentList() {
            const len = this.list.length;
            const max = this.max;
            if (len <= max) {
                return [...this.list];
            } else {
                return [...this.list].slice(0, max);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.multi-user {
    .ivu-tooltip {
        margin-left: -12px;
    }
}
</style>