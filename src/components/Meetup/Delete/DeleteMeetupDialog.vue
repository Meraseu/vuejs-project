<template>
  <v-dialog width="350px" persistent v-model="deleteDialog">
    <v-btn fab accent slot="activator">
      <v-icon>delete</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>정말로 삭제하시겠습니까?</v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                class="blue--text darken-1"
                @click="deleteDialog = false">아니요</v-btn>
              <v-btn flat class="blue--text darken-1" @click="onDelete">예</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        deleteDialog: false,
        editedTitle: this.meetup.title,
        editedDescription: this.meetup.description
      }
    },
    methods: {
      onDelete () {
        this.deleteDialog = false
        this.$store.dispatch('deleteMeetupData', {
          id: this.meetup.id
        })
        this.$router.push('/meetups')
      }
    }
  }
</script>
