<template>

  <body class="show" style="">
    <!-- Begin page -->
    <div class="wrapper">


      <!-- ========== Topbar Start ========== -->
      <div class="navbar-custom topnav-navbar">
        <div class="container-fluid detached-nav">

          <!-- Topbar Logo -->
          <div class="logo-topbar">
            <!-- Logo light -->
            <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-light">
              <span class="logo-lg">
                <img src="@/assets/theme/img/logo.png" alt="logo" height="22">
              </span>
              <span class="logo-sm">
                <img src="@/assets/theme/img/logo-sm.png" alt="small logo" height="22">
              </span>
            </a>

            <!-- Logo Dark -->
            <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-dark">
              <span class="logo-lg">
                <img src="@/assets/theme/img/logo-dark.png" alt="dark logo" height="22">
              </span>
              <span class="logo-sm">
                <img src="@/assets/theme/img/logo-dark-sm.png" alt="small logo" height="22">
              </span>
            </a>
          </div>

          <!-- Sidebar Menu Toggle Button -->
          <button class="button-toggle-menu" @click="changeTheme('1')">
            <i class="mdi mdi-menu"></i>
          </button>

          <!-- Horizontal Menu Toggle Button -->
          <button class="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <ul class="list-unstyled topbar-menu float-end mb-0">
            <li class="dropdown notification-list d-lg-none">
              <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown"
                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
                aria-expanded="false">
                <i class="ri-search-line noti-icon"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form class="p-3">
                  <input type="search" class="form-control" placeholder="Search ..."
                    aria-label="Recipient&#39;s username">
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
                        <div class="simplebar-content-wrapper" tabindex="0" role="region"
                          aria-label="scrollable content" style="height: auto; overflow: hidden;">
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
                            <a href="javascript:void(0);"
                              class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
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
                            <a href="javascript:void(0);"
                              class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div class="card-body">
                                <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                    <div class="notify-icon">
                                      <img src="@/assets/theme/img/avatar-2.jpg" class="img-fluid rounded-circle"
                                        alt="">
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
                            <a href="javascript:void(0);"
                              class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
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
                            <a href="javascript:void(0);"
                              class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div class="card-body">
                                <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                <div class="d-flex align-items-center">
                                  <div class="flex-shrink-0">
                                    <div class="notify-icon">
                                      <img src="@/assets/theme/img/avatar-4.jpg" class="img-fluid rounded-circle"
                                        alt="">
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
              <a class="nav-link" href="javascript:void(0)" id="light-dark-mode">
                <i class="ri-moon-line noti-icon"></i>
              </a>
            </li>

            <li class="notification-list d-none d-md-inline-block">
              <a class="nav-link" href="https://coderthemes.com/hyper_2/saas/ui-modals.html" data-toggle="fullscreen">
                <i class="ri-fullscreen-line noti-icon"></i>
              </a>
            </li>

            <li class="dropdown notification-list">
              <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown"
                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#" role="button" aria-haspopup="false"
                aria-expanded="false">
                <span class="account-user-avatar">
                  <img src="@/assets/theme/img/avatar-1.jpg" alt="user-image" class="rounded-circle">
                </span>
                <span>
                  <span class="account-user-name">Dominic Keller</span>
                  <span class="account-position">Founder</span>
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
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-logout me-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>

          <!-- Topbar Search Form -->
          <div class="app-search dropdown">
            <form>
              <div class="input-group">
                <input type="search" class="form-control dropdown-toggle" placeholder="Search..." id="top-search">
                <span class="mdi mdi-magnify search-icon"></span>
                <button class="input-group-text btn btn-primary" type="submit">Search</button>
              </div>
            </form>

            <div class="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h5 class="text-overflow mb-2">Found <span class="text-danger">17</span> results</h5>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-notes font-16 me-1"></i>
                <span>Analytics Report</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-life-ring font-16 me-1"></i>
                <span>How can I help you?</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-cog font-16 me-1"></i>
                <span>User profile settings</span>
              </a>

              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
              </div>

              <div class="notification-list">
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="d-flex">
                    <img class="d-flex me-2 rounded-circle" src="@/assets/theme/img/avatar-2.jpg"
                      alt="Generic placeholder image" height="32">
                    <div class="w-100">
                      <h5 class="m-0 font-14">Erwin Brown</h5>
                      <span class="font-12 mb-0">UI Designer</span>
                    </div>
                  </div>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="d-flex">
                    <img class="d-flex me-2 rounded-circle" src="@/assets/theme/img/avatar-5.jpg"
                      alt="Generic placeholder image" height="32">
                    <div class="w-100">
                      <h5 class="m-0 font-14">Jacob Deo</h5>
                      <span class="font-12 mb-0">Developer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ========== Topbar End ========== -->

      <!-- ========== Left Sidebar Start ========== -->
      <div class="leftside-menu menuitem-active">

        <!-- Logo Light -->
        <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo logo-light">
          <span class="logo-lg">
            <img src="@/assets/theme/img/logo.png" alt="logo" height="22">
          </span>
          <span class="logo-sm">
            <img src="@/assets/theme/img/logo-sm.png" alt="small logo" height="22">
          </span>
        </a>

        <!-- Logo Dark -->
        <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo logo-dark">
          <span class="logo-lg">
            <img src="@/assets/theme/img/logo-dark.png" alt="dark logo" height="22">
          </span>
          <span class="logo-sm">
            <img src="@/assets/theme/img/logo-dark-sm.png" alt="small logo" height="22">
          </span>
        </a>

        <!-- Sidebar Hover Menu Toggle Button -->
        <button type="button" class="btn button-sm-hover p-0" data-bs-toggle="tooltip" data-bs-placement="right"
          aria-label="Show Full Sidebar">
          <i class="ri-checkbox-blank-circle-line align-middle"></i>
        </button>

        <!-- Sidebar -left -->
        <div class="h-100 show" id="leftside-menu-container" data-simplebar="init">
          <div class="simplebar-wrapper" style="margin: 0px;">
            <div class="simplebar-height-auto-observer-wrapper">
              <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
              <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                  style="height: 100%; overflow: hidden scroll;">
                  <div class="simplebar-content" style="padding: 0px;">
                    <!-- Leftbar User -->
                    <div class="leftbar-user">
                      <a href="https://coderthemes.com/hyper_2/saas/pages-profile.html">
                        <img src="@/assets/theme/img/avatar-1.jpg" alt="user-image" height="42"
                          class="rounded-circle shadow-sm">
                        <span class="leftbar-user-name">Dominic Keller</span>
                      </a>
                    </div>

                    <!--- Sidemenu -->
                    <ul class="side-nav">

                      <li class="side-nav-title side-nav-item">Navigation</li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarDashboards"
                          aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                          <i class="ri-home-line"></i>
                          <span class="badge bg-success float-end">5</span>
                          <span> Dashboards </span>
                        </a>
                        <div class="collapse" id="sidebarDashboards">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/dashboard-analytics.html">Analytics</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/index.html">Ecommerce</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/dashboard-projects.html">Projects</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/dashboard-crm.html">CRM</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/dashboard-wallet.html">E-Wallet</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-title side-nav-item">Apps</li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/apps-calendar.html" class="side-nav-link">
                          <i class="ri-calendar-line"></i>
                          <span> Calendar </span>
                        </a>
                      </li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/apps-chat.html" class="side-nav-link">
                          <i class="ri-chat-4-line"></i>
                          <span> Chat </span>
                        </a>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarCrm" aria-expanded="false"
                          aria-controls="sidebarCrm" class="side-nav-link">
                          <i class="ri-dashboard-2-line"></i>
                          <span class="badge bg-danger text-white float-end">New</span>
                          <span> CRM </span>
                        </a>
                        <div class="collapse" id="sidebarCrm">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/crm-projects.html">Projects</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/crm-orders-list.html">Orders List</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/crm-clients.html">Clients</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/crm-management.html">Management</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarEcommerce"
                          aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                          <i class="uil-store"></i>
                          <span> Ecommerce </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarEcommerce">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-products.html">Products</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-products-details.html">Products
                                Details</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-orders.html">Orders</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-orders-details.html">Order
                                Details</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-customers.html">Customers</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-shopping-cart.html">Shopping
                                Cart</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-ecommerce-sellers.html">Sellers</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarEmail" aria-expanded="false"
                          aria-controls="sidebarEmail" class="side-nav-link">
                          <i class="ri-mail-line"></i>
                          <span> Email </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarEmail">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-email-inbox.html">Inbox</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-email-read.html">Read Email</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarProjects"
                          aria-expanded="false" aria-controls="sidebarProjects" class="side-nav-link">
                          <i class="ri-projector-line"></i>
                          <span> Projects </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarProjects">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-projects-list.html">List</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-projects-details.html">Details</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-projects-gantt.html">Gantt <span
                                  class="badge rounded-pill bg-light text-dark font-10 float-end">New</span></a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-projects-add.html">Create Project</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/apps-social-feed.html" class="side-nav-link">
                          <i class="uil-rss"></i>
                          <span> Social Feed </span>
                        </a>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarTasks" aria-expanded="false"
                          aria-controls="sidebarTasks" class="side-nav-link">
                          <i class="ri-task-line"></i>
                          <span> Tasks </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarTasks">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-tasks.html">List</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-tasks-details.html">Details</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/apps-kanban.html">Kanban Board</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/apps-file-manager.html" class="side-nav-link">
                          <i class="ri-folder-settings-line"></i>
                          <span> File Manager </span>
                        </a>
                      </li>

                      <li class="side-nav-title side-nav-item">Custom</li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarPages" aria-expanded="false"
                          aria-controls="sidebarPages" class="side-nav-link">
                          <i class="ri-pages-line"></i>
                          <span> Pages </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarPages">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-profile.html">Profile</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-profile-2.html">Profile 2</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-invoice.html">Invoice</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-pricing.html">Pricing</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-maintenance.html">Maintenance</a>
                            </li>
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarPagesAuth"
                                aria-expanded="false" aria-controls="sidebarPagesAuth">
                                <span> Authentication </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarPagesAuth">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-login.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-login-2.html">Login 2</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-register.html">Register</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-register-2.html">Register 2</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-logout.html">Logout</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-logout-2.html">Logout 2</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-recoverpw.html">Recover
                                      Password</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-recoverpw-2.html">Recover
                                      Password 2</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-lock-screen.html">Lock
                                      Screen</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-lock-screen-2.html">Lock Screen
                                      2</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-confirm-mail.html">Confirm
                                      Mail</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-confirm-mail-2.html">Confirm
                                      Mail 2</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarPagesError"
                                aria-expanded="false" aria-controls="sidebarPagesError">
                                <span> Error </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarPagesError">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-404.html">Error 404</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-404-alt.html">Error 404-alt</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/pages-500.html">Error 500</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-starter.html">Starter Page</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-preloader.html">With Preloader</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/pages-timeline.html">Timeline</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/landing.html" target="_blank"
                          class="side-nav-link">
                          <i class="uil-globe"></i>
                          <span class="badge bg-secondary text-light float-end">New</span>
                          <span> Landing </span>
                        </a>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarLayouts"
                          aria-expanded="false" aria-controls="sidebarLayouts" class="side-nav-link">
                          <i class="ri-layout-line"></i>
                          <span> Layouts </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarLayouts">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-horizontal.html"
                                target="_blank">Horizontal</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-detached.html"
                                target="_blank">Detached</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-full.html" target="_blank">Full
                                View</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-hover.html" target="_blank">Hover
                                Menu</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-compact.html"
                                target="_blank">Compact</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/layouts-icon-view.html" target="_blank">Icon
                                View</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-title side-nav-item mt-1">Components</li>

                      <li class="side-nav-item menuitem-active">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarBaseUI" aria-expanded="false"
                          aria-controls="sidebarBaseUI" class="side-nav-link">
                          <i class="ri-quill-pen-line"></i>
                          <span> Base UI </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse show" id="sidebarBaseUI">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-accordions.html">Accordions &amp;
                                Collapse</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-alerts.html">Alerts</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-avatars.html">Avatars</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-badges.html">Badges</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-breadcrumb.html">Breadcrumb</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-buttons.html">Buttons</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-cards.html">Cards</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-carousel.html">Carousel</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-dropdowns.html">Dropdowns</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-embed-video.html">Embed Video</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-grid.html">Grid</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-list-group.html">List Group</a>
                            </li>
                            <li class="menuitem-active">
                              <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html" class="active">Modals</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-notifications.html">Notifications</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-offcanvas.html">Offcanvas</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-placeholders.html">Placeholders</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-pagination.html">Pagination</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-popovers.html">Popovers</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-progress.html">Progress</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-ribbons.html">Ribbons</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-spinners.html">Spinners</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-tabs.html">Tabs</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-tooltips.html">Tooltips</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/ui-utilities.html">Utilities</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarExtendedUI"
                          aria-expanded="false" aria-controls="sidebarExtendedUI" class="side-nav-link">
                          <i class="uil-package"></i>
                          <span> Extended UI </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarExtendedUI">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-dragula.html">Dragula</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-range-slider.html">Range Slider</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-ratings.html">Ratings</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-scrollbar.html">Scrollbar</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-scrollspy.html">Scrollspy</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/extended-treeview.html">Treeview</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a href="https://coderthemes.com/hyper_2/saas/widgets.html" class="side-nav-link">
                          <i class="uil-layer-group"></i>
                          <span> Widgets </span>
                        </a>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarIcons" aria-expanded="false"
                          aria-controls="sidebarIcons" class="side-nav-link">
                          <i class="uil-streering"></i>
                          <span> Icons </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarIcons">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/icons-remixicons.html">Remix Icons</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/icons-mdi.html">Material Design</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/icons-unicons.html">Unicons</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarCharts" aria-expanded="false"
                          aria-controls="sidebarCharts" class="side-nav-link">
                          <i class="ri-bar-chart-line"></i>
                          <span> Charts </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarCharts">
                          <ul class="side-nav-second-level">
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarApexCharts"
                                aria-expanded="false" aria-controls="sidebarApexCharts">
                                <span> Apex Charts </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarApexCharts">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-area.html">Area</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-bar.html">Bar</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-bubble.html">Bubble</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://coderthemes.com/hyper_2/saas/charts-apex-candlestick.html">Candlestick</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-column.html">Column</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-heatmap.html">Heatmap</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-line.html">Line</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-mixed.html">Mixed</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://coderthemes.com/hyper_2/saas/charts-apex-timeline.html">Timeline</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-boxplot.html">Boxplot</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-treemap.html">Treemap</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-pie.html">Pie</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-radar.html">Radar</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://coderthemes.com/hyper_2/saas/charts-apex-radialbar.html">RadialBar</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-scatter.html">Scatter</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-apex-polar-area.html">Polar
                                      Area</a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://coderthemes.com/hyper_2/saas/charts-apex-sparklines.html">Sparklines</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarChartJSCharts"
                                aria-expanded="false" aria-controls="sidebarChartJSCharts">
                                <span> ChartJS </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarChartJSCharts">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-chartjs-area.html">Area</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-chartjs-bar.html">Bar</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-chartjs-line.html">Line</a>
                                  </li>
                                  <li>
                                    <a href="https://coderthemes.com/hyper_2/saas/charts-chartjs-other.html">Other</a>
                                  </li>

                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/charts-brite.html">Britecharts</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/charts-sparkline.html">Sparklines</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarForms" aria-expanded="false"
                          aria-controls="sidebarForms" class="side-nav-link">
                          <i class="ri-table-line"></i>
                          <span> Forms </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarForms">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-elements.html">Basic Elements</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-advanced.html">Form Advanced</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-validation.html">Validation</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-wizard.html">Wizard</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-fileuploads.html">File Uploads</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/form-editors.html">Editors</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarTables" aria-expanded="false"
                          aria-controls="sidebarTables" class="side-nav-link">
                          <i class="ri-table-line"></i>
                          <span> Tables </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarTables">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/tables-basic.html">Basic Tables</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/tables-datatable.html">Data Tables</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarMaps" aria-expanded="false"
                          aria-controls="sidebarMaps" class="side-nav-link">
                          <i class="ri-map-pin-line"></i>
                          <span> Maps </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarMaps">
                          <ul class="side-nav-second-level">
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/maps-google.html">Google Maps</a>
                            </li>
                            <li>
                              <a href="https://coderthemes.com/hyper_2/saas/maps-vector.html">Vector Maps</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="side-nav-item">
                        <a data-bs-toggle="collapse"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarMultiLevel"
                          aria-expanded="false" aria-controls="sidebarMultiLevel" class="side-nav-link">
                          <i class="ri-folder-add-line"></i>
                          <span> Multi Level </span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="collapse" id="sidebarMultiLevel">
                          <ul class="side-nav-second-level">
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarSecondLevel"
                                aria-expanded="false" aria-controls="sidebarSecondLevel">
                                <span> Second Level </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarSecondLevel">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="javascript: void(0);">Item 1</a>
                                  </li>
                                  <li>
                                    <a href="javascript: void(0);">Item 2</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="side-nav-item">
                              <a data-bs-toggle="collapse"
                                href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarThirdLevel"
                                aria-expanded="false" aria-controls="sidebarThirdLevel">
                                <span> Third Level </span>
                                <span class="menu-arrow"></span>
                              </a>
                              <div class="collapse" id="sidebarThirdLevel">
                                <ul class="side-nav-third-level">
                                  <li>
                                    <a href="javascript: void(0);">Item 1</a>
                                  </li>
                                  <li class="side-nav-item">
                                    <a data-bs-toggle="collapse"
                                      href="https://coderthemes.com/hyper_2/saas/ui-modals.html#sidebarFourthLevel"
                                      aria-expanded="false" aria-controls="sidebarFourthLevel">
                                      <span> Item 2 </span>
                                      <span class="menu-arrow"></span>
                                    </a>
                                    <div class="collapse" id="sidebarFourthLevel">
                                      <ul class="side-nav-forth-level">
                                        <li>
                                          <a href="javascript: void(0);">Item 2.1</a>
                                        </li>
                                        <li>
                                          <a href="javascript: void(0);">Item 2.2</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <!--- End Sidemenu -->

                    <!-- Help Box -->
                    <div class="help-box text-white text-center">
                      <a href="javascript: void(0);" class="float-end close-btn text-white">
                        <i class="mdi mdi-close"></i>
                      </a>
                      <img src="@/assets/theme/img/help-icon.svg" height="90" alt="Helper Icon Image">
                      <h5 class="mt-3">Unlimited Access</h5>
                      <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
                      <a href="javascript: void(0);" class="btn btn-secondary btn-sm">Upgrade</a>
                    </div>
                    <!-- end Help Box -->

                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="simplebar-placeholder" style="width: auto; height: 2590px;"></div>
          </div>
          <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
          </div>
          <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
            <div class="simplebar-scrollbar"
              style="height: 137px; transform: translate3d(0px, 244px, 0px); display: block;">
            </div>
          </div>
        </div>
      </div>
      <!-- ========== Left Sidebar End ========== -->

      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="content-page">
        <div class="content">

          <!-- Start Content-->
          <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box">
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                      <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                      <li class="breadcrumb-item active">Modals</li>
                    </ol>
                  </div>
                  <h4 class="page-title">Modals</h4>
                </div>
              </div>
            </div>
            <!-- end page title -->

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Bootstrap Modals</h4>

                    <p class="text-muted font-14">
                      A rendered modal with header, body, and set of actions in the footer.
                    </p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#bs-modals-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#bs-modals-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="bs-modals-preview" role="tabpanel">

                        <!-- Standard modal content -->
                        <div id="standard-modal" class="modal fade" tabindex="-1" aria-labelledby="standard-modalLabel"
                          aria-hidden="true" style="display: none;">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="standard-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h6>Text in a modal</h6>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <hr>
                                <h6>Overflowing text to show scroll behavior</h6>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                  auctor fringilla.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!--  Modal content for the Large example -->
                        <div class="modal fade" id="bs-example-modal-lg" tabindex="-1"
                          aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog"
                          aria-labelledby="mySmallModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Full width modal content -->
                        <div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fullWidthModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-full-width">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fullWidthModalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h6>Text in a modal</h6>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <hr>
                                <h6>Overflowing text to show scroll behavior</h6>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                  auctor fringilla.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Long Content Scroll Modal -->
                        <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog"
                          aria-labelledby="scrollableModalTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas
                                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue
                                  laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                  scelerisque nisl
                                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                  fringilla.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Standard  modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#standard-modal">Standard Modal</button>
                          <!-- Large modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#bs-example-modal-lg">Large Modal</button>
                          <!-- Small modal -->
                          <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#bs-example-modal-sm">Small Modal</button>
                          <!-- Full width modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#full-width-modal">Full Width Modal</button>
                          <!-- Scrollable modal -->
                          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#scrollable-modal">Scrollable Modal</button>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="bs-modals-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Standard modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#standard-modal"</span>&gt;</span>Standard Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"standard-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"standard-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"standard-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Large modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bs-example-modal-lg"</span>&gt;</span>Large Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bs-example-modal-lg"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"myLargeModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-lg"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myLargeModalLabel"</span>&gt;</span>Large modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Small modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bs-example-modal-sm"</span>&gt;</span>Small Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bs-example-modal-sm"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"mySmallModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"mySmallModalLabel"</span>&gt;</span>Small modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full width modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#full-width-modal"</span>&gt;</span>Full width Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"full-width-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fullWidthModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-full-width"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fullWidthModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Scrollable modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#scrollable-modal"</span>&gt;</span>Scrollable Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"scrollable-modal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"scrollableModalTitle"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-scrollable"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"document"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"scrollableModalTitle"</span>&gt;</span>Modal title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Modal with Pages</h4>
                    <p class="text-muted font-14">Examples of custom modals.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-pages-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-pages-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-pages-preview" role="tabpanel">
                        <!-- Signup modal content -->
                        <div id="signup-modal" class="modal fade" tabindex="-1" aria-hidden="true"
                          style="display: none;">
                          <div class="modal-dialog">
                            <div class="modal-content">



                              <div class="modal-body">
                                <div class="auth-brand text-center mt-2 mb-4 position-relative top-0">
                                  <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-dark">
                                    <span><img src="@/assets/theme/img/logo-dark.png" alt="dark logo"
                                        height="22"></span>
                                  </a>
                                  <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-light">
                                    <span><img src="@/assets/theme/img/logo.png" alt="logo" height="22"></span>
                                  </a>
                                </div>

                                <form class="ps-3 pe-3" action="https://coderthemes.com/hyper_2/saas/ui-modals.html#">

                                  <div class="mb-3">
                                    <label for="username" class="form-label">Name</label>
                                    <input class="form-control" type="email" id="username" required=""
                                      placeholder="Michael Zenaty">
                                  </div>

                                  <div class="mb-3">
                                    <label for="emailaddress" class="form-label">Email address</label>
                                    <input class="form-control" type="email" id="emailaddress" required=""
                                      placeholder="john@deo.com">
                                  </div>

                                  <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input class="form-control" type="password" required="" id="password"
                                      placeholder="Enter your password">
                                  </div>

                                  <div class="mb-3">
                                    <div class="form-check">
                                      <input type="checkbox" class="form-check-input" id="customCheck1">
                                      <label class="form-check-label" for="customCheck1">I accept <a
                                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">Terms and
                                          Conditions</a></label>
                                    </div>
                                  </div>

                                  <div class="mb-3 text-center">
                                    <button class="btn btn-primary" type="submit">Sign Up Free</button>
                                  </div>

                                </form>

                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->


                        <!-- SignIn modal content -->
                        <div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-body">
                                <div class="auth-brand text-center mt-2 mb-4 position-relative top-0">
                                  <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-dark">
                                    <span><img src="@/assets/theme/img/logo-dark.png" alt="dark logo"
                                        height="22"></span>
                                  </a>
                                  <a href="https://coderthemes.com/hyper_2/saas/index.html" class="logo-light">
                                    <span><img src="@/assets/theme/img/logo.png" alt="logo" height="22"></span>
                                  </a>
                                </div>

                                <form action="https://coderthemes.com/hyper_2/saas/ui-modals.html#" class="ps-3 pe-3">
                                  <div class="mb-3">
                                    <label for="emailaddress1" class="form-label">Email address</label>
                                    <input class="form-control" type="email" id="emailaddress1" required=""
                                      placeholder="john@deo.com">
                                  </div>

                                  <div class="mb-3">
                                    <label for="password1" class="form-label">Password</label>
                                    <input class="form-control" type="password" required="" id="password1"
                                      placeholder="Enter your password">
                                  </div>

                                  <div class="mb-3">
                                    <div class="form-check">
                                      <input type="checkbox" class="form-check-input" id="customCheck2">
                                      <label class="form-check-label" for="customCheck2">Remember me</label>
                                    </div>
                                  </div>

                                  <div class="mb-3 text-center">
                                    <button class="btn rounded-pill btn-primary" type="submit">Sign In</button>
                                  </div>
                                </form>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Sign Up modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#signup-modal">Sign Up Modal</button>
                          <!-- Log In modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#login-modal">Log In Modal</button>
                        </div>
                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-pages-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Signup modal--&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#signup-modal"</span>&gt;</span>Sign Up Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"signup-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center mt-2 mb-4"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"index.html"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-success"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"assets/images/logo-dark.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"18"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ps-3 pe-3"</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"#"</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Michael Zenaty"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"emailaddress"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Email address<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"emailaddress"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"john@deo.com"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter your password"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheck1"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheck1"</span>&gt;</span>I accept <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Terms and Conditions<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3 text-center"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Sign Up Free<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Login modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#login-modal"</span>&gt;</span>Log In Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"login-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center mt-2 mb-4"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"index.html"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-success"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"assets/images/logo-dark.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"18"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ps-3 pe-3"</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"emailaddress1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Email address<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"emailaddress1"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"john@deo.com"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password1"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter your password"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheck2"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheck2"</span>&gt;</span>Remember me<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3 text-center"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn rounded-pill btn-primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Sign In<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Modal based Alerts</h4>
                    <p class="text-muted font-14">Show different contexual alert messages using modal component</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-alerts-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-alerts-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-alerts-preview" role="tabpanel">
                        <!-- Success Alert Modal -->
                        <div id="success-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm">
                            <div class="modal-content modal-filled bg-success">
                              <div class="modal-body p-4">
                                <div class="text-center">
                                  <i class="ri-check-line h1"></i>
                                  <h4 class="mt-2">Well Done!</h4>
                                  <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam.</p>
                                  <button type="button" class="btn btn-light my-2"
                                    data-bs-dismiss="modal">Continue</button>
                                </div>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Info Alert Modal -->
                        <div id="info-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                              <div class="modal-body p-4">
                                <div class="text-center">
                                  <i class="ri-information-line h1 text-info"></i>
                                  <h4 class="mt-2">Heads up!</h4>
                                  <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam.</p>
                                  <button type="button" class="btn btn-info my-2"
                                    data-bs-dismiss="modal">Continue</button>
                                </div>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Warning Alert Modal -->
                        <div id="warning-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                              <div class="modal-body p-4">
                                <div class="text-center">
                                  <i class="ri-alert-line h1 text-warning"></i>
                                  <h4 class="mt-2">Incorrect Information</h4>
                                  <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam.</p>
                                  <button type="button" class="btn btn-warning my-2"
                                    data-bs-dismiss="modal">Continue</button>
                                </div>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Danger Alert Modal -->
                        <div id="danger-alert-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm">
                            <div class="modal-content modal-filled bg-danger">
                              <div class="modal-body p-4">
                                <div class="text-center">
                                  <i class="ri-close-circle-line h1"></i>
                                  <h4 class="mt-2">Oh snap!</h4>
                                  <p class="mt-3">Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam.</p>
                                  <button type="button" class="btn btn-light my-2"
                                    data-bs-dismiss="modal">Continue</button>
                                </div>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Success Alert modal -->
                          <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#success-alert-modal">Success Alert</button>
                          <!-- Info Alert modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#info-alert-modal">Info Alert</button>
                          <!-- Warning Alert modal -->
                          <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#warning-alert-modal">Warning Alert</button>
                          <!-- Danger Alert modal -->
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#danger-alert-modal">Danger Alert</button>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-alerts-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Success Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#success-alert-modal"</span>&gt;</span>Success Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"success-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-success"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-check-line h1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Well Done!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Info Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#info-alert-modal"</span>&gt;</span>Info Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"info-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-information-line h1 text-info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Warning Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#warning-alert-modal"</span>&gt;</span>Warning Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"warning-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-alert-line h1 text-warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Incorrect Information<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Danger Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#danger-alert-modal"</span>&gt;</span>Danger Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"danger-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-danger"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-close-circle-line h1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Oh snap!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Modal Position</h4>
                    <p class="text-muted font-14">Specify the position for the modal. You can display modal at top,
                      bottom, center or right of page by specifying
                      classes <code>modal-top</code>, <code>modal-bottom</code>, <code>modal-dialog-centered</code> and
                      <code>modal-right</code>
                      respectively.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-position-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-position-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-position-preview" role="tabpanel">
                        <!-- Top modal content -->
                        <div id="top-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-top">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5>Text in a modal</h5>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Right modal content -->
                        <div id="right-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm modal-right">
                            <div class="modal-content">
                              <div class="modal-header border-0">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="text-center">
                                  <h4 class="mt-0">Text in a modal</h4>
                                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                  <button type="button" class="btn btn-danger btn-sm"
                                    data-bs-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Bottom modal content -->
                        <div id="bottom-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-sm modal-bottom">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="bottomModalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5>Text in a modal</h5>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Center modal content -->
                        <div class="modal fade" id="centermodal" tabindex="-1" role="dialog" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="myCenterModalLabel">Center modal</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5>Overflowing text to show scroll behavior</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Top modal -->
                          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#top-modal">Top Modal</button>
                          <!-- Bottom modal -->
                          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#bottom-modal">Bottom Modal</button>
                          <!-- Center modal -->
                          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#centermodal">Center modal</button>
                          <!-- Right modal -->
                          <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#right-modal">Rightbar Modal</button>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-position-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Top modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#top-modal"</span>&gt;</span>Top Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"top-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-top"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Right modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#right-modal"</span>&gt;</span>Rightbar Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"right-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm modal-right"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header border-0"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    ...<br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Bottom modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bottom-modal"</span>&gt;</span>Bottom Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottom-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm modal-bottom"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottomModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Center modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#centermodal"</span>&gt;</span>Center modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"centermodal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-centered"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myCenterModalLabel"</span>&gt;</span>Center modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Colored Header Modals</h4>
                    <p class="text-muted font-14">A rendered modal with header having contexual background color.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-colored-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-colored-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-colored-preview" role="tabpanel">
                        <!-- Primary Header Modal -->
                        <div id="primary-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="primary-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-primary">
                                <h4 class="modal-title" id="primary-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Primary Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Success Header Modal -->
                        <div id="success-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="success-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-success">
                                <h4 class="modal-title" id="success-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Success Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Info Header Modal -->
                        <div id="info-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="info-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-info">
                                <h4 class="modal-title" id="info-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Info Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-info">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Warning Header Modal -->
                        <div id="warning-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-warning">
                                <h4 class="modal-title" id="warning-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Warning Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-warning">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Danger Header Modal -->
                        <div id="danger-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="danger-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-danger">
                                <h4 class="modal-title" id="danger-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Danger Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Dark Header Modal -->
                        <div id="dark-header-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="dark-header-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header modal-colored-header bg-dark">
                                <h4 class="modal-title" id="dark-header-modalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Dark Background</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Primary header modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#primary-header-modal">Primary Header</button>
                          <!-- Success header modal -->
                          <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#success-header-modal">Success Header</button>
                          <!-- Info header modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#info-header-modal">Info Header</button>
                          <!-- Warning header modal -->
                          <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#warning-header-modal">Warning Header</button>
                          <!-- Danger header modal -->
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#danger-header-modal">Danger Header</button>
                          <!-- Dark header modal -->
                          <button type="button" class="btn btn-dark" data-bs-toggle="modal"
                            data-bs-target="#dark-header-modal">Dark Header</button>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-colored-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Primary Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#primary-header-modal"</span>&gt;</span>Primary Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"primary-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"primary-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-primary"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"primary-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Success Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#success-header-modal"</span>&gt;</span>Success Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"success-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"success-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-success"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"success-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Info Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#info-header-modal"</span>&gt;</span>Info Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"info-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"info-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-info"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"info-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Warning Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#warning-header-modal"</span>&gt;</span>Warning Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"warning-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"warning-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-warning"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"warning-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Danger Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#danger-header-modal"</span>&gt;</span>Danger Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"danger-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"danger-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-danger"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"danger-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Dark Header Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-dark"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#dark-header-modal"</span>&gt;</span>Dark Header<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"dark-header-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"dark-header-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header modal-colored-header bg-dark"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"dark-header-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-dark"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Filled Modals</h4>
                    <p class="text-muted font-14">A rendered modal with header, body and footer having contexual
                      background color.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-filled-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-filled-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-filled-preview" role="tabpanel">
                        <!-- Primary Filled Modal -->
                        <div id="fill-primary-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-primary-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-primary">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-primary-modalLabel">Primary Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Success Filled Modal -->
                        <div id="fill-success-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-success-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-success">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-success-modalLabel">Success Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Info Filled Modal -->
                        <div id="fill-info-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-info-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-info">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-info-modalLabel">Info Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Warning Filled Modal -->
                        <div id="fill-warning-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-warning-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-warning">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-warning-modalLabel">Warning Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Danger Filled Modal -->
                        <div id="fill-danger-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-danger-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-danger">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-danger-modalLabel">Danger Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Dark Filled Modal -->
                        <div id="fill-dark-modal" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="fill-dark-modalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content modal-filled bg-dark">
                              <div class="modal-header">
                                <h4 class="modal-title" id="fill-dark-modalLabel">Dark Filled Modal</h4>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                  at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                  lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-outline-light">Save changes</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->


                        <div class="button-list">
                          <!-- Primary header modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#fill-primary-modal">Primary Filled</button>
                          <!-- Success header modal -->
                          <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#fill-success-modal">Success Filled</button>
                          <!-- Info header modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#fill-info-modal">Info Filled</button>
                          <!-- Warning header modal -->
                          <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#fill-warning-modal">Warning Filled</button>
                          <!-- Danger header modal -->
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#fill-danger-modal">Danger Filled</button>
                          <!-- Dark header modal -->
                          <button type="button" class="btn btn-dark" data-bs-toggle="modal"
                            data-bs-target="#fill-dark-modal">Dark Filled</button>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-filled-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Primary Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-primary-modal"</span>&gt;</span>Primary Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-primary-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-primary-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-primary"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-primary-modalLabel"</span>&gt;</span>Primary Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Success Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-success-modal"</span>&gt;</span>Success Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-success-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-success-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-success"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-success-modalLabel"</span>&gt;</span>Success Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Info Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-info-modal"</span>&gt;</span>Info Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-info-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-info-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-info"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-info-modalLabel"</span>&gt;</span>Info Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Warning Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-warning-modal"</span>&gt;</span>Warning Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-warning-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-warning-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-warning"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-warning-modalLabel"</span>&gt;</span>Warning Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Danger Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-danger-modal"</span>&gt;</span>Danger Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-danger-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-danger-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-danger"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-danger-modalLabel"</span>&gt;</span>Danger Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Dark Filled Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-dark"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fill-dark-modal"</span>&gt;</span>Dark Filled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-dark-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fill-dark-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-dark"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fill-dark-modalLabel"</span>&gt;</span>Dark Filled Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close btn-close-white"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-light"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Multiple Modal</h4>
                    <p class="text-muted font-14">Display a series of modals one by one to guide your users on multiple
                      aspects or take step wise input.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-multiple-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-multiple-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-multiple-preview" role="tabpanel">

                        <!-- Modal -->
                        <div id="multiple-one" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="multiple-oneModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="multiple-oneModalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Text in a modal</h5>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-target="#multiple-two"
                                  data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Modal -->
                        <div id="multiple-two" class="modal fade" tabindex="-1" role="dialog"
                          aria-labelledby="multiple-twoModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title" id="multiple-twoModalLabel">Modal Heading</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h5 class="mt-0">Text in a modal</h5>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <div class="button-list">
                          <!-- Multiple modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#multiple-one">Multiple Modal</button>
                        </div>
                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-multiple-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"multiple-one"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"multiple-oneModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"multiple-oneModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Text in a modal<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#multiple-two"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Next<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"multiple-two"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"multiple-twoModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"multiple-twoModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Text in a modal<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br>                    <br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-list"</span>&gt;</span><br>    <span class="hljs-comment">&lt;!-- Multiple modal --&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#multiple-one"</span>&gt;</span>Multiple Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Toggle Between Modals</h4>
                    <p class="text-muted font-14">Toggle between multiple modals with some clever placement of the
                      <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-toggle-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-toggle-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-toggle-preview" role="tabpanel">
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalToggle" aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                Show a second modal and hide this one with the button below.
                              </div>
                              <div class="modal-footer">
                                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                                  data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                Hide this modal and show the first with the button below.
                              </div>
                              <div class="modal-footer">
                                <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                                  data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                              </div>
                            </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->

                        <a class="btn btn-secondary" data-bs-toggle="modal"
                          href="https://coderthemes.com/hyper_2/saas/ui-modals.html#exampleModalToggle"
                          role="button">Open first modal</a>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-toggle-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalToggle"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalToggleLabel"</span></span><br><span class="hljs-tag">    <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-centered"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalToggleLabel"</span>&gt;</span>Modal 1<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                Show a second modal and hide this one with the button below.<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalToggle2"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span></span><br><span class="hljs-tag">                    <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Open second modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br>                <br><span class="hljs-comment">&lt;!-- Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalToggle2"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalToggleLabel2"</span></span><br><span class="hljs-tag">    <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-centered"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalToggleLabel2"</span>&gt;</span>Modal 2<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                Hide this modal and show the first with the button below.<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalToggle"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span></span><br><span class="hljs-tag">                    <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Back to first<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br>                    <br><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#exampleModalToggle"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span>&gt;</span>Open first modal<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Fullscreen Modal</h4>
                    <p class="text-muted font-14">Another override is the option to pop up a modal that covers the user
                      viewport, available via modifier classes that are placed on a <code>.modal-dialog</code></p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-fullscreen-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-fullscreen-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-fullscreen-preview" role="tabpanel">
                        <div class="hstack gap-2 flex-wrap">
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#fullscreeexampleModal">
                            Fullscreen Modal
                          </button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenSm">Full Screen Below sm</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenMd">Full Screen Below md</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenLg">Full Screen Below lg</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenXl">Full Screen Below xl</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenXxl">Full Screen Below xxl</button>
                        </div>

                        <div class="modal fade" id="fullscreeexampleModal" tabindex="-1"
                          aria-labelledby="fullscreeexampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="fullscreeexampleModalLabel">Full Screen Modal</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1"
                          aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen-sm-down">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1"
                          aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen-md-down">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1"
                          aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen-lg-down">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1"
                          aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen-sm-down">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1"
                          aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
                          <div class="modal-dialog modal-fullscreen-xxl-down">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Close</a>
                                <button type="button" class="btn btn-primary">Save Changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-fullscreen-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Fullscreen Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#fullscreeexampleModal"</span>&gt;</span><br>    Fullscreen Modal<br><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fullscreeexampleModal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fullscreeexampleModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fullscreeexampleModalLabel"</span>&gt;</span>Full Screen Modal<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full Screen Below sm Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalFullscreenSm"</span>&gt;</span>Full Screen Below sm<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenSm"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalFullscreenSmLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen-sm-down"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenSmLabel"</span>&gt;</span>Full screen below sm<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full Screen Below md Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalFullscreenMd"</span>&gt;</span>Full Screen Below md<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenMd"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalFullscreenMdLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen-md-down"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenMdLabel"</span>&gt;</span>Full screen below md<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full Screen Below lg Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalFullscreenLg"</span>&gt;</span>Full Screen Below lg<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenLg"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalFullscreenLgLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen-lg-down"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenLgLabel"</span>&gt;</span>Full screen below lg<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full Screen Below xl Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalFullscreenXl"</span>&gt;</span>Full Screen Below xl<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenXl"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalFullscreenXlLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen-sm-down"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenXlLabel"</span>&gt;</span>Full screen below xl<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full Screen Below xxl Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModalFullscreenXxl"</span>&gt;</span>Full Screen Below xxl<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenXxl"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalFullscreenXxlLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-fullscreen-xxl-down"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalFullscreenXxlLabel"</span>&gt;</span>Full screen below xxl<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save Changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Static Backdrop</h4>
                    <p class="text-muted font-14">When backdrop is set to static, the modal will not close when clicking
                      outside it. Click the button below to try it.</p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-static-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-static-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-static-preview" role="tabpanel">
                        <div class="button-list">
                          <!-- Static Backdrop modal -->
                          <button type="button" class="btn btn-info" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            Static Backdrop
                          </button>
                        </div> <!-- btn list -->

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                          tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div> <!-- end modal header -->
                              <div class="modal-body">
                                <p class="m-0">I will not close if you click outside me. Don't even try to press escape
                                  key.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                              </div> <!-- end modal footer -->
                            </div> <!-- end modal content-->
                          </div> <!-- end modal dialog-->
                        </div> <!-- end modal-->

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-static-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Static Backdrop modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#staticBackdrop"</span>&gt;</span><br>    Static Backdrop<br><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"staticBackdrop"</span> <span class="hljs-attr">data-bs-backdrop</span>=<span class="hljs-string">"static"</span> <span class="hljs-attr">data-bs-keyboard</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"staticBackdropLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"staticBackdropLabel"</span>&gt;</span>Modal title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <span class="hljs-comment">&lt;!-- end modal header --&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Understood<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <span class="hljs-comment">&lt;!-- end modal footer --&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <span class="hljs-comment">&lt;!-- end modal content--&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <span class="hljs-comment">&lt;!-- end modal dialog--&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <span class="hljs-comment">&lt;!-- end modal--&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->

            </div>
            <!-- end row -->


            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="header-title">Varying Modal Content</h4>
                    <p class="text-muted font-14">Have a bunch of buttons that all trigger the same modal with slightly
                      different contents? Use
                      <code>event.relatedTarget</code> and <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes"
                        target="_blank">HTML <code>data-bs-*</code>
                        attributes</a> to vary the contents of the modal depending on which button was clicked.
                    </p>

                    <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-varying-preview"
                          data-bs-toggle="tab" aria-expanded="false" class="nav-link active" aria-selected="true"
                          role="tab">
                          Preview
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-varying-code"
                          data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false" tabindex="-1"
                          role="tab">
                          Code
                        </a>
                      </li>
                    </ul> <!-- end nav-->
                    <div class="tab-content">
                      <div class="tab-pane show active" id="modal-varying-preview" role="tabpanel">
                        <div class="hstack gap-2 flex-wrap">
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for
                            @getbootstrap</button>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form>
                                  <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                  </div>
                                  <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                  </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message</button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div> <!-- end preview-->

                      <div class="tab-pane" id="modal-varying-code" role="tabpanel">
                        <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hstack gap-2 flex-wrap"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModal"</span> <span class="hljs-attr">data-bs-whatever</span>=<span class="hljs-string">"@mdo"</span>&gt;</span>Open modal for @mdo<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModal"</span> <span class="hljs-attr">data-bs-whatever</span>=<span class="hljs-string">"@fat"</span>&gt;</span>Open modal for @fat<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#exampleModal"</span> <span class="hljs-attr">data-bs-whatever</span>=<span class="hljs-string">"@getbootstrap"</span>&gt;</span>Open modal for @getbootstrap<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"exampleModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"exampleModalLabel"</span>&gt;</span>New message<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">form</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"recipient-name"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-form-label"</span>&gt;</span>Recipient:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"recipient-name"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"message-text"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-form-label"</span>&gt;</span>Message:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"message-text"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Send message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
                                                </pre> <!-- end highlight-->
                      </div> <!-- end preview code-->
                    </div> <!-- end tab-content-->
                  </div> <!-- end card-body -->
                </div> <!-- end card-->
              </div> <!-- end col -->
            </div>
            <!-- end row -->

          </div> <!-- container -->

        </div> <!-- content -->

        <!-- Footer Start -->
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
              </div>
              <div class="col-md-6">
                <div class="text-md-end footer-links d-none d-md-block">
                  <a href="javascript: void(0);">About</a>
                  <a href="javascript: void(0);">Support</a>
                  <a href="javascript: void(0);">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- end Footer -->

      </div>

      <!-- ============================================================== -->
      <!-- End Page content -->
      <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->

    <!-- Theme Settings -->
    <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="theme-settings-offcanvas">
      <div class="d-flex align-items-center bg-primary p-3 offcanvas-header">
        <h5 class="text-white m-0">Theme Settings</h5>
        <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>

      <div class="offcanvas-body p-0">
        <div data-simplebar="init" class="h-100">
          <div class="simplebar-wrapper" style="margin: 0px;">
            <div class="simplebar-height-auto-observer-wrapper">
              <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
              <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                  style="height: 100%; overflow: hidden scroll;">
                  <div class="simplebar-content" style="padding: 0px;">
                    <div class="card mb-0 p-3">
                      <h5 class="mt-0 font-16 fw-bold mb-3">Choose Layout</h5>
                      <div class="row">
                        <div class="col-4">
                          <div class="form-check card-radio">
                            <input id="customizer-layout01" name="data-layout" type="radio" value="vertical"
                              class="form-check-input">
                            <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout01">
                              <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                  <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                    <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span class="flex-grow-1">
                                  <span class="d-flex h-100 flex-column">
                                    <span class="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <h5 class="font-14 text-center text-muted mt-2">Vertical</h5>
                        </div>
                        <div class="col-4">
                          <div class="form-check card-radio">
                            <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal"
                              class="form-check-input">
                            <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout02">
                              <span class="d-flex h-100 flex-column">
                                <span class="bg-light d-flex p-1 align-items-center border-bottom">
                                  <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span class="d-block border border-3 ms-auto"></span>
                                  <span class="d-block border border-3 ms-1"></span>
                                  <span class="d-block border border-3 ms-1"></span>
                                  <span class="d-block border border-3 ms-1"></span>
                                </span>
                                <span class="bg-light d-block p-1"></span>
                              </span>
                            </label>
                          </div>
                          <h5 class="font-14 text-center text-muted mt-2">Horizontal</h5>
                        </div>
                      </div>

                      <h5 class="my-3 font-16 fw-bold">Color Scheme</h5>

                      <div class="colorscheme-cardradio">
                        <div class="row">
                          <div class="col-4">
                            <div class="form-check card-radio">
                              <input class="form-check-input" type="radio" name="data-theme" id="layout-color-light"
                                value="light">
                              <label class="form-check-label p-0 avatar-md w-100" for="layout-color-light">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column bg-white">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                          </div>

                          <div class="col-4">
                            <div class="form-check card-radio">
                              <input class="form-check-input" type="radio" name="data-theme" id="layout-color-dark"
                                value="dark">
                              <label class="form-check-label p-0 avatar-md w-100 bg-black" for="layout-color-dark">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light-lighten d-flex h-100 flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-light-lighten rounded mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light-lighten d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                          </div>
                        </div>
                      </div>

                      <div id="layout-width">
                        <h5 class="my-3 font-16 fw-bold">Layout Mode</h5>

                        <div class="row">
                          <div class="col-4">
                            <div class="form-check card-radio">
                              <input class="form-check-input" type="radio" name="data-layout-mode"
                                id="layout-mode-fluid" value="fluid">
                              <label class="form-check-label p-0 avatar-md w-100" for="layout-mode-fluid">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Fluid</h5>
                          </div>
                          <div class="col-4" id="layout-boxed">
                            <div class="form-check card-radio">
                              <input class="form-check-input" type="radio" name="data-layout-mode"
                                id="layout-mode-boxed" value="boxed">
                              <label class="form-check-label p-0 avatar-md w-100 px-2" for="layout-mode-boxed">
                                <span class="d-flex h-100 border-start border-end">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end flex-column p-1">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Boxed</h5>
                          </div>

                          <div class="col-4" id="layout-detached">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-layout-mode"
                                id="data-layout-detached" value="detached">
                              <label class="form-check-label p-0 avatar-md w-100" for="data-layout-detached">
                                <span class="d-flex h-100 flex-column">
                                  <span class="bg-light d-flex p-1 align-items-center border-bottom">
                                    <span class="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                    <span class="d-block border border-3 ms-auto"></span>
                                    <span class="d-block border border-3 ms-1"></span>
                                    <span class="d-block border border-3 ms-1"></span>
                                    <span class="d-block border border-3 ms-1"></span>
                                  </span>
                                  <span class="d-flex h-100 p-1 px-2">
                                    <span class="flex-shrink-0">
                                      <span class="bg-light d-flex h-100 flex-column p-1 px-2">
                                        <span class="d-block border border-3 w-100 mb-1"></span>
                                        <span class="d-block border border-3 w-100 mb-1"></span>
                                        <span class="d-block border border-3 w-100"></span>
                                      </span>
                                    </span>
                                  </span>
                                  <span class="bg-light d-block p-1 mt-auto px-2"></span>
                                </span>

                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Detached</h5>
                          </div>
                        </div>
                      </div>

                      <h5 class="my-3 font-16 fw-bold">Topbar Color</h5>

                      <div class="row">
                        <div class="col-4">
                          <div class="form-check card-radio">
                            <input class="form-check-input" type="radio" name="data-topbar-color"
                              id="topbar-color-light" value="light">
                            <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                              <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                  <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                    <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span class="flex-grow-1">
                                  <span class="d-flex h-100 flex-column">
                                    <span class="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                        </div>
                        <div class="col-4">
                          <div class="form-check card-radio">
                            <input class="form-check-input" type="radio" name="data-topbar-color" id="topbar-color-dark"
                              value="dark">
                            <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                              <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                  <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                    <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                    <span class="d-block border border-3 w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span class="flex-grow-1">
                                  <span class="d-flex h-100 flex-column">
                                    <span class="bg-dark d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                        </div>
                      </div>

                      <div id="sidebar-color">
                        <h5 class="my-3 font-16 fw-bold">Sidebar Color</h5>

                        <div class="row">
                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-color"
                                id="leftbar-color-light" value="light">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-light">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Light</h5>
                          </div>
                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-color"
                                id="leftbar-color-dark" value="dark">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-dark">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-dark d-flex h-100 flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-light-lighten rounded mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Dark</h5>
                          </div>
                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-color"
                                id="leftbar-color-default" value="default">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-color-default">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-primary bg-gradient d-flex h-100 flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-light-lighten rounded mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                      <span class="d-block border opacity-25 border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Brand</h5>
                          </div>
                        </div>
                      </div>

                      <div id="sidebar-size">
                        <h5 class="my-3 font-16 fw-bold">Sidebar Size</h5>

                        <div class="row">
                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-size"
                                id="leftbar-size-default" value="default">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-default">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Default</h5>
                          </div>

                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-size"
                                id="leftbar-size-compact" value="compact">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-compact">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1">
                                      <span class="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Compact</h5>
                          </div>

                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-size"
                                id="leftbar-size-small" value="condensed">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-small">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column">
                                      <span class="d-block p-1 bg-dark-lighten mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Condensed</h5>
                          </div>

                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-size"
                                id="leftbar-size-small-hover" value="sm-hover">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-small-hover">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column">
                                      <span class="d-block p-1 bg-dark-lighten mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                      <span class="d-block border border-3 w-100 mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Hover View</h5>
                          </div>

                          <div class="col-4">
                            <div class="form-check sidebar-setting card-radio">
                              <input class="form-check-input" type="radio" name="data-sidenav-size"
                                id="leftbar-size-full" value="full">
                              <label class="form-check-label p-0 avatar-md w-100" for="leftbar-size-full">
                                <span class="d-flex h-100">
                                  <span class="flex-shrink-0">
                                    <span class="d-flex h-100 border-end  flex-column">
                                      <span class="d-block p-1 bg-dark-lighten mb-1"></span>
                                    </span>
                                  </span>
                                  <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                      <span class="bg-light d-block p-1"></span>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <h5 class="font-14 text-center text-muted mt-2">Full Layout</h5>
                          </div>
                        </div>
                      </div>

                      <div id="layout-position">
                        <h5 class="my-3 font-16 fw-bold">Layout Position</h5>

                        <div class="btn-group radio" role="group">
                          <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed"
                            value="fixed">
                          <label class="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>

                          <input type="radio" class="btn-check" name="data-layout-position"
                            id="layout-position-scrollable" value="scrollable">
                          <label class="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                        </div>
                      </div>

                      <div id="sidebar-user">
                        <div class="d-flex justify-content-between align-items-center mt-3">
                          <label class="font-16 fw-bold m-0" for="sidebaruser-check">Sidebar User Info</label>
                          <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" name="sidebar-user" id="sidebaruser-check">
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="simplebar-placeholder" style="width: auto; height: 1335px;"></div>
          </div>
          <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
          </div>
          <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
            <div class="simplebar-scrollbar"
              style="height: 198px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
          </div>
        </div>

      </div>
      <div class="offcanvas-footer border-top p-3 text-center">
        <div class="row">
          <div class="col-6">
            <button type="button" class="btn btn-light w-100" id="reset-layout">Reset</button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary w-100">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
  },
  methods: {
    loadThemes() {
      fetchThemes().then(res => {
        this.themeList = res.data.records;
      });
    },
    //换主题
    changeTheme(type) {
      window.document.documentElement.setAttribute("data-sidenav-size", "condensed");

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
