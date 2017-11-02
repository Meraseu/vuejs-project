<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex x12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email" label="이메일" id="email" v-model="email" type="email" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password" label="비밀번호" id="password" v-model="password" type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      로그인
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row class="mt-4">
                  <v-flex xs12>
                    <p class="or" aria-hidden="true">
                      <span>OR</span>
                    </p>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12>
                    <h6 class="header-social">소셜계정으로 로그인</h6>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12>
                    <v-btn class="facebook" @click="onSignInWithFacebook">facebook</v-btn>
                    <v-btn class="google" @click="onSignInWithGoogle">google</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onSignInWithGoogle () {
        this.$store.dispatch('signUserInWithGoogle')
      },
      onSignInWithFacebook () {
        this.$store.dispatch('signUserInWithFacebook')
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
<style>
.or {
  position:relative;
  overflow:hidden;
  width:100%;
  text-align:center;
}
.or span {
  z-index:20;
  position:relative;
  background:#fff;
  padding:0 15px;
}
.or:after {
  content:'';
  display:block;
  z-index:10;
  position:absolute;
  left:0;
  top:50%;
  width:100%;
  height:1px;
  background-color:#ccc;
}
.header-social {
  font-size:14px;
}
</style>
