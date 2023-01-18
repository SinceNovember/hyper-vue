<template>
    <div class="info-container">
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">上级部门：</span>
                <span class="info-content">{{ deptInfo.parentName }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">部门名称：</span>
                <span class="info-content">{{ deptInfo.deptName }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">部门简称：</span>
                <span class="info-content">{{ deptInfo.deptShortName }}</span>

            </div>
            <div class="info-col">
                <span class="info-title">排序：</span>
                <span class="info-content">{{ deptInfo.orderNum }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">描述：</span>
                <span class="info-content">{{ deptInfo.description }}</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        deptInfo: Object
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