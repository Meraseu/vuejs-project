<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list dense>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-avatar size="18px" slot="activator" v-if="userIsAuthenticated && getUser.photo">
              <img :src="getUser.photo" alt="">
            </v-avatar>
            <v-icon v-else>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ getUser.name }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>로그아웃</v-list-tile-content>
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
        <v-layout class="mr-4" v-if="userIsAuthenticated && getUser.photo">
          <v-layout align-center row spacer>
            <v-flex class="mr-3">
              <v-avatar size="36px" slot="activator">
                <img :src="getUser.photo" alt="">
              </v-avatar>
            </v-flex>
          </v-layout>
          <v-layout align-center row spacer>
            <v-flex xs3>
              <strong>{{ getUser.name }}</strong>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout class="mr-4" align-center row spacer v-if="userIsAuthenticated && !getUser.photo">
          <v-layout align-center row spacer>
            <v-flex class="mr-3">
              <v-avatar class="grey" size="36px" slot="activator">
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
            </v-flex>
          </v-layout>
          <v-layout align-center row spacer>
            <v-flex xs3>
              <strong>{{ getUser.name }}</strong>
            </v-flex>
          </v-layout>
        </v-layout>
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
            { icon: 'supervisor_account', title: '리스트', link: '/meetups' },
            { icon: 'create', title: '작성', link: '/meetup/new' }
            // { icon: 'person', title: 'Profile', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      getUser () {
        return this.$store.getters.user
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
