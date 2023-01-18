<template>
    <div class="user-info-wrapper">
        <div class="summary-start">
            <img :src="userInfo.avatar"
                class="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
            <h4 class="mb-1 mt-2">{{userInfo.nickname}}</h4>
            <p class="text-muted font-10">大数据部门</p>
        </div>
        <div class="text-start mt-3">
            <h4 class="font-13 text-uppercase">简介 :</h4>
            <p class="text-muted font-13 mb-3">
                Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type.
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>用户名 :</strong>
                <span class="ms-2">{{userInfo.username}}</span>
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>手机号 :</strong>
                <span class="ms-2">{{userInfo.mobile}}</span>
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>邮箱 :</strong>
                <span class="ms-2">{{userInfo.email}}</span>
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>性别 :</strong>
                <span class="ms-2">{{userInfo.sex | SexFilter}}</span>
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>状态 :</strong>
                <span class="ms-2">
                    <Tag :color="userInfo.status =='VALID' ? 'green' : 'red'">{{userInfo.status | StatusTypeFilter}}</Tag>
                </span>
            </p>
            <p class="text-muted mb-3 font-13">
                <strong>部门 :</strong>
                <span class="ms-2">
                    <Tag color="default"><span class="text-muted">{{userInfo.deptName}}</span></Tag>
                </span>
            </p>
        </div>
        <ul class="social-list list-inline mt-3 mb-0">
            <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i
                        class="mdi mdi-facebook"></i></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i
                        class="mdi mdi-google"></i></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-info text-info"><i
                        class="mdi mdi-twitter"></i></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i
                        class="mdi mdi-github"></i></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        userInfo: Object,
    },
}
</script>

<style lang="scss" scoped>
.user-info-wrapper {
    padding-left: 10px;

    .summary-start {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .social-list {
        display: flex;
        align-items: center;
        justify-content: center;

        .social-list-item {
            display: flex;
            justify-content: center;
        }
    }

}
</style>