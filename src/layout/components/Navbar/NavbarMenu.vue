<template>
  <ul class="list-unstyled topbar-menu float-end mb-0">
    <li class="dropdown notification-list d-lg-none">
      <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
        aria-expanded="false">
        <i class="ri-search-line noti-icon"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
        <form class="p-3">
          <input type="search" class="form-control" placeholder="Search ..." aria-label="Recipient&#39;s username">
        </form>
      </div>
    </li>

    <li class="dropdown notification-list topbar-dropdown">
      <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
        aria-expanded="false">
        <img src="@/assets/theme/img/us.jpg" alt="user-image" class="me-0 me-sm-1" height="12">
        <span class="align-middle d-none d-lg-inline-block">English</span> <i
          class="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <img src="@/assets/theme/img/germany.jpg" alt="user-image" class="me-1" height="12"> <span
            class="align-middle">German</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <img src="@/assets/theme/img/italy.jpg" alt="user-image" class="me-1" height="12"> <span
            class="align-middle">Italian</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <img src="@/assets/theme/img/spain.jpg" alt="user-image" class="me-1" height="12"> <span
            class="align-middle">Spanish</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <img src="@/assets/theme/img/russia.jpg" alt="user-image" class="me-1" height="12"> <span
            class="align-middle">Russian</span>
        </a>

      </div>
    </li>

    <li class="dropdown notification-list">
      <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
        aria-expanded="false">
        <i class="ri-notification-3-line noti-icon"></i>
        <span class="noti-icon-badge"></span>
      </a>
      <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
        <div class="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="m-0 font-16 fw-semibold"> Notification</h6>
            </div>
            <div class="col-auto">
              <a href="javascript: void(0);" class="text-dark text-decoration-underline">
                <small>Clear All</small>
              </a>
            </div>
          </div>
        </div>

        <div class="px-3" style="max-height: 300px;" data-simplebar="init">
          <div class="simplebar-wrapper" style="margin: 0px -24px;">
            <div class="simplebar-height-auto-observer-wrapper">
              <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
              <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                  style="height: auto; overflow: hidden;">
                  <div class="simplebar-content" style="padding: 0px 24px;">

                    <h5 class="text-muted font-13 fw-normal mt-2">Today</h5>
                    <!-- item-->

                    <a href="javascript:void(0);"
                      class="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                      <div class="card-body">
                        <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="notify-icon bg-primary">
                              <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                          </div>
                          <div class="flex-grow-1 text-truncate ms-2">
                            <h5 class="noti-item-title fw-semibold font-14">Datacorp <small
                                class="fw-normal text-muted ms-1">1 min ago</small></h5>
                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on
                              Admin</small>
                          </div>
                        </div>
                      </div>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                      <div class="card-body">
                        <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="notify-icon bg-info">
                              <i class="mdi mdi-account-plus"></i>
                            </div>
                          </div>
                          <div class="flex-grow-1 text-truncate ms-2">
                            <h5 class="noti-item-title fw-semibold font-14">Admin <small
                                class="fw-normal text-muted ms-1">1 hours ago</small></h5>
                            <small class="noti-item-subtitle text-muted">New user registered</small>
                          </div>
                        </div>
                      </div>
                    </a>

                    <h5 class="text-muted font-13 fw-normal mt-0">Yesterday</h5>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                      <div class="card-body">
                        <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="notify-icon">
                              <img src="@/assets/theme/img/avatar-2.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                          </div>
                          <div class="flex-grow-1 text-truncate ms-2">
                            <h5 class="noti-item-title fw-semibold font-14">Cristina Pride <small
                                class="fw-normal text-muted ms-1">1 day ago</small></h5>
                            <small class="noti-item-subtitle text-muted">Hi, How are you? What about our next
                              meeting</small>
                          </div>
                        </div>
                      </div>
                    </a>

                    <h5 class="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                      <div class="card-body">
                        <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="notify-icon bg-primary">
                              <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                          </div>
                          <div class="flex-grow-1 text-truncate ms-2">
                            <h5 class="noti-item-title fw-semibold font-14">Datacorp</h5>
                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on
                              Admin</small>
                          </div>
                        </div>
                      </div>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                      <div class="card-body">
                        <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="notify-icon">
                              <img src="@/assets/theme/img/avatar-4.jpg" class="img-fluid rounded-circle" alt="">
                            </div>
                          </div>
                          <div class="flex-grow-1 text-truncate ms-2">
                            <h5 class="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                            <small class="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome
                              design</small>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div class="text-center">
                      <i class="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
          </div>
          <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
          </div>
          <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
          </div>
        </div>

        <!-- All-->
        <a href="javascript:void(0);"
          class="dropdown-item text-center text-primary notify-item border-top border-light py-2">
          View All
        </a>

      </div>
    </li>

    <li class="dropdown notification-list d-none d-sm-inline-block">
      <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
        aria-expanded="false">
        <i class="ri-apps-2-line noti-icon"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">

        <div class="p-2">
          <div class="row g-0">
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/slack.png" alt="slack">
                <span>Slack</span>
              </a>
            </div>
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/github.png" alt="Github">
                <span>GitHub</span>
              </a>
            </div>
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/dribbble.png" alt="dribbble">
                <span>Dribbble</span>
              </a>
            </div>
          </div>

          <div class="row g-0">
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/bitbucket.png" alt="bitbucket">
                <span>Bitbucket</span>
              </a>
            </div>
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/dropbox.png" alt="dropbox">
                <span>Dropbox</span>
              </a>
            </div>
            <div class="col">
              <a class="dropdown-icon-item" href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">
                <img src="@/assets/theme/img/g-suite.png" alt="G Suite">
                <span>G Suite</span>
              </a>
            </div>
          </div> <!-- end row-->
        </div>

      </div>
    </li>

    <li class="notification-list d-none d-sm-inline-block">
      <a class="nav-link" data-bs-toggle="offcanvas"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#theme-settings-offcanvas">
        <i class="ri-settings-3-line noti-icon"></i>
      </a>
    </li>

    <li class="notification-list d-none d-sm-inline-block">
      <a class="nav-link" href="javascript:void(0)" id="light-dark-mode" @click="toggleTheme">
        <i class="ri-moon-line noti-icon"></i>
      </a>
    </li>

    <li class="notification-list d-none d-md-inline-block">
      <a class="nav-link" href="#" data-toggle="fullscreen" @click="fullScreen">
        <i class="ri-fullscreen-line noti-icon"></i>
      </a>
    </li>

    <li class="dropdown notification-list">
      <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown"
        href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
        aria-expanded="false">
        <span class="account-user-avatar">
          <img :src="userInfo.avatar" alt="user-image" class="rounded-circle">
        </span>
        <span>
          <span class="account-user-name">{{ userInfo.nickname }}</span>
          <span class="account-position">{{ userInfo.deptName }}</span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
        <!-- item-->
        <div class=" dropdown-header noti-title">
          <h6 class="text-overflow m-0">Welcome !</h6>
        </div>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <i class="mdi mdi-account-circle me-1"></i>
          <span>My Account</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <i class="mdi mdi-account-edit me-1"></i>
          <span>Settings</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <i class="mdi mdi-lifebuoy me-1"></i>
          <span>Support</span>
        </a>

        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item notify-item">
          <i class="mdi mdi-lock-outline me-1"></i>
          <span>Lock Screen</span>
        </a>

        <!-- item-->
        <a @click="logout" class="dropdown-item notify-item">
          <i class="mdi mdi-logout me-1"></i>
          <span>Logout</span>
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
import { getUserCookie } from '@/utils/auth'

export default {
  data() {
    return {
      userInfo: JSON.parse(getUserCookie())
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("app/toggleTheme");
    },
    fullScreen() {
      if (screenfull.isEnabled && !screenfull.isFullscreen) {
        screenfull.request();
      }
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
}
</script>
<style>

</style>