<template>
    <div class="info-container">
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">上级菜单：</span>
                <span class="info-content">{{ menuInfo.parentTitle }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">{{ menuInfo.type != 'BUTTON' ? '菜单名称：' : '按钮名称：' }} </span>
                <span class="info-content">{{ menuInfo.title }}</span>
            </div>
        </div>
        <div class="info-row" v-if="menuInfo.type != 'BUTTON'">
            <div class="info-col">
                <span class="info-title">菜单图标：</span>
                <span class="info-content"><i :class="menuInfo.icon"></i>{{ menuInfo.icon }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">标志：</span>
                <span class="info-content">{{ menuInfo.name }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">{{ menuInfo.type != 'BUTTON' ? '路由地址：' : 'API地址：' }}</span>
                <span class="info-content">{{ menuInfo.path }}</span>
            </div>
            <div class="info-col" v-if="menuInfo.type != 'BUTTON'">
                <span class="info-title">组件地址：</span>
                <span class="info-content">{{ menuInfo.component }}</span>
            </div>
            <div class="info-col" v-if="menuInfo.type == 'BUTTON'">
                <span class="info-title">API类型：</span>
                <span class="info-content">{{ menuInfo.requestMethod }}</span>
            </div>
        </div>
        <div class="info-row">

            <div class="info-col" v-if="menuInfo.type != 'BUTTON'">
                <span class="info-title">重定向：</span>
                <span class="info-content">{{ menuInfo.redirect }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">排序：</span>
                <span class="info-content">{{ menuInfo.orderNum }}</span>
            </div>
        </div>
        <div class="info-row" v-if="menuInfo.type != 'BUTTON'">

            <div class="info-col">
                <span class="info-title">是否隐藏：</span>
                <span class="info-content">{{ menuInfo.hidden | StatusFilter }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">是否公开：</span>
                <span class="info-content">{{ menuInfo.alwaysShow | StatusFilter }}</span>
            </div>
        </div>
        <div class="info-row" v-if="menuInfo.type != 'BUTTON'">
            <div class="info-col">
                <span class="info-title">面包屑：</span>
                <span class="info-content">{{ menuInfo.breadCrumb | StatusFilter }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        menuInfo: Object
    }
}
</script>

<style lang="scss" scoped>
.info-container {
    min-height: 400px;
    padding: 4px 12px;

    .info-row {
        display: flex;
        flex-wrap: wrap;
        padding: 16px 0px;


        .info-col {
            display: flex;
            width: 50%;

            .info-title {
                display: flex;
                justify-content: flex-end;
                width: 40%;
            }

            .info-content {
                padding-left: 4px;

                i {
                    margin-right: 4px;
                }
            }
        }
    }

}
</style>