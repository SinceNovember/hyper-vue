<template>
    <div class="info-container">
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">登录名：</span>
                <span class="info-content">{{ dataInfo.nickname }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">登录地：</span>
                <span class="info-content">{{ dataInfo.location }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">IP：</span>
                <span class="info-content">{{ dataInfo.ip }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">系统：</span>
                <span class="info-content">{{ dataInfo.system }}</span>
            </div>
        </div>
        <div class="info-row">
            <div class="info-col">
                <span class="info-title">浏览器：</span>
                <span class="info-content">{{ dataInfo.browser }}</span>
            </div>
            <div class="info-col">
                <span class="info-title">登录时间：</span>
                <span class="info-content">{{ dataInfo.loginTime }}</span>
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