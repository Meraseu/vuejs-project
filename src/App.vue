<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Vuejs Project</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link"><v-icon left>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout"><v-icon left>exit_to_app</v-icon>로그아웃</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: '회원가입', link: '/signup' },
          { icon: 'lock_open', title: '로그인', link: '/signin' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'supervisor_account', title: '게시판 보기', link: '/meetups' },
            { icon: 'room', title: '게시물 작성', link: '/meetup/new' }
            // { icon: 'person', title: 'Profile', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
<style lang="stylus">
@import './stylus/main'
</style>
