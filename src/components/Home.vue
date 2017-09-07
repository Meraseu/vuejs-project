<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor:pointer;">
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'http://www.balmuda.co.kr/greenfan-s/_img/features/natural_wind.jpg', id: '이미지1', title: 'Twice1' },
          { imageUrl: 'https://windowsforum.kr/files/attach/images/2966154/024/338/002/d7765e849c020b0545ff3df4e2d6d0c0.JPG', id: '이미지2', title: 'Twice2' }
        ]
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
<style scoped></style>
.title {
  position:absolute;
  bottom:50px;
  background-color:rgba(0,0,0,.5);
  color:#fff;
  font-size:2em;
  padding:20px;
}
</style>
