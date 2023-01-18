<template>
    <div class="info-container">
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">角色名称：</span>
                <span class="info-content">{{ roleInfo.roleName }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">角色标志：</span>
                <span class="info-content">{{ roleInfo.roleTag }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">状态：</span>
                <Tag :color="roleInfo.status =='VALID' ? 'green' : 'red'">{{roleInfo.status | StatusTypeFilter}}</Tag>
            </div>
            <div class="info-col">
                <span class="info-title">排序：</span>
                <span class="info-content">{{ roleInfo.orderNum }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">描述：</span>
                <span class="info-content">{{ roleInfo.description }}</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        roleInfo: Object
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