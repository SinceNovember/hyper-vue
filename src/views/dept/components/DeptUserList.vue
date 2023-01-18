<template>
    <div class="simplebar-content" style="padding: 0px 24px;">
        <div  v-for="(item, index) in users" :key="index" class="d-flex align-items-start">
            <img class="me-3 rounded-circle" :src="item.avatar"
                width="40" height="40" alt="Generic placeholder image">
            <div class="w-100 overflow-hidden">
                <h5 class="mt-0 mb-1 fw-semibold"><a href="javascript:void(0);" class="text-secondary">{{item.nickname}}</a>
                </h5>
                <ul class="list-inline mb-0 font-13">
                    <li class="list-inline-item">Front end Developer</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        users: {
            type: Array,
            default() {
                return [];
            }
        },
    },
}
</script>


<style>
.d-flex {
    margin-bottom: 20px;
}

</style>
