import { addElementCls, changeElementVal } from "../../utils/utils"

const state = {
  sidebar: {
    opened: true,
    fixed: false,
    withoutAnimation: false,
    name: 'data-sidenav-size'
  },
  settings: {
    opened: false,
    layout: 'sidebar',
    theme: 'light',
    sidebarSize: {
      opened: 'default',
      collapsed: 'condensed'
    }
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.settings.sidebarSize.opened == 'full') {
      state.settings.sidebarSize.collapsed = 'full'
      if (state.sidebar.opened) {
        removeElementCls('sidebar-enable')
      } else {
        addElementCls('sidebar-enable')
      }
    }
    changeElementVal(state.sidebar.name,
      state.sidebar.opened
        ? state.settings.sidebarSize.opened
        : state.settings.sidebarSize.collapsed)

  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  FIXED_SIDEBAR: (state) => {
    state.sidebar.fixed = !state.sidebar.fixed
    changeElementVal(state.sidebar.name, state.sidebar.fixed ? 'sm-hover-active' : 'sm-hover')
  },
  TOGGLE_SETTINGS: state => {
    state.settings.opened = !state.settings.opened
    state.sidebar.withoutAnimation = false
  },
  TOGGLE_THEME: state => {
    if (state.settings.theme == 'light') {
      state.settings.theme = 'dark'
    } else {
      state.settings.theme = 'light'
    }
    changeElementVal('data-theme', state.settings.theme)
  },
  CHANGE_SETTINGS: (state, { name, val }) => {

    console.log(name)
    console.log(val)
    if (val == 'condensed') {
      state.sidebar.opened = false
      state.settings.sidebarSize.opened = 'default'
    } else if (name == 'data-layout') {
      state.settings.layout = val
    } else if (name == 'data-theme') {
      state.settings.theme = val
    } else {
      state.sidebar.opened = true
      state.settings.sidebarSize.opened = val
    }
    changeElementVal(name, val)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  fixedSidebar({ commit }) {
    commit('FIXED_SIDEBAR')
  },
  toggleSettings({ commit }) {
    commit('TOGGLE_SETTINGS')
  },
  toggleTheme({ commit }) {
    commit('TOGGLE_THEME')
  },
  changeSettings({ commit }, data) {
    commit('CHANGE_SETTINGS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
