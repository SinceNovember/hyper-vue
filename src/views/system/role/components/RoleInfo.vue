<template>
    <div class="info-container">
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">角色名称：</span>
                <span class="info-content">{{ dataInfo.roleName }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">角色标志：</span>
                <span class="info-content">{{ dataInfo.roleTag }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">状态：</span>
                <Tag :color="dataInfo.status =='VALID' ? 'green' : 'red'">{{dataInfo.status | StatusTypeFilter}}</Tag>
            </div>
            <div class="info-col">
                <span class="info-title">排序：</span>
                <span class="info-content">{{ dataInfo.orderNum }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">描述：</span>
                <span class="info-content">{{ dataInfo.description }}</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        dataInfo: Object
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
        line-height: 24px;


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