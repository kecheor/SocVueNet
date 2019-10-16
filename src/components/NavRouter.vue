<template>


    <div id="nav">
<div v-if="isAuthorized" >
  
</div>

      <router-link to="/">Home</router-link> 
      <router-link v-if="!isAuthorized" to="/register">Register</router-link>
      <a @click="logout()">Logout</a>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import UserService from "../services/UserService";

@Component({
  computed: {
    isAuthorized: function() { return (new UserService()).CurrentUserId() !== null }
  },
  methods: {
    logout: function() { (new UserService()).Logout(); this.$router.push('/') }
  }
})

export default class NavRouter extends Vue {

}
</script>