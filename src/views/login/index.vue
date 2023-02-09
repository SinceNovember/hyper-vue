<template>
    <div class="auth-fluid">
        <!--Auth fluid left content -->
        <div class="auth-fluid-form-box">
            <div class="align-items-center d-flex h-100">
                <div class="card-body">

                    <!-- Logo -->
                    <div class="auth-brand text-center text-lg-start">
                        <a href="index.html" class="logo-dark">
                            <span><img src="@/assets/theme/img/logo-dark.png" alt="dark logo" height="22"></span>
                        </a>
                        <a href="index.html" class="logo-light">
                            <span><img src="@/assets/theme/img/logo.png" alt="logo" height="22"></span>
                        </a>
                    </div>

                    <!-- title-->
                    <h4 class="mt-0">Sign In</h4>
                    <p class="text-muted mb-4">Enter your email address and password to access account.</p>

                    <!-- form -->
                    <Form :model="loginForm">
                        <div class="mb-3">
                            <label for="emailaddress" class="form-label">Username</label>
                            <Input v-model="loginForm.username" placeholder="Enter something..." size="large"
                                style="width: 384px" />
                        </div>
                        <div class="mb-3">
                            <a href="pages-recoverpw-2.html" class="text-muted float-end"><small>Forgot your
                                    password?</small></a>
                            <label for="password" class="form-label">Password</label>
                            <Input v-model="loginForm.password" placeholder="Enter something..." type="password"
                                size="large" style="width: 384px" />
                            <!-- <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"> -->
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input type="checkbox" v-model="loginForm.rememberMe" class="form-check-input" id="checkbox-signin">
                                <label class="form-check-label" for="checkbox-signin">Remember me</label>
                            </div>
                        </div>
                        <div class="d-grid mb-0 text-center">
                            <a class="btn btn-primary" @click="handleLogin"><i class="mdi mdi-login"></i> Log In </a>
                        </div>
                        <!-- social-->
                        <div class="text-center mt-4">
                            <p class="text-muted font-16">Sign in with</p>
                            <ul class="social-list list-inline mt-3">
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);"
                                        class="social-list-item border-primary text-primary"><i
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
                                    <a href="javascript: void(0);"
                                        class="social-list-item border-secondary text-secondary"><i
                                            class="mdi mdi-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </Form>
                    <!-- end form-->

                    <!-- Footer-->
                    <footer class="footer footer-alt">
                        <p class="text-muted">Don't have an account? <a @click="handleLogin"
                                class="text-muted ms-1"><b>Sign Up</b></a></p>
                    </footer>

                </div> <!-- end .card-body -->
            </div> <!-- end .align-items-center.d-flex.h-100-->
        </div>
        <!-- end auth-fluid-form-box-->

        <!-- Auth fluid right content -->
        <div class="auth-fluid-right text-center">
            <div class="auth-user-testimonial">
                <h2 class="mb-3">I love the color!</h2>
                <p class="lead"><i class="mdi mdi-format-quote-open"></i> It's a elegent templete. I love it very much!
                    . <i class="mdi mdi-format-quote-close"></i>
                </p>
                <p>
                    - Hyper Admin User
                </p>
            </div> <!-- end auth-user-testimonial-->
        </div>
        <!-- end Auth fluid right content -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                rememberMe: false,
            },
            ruleValidate: {
                username: [
                    { required: true, message: '用户名不可为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                const query = route.query;
                if (query) {
                    this.redirect = query.redirect;
                    this.otherQuery = this.getOtherQuery(query);
                }
            },
            immediate: true
        }
    },
    methods: {
        handleLogin() {
            console.log(this.loginForm)
            if (!this.loginForm.username || !this.loginForm.password) {
                this.$Message.warning('账号或密码不能为空')
                return;
            }
            this.$store.dispatch("user/login", this.loginForm).then(() => {
                this.redirect = '/user'
                this.$router.push({
                    path: this.redirect || "/",
                    query: this.otherQuery
                });
            })
        },
        getOtherQuery(query) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== "redirect") {
                    acc[cur] = query[cur];
                }
                return acc;
            }, {});
        }
    }
}
</script>
<style lang="scss" scoped>

</style>