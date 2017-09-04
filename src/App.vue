<template>
  <v-app>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher overflow>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>View Meetups</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vuejs Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat><v-icon left>supervisor_account</v-icon>View Meetups</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main></main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: false
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/main'
</style>