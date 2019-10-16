<template>

<div class="row">
    <div class="col-sm" />
    <div class="col-sm">
      <Login /> 
    </div>
    <div class="col-sm"/>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Login from '@/components/Login.vue';

@Component({
  components: {
    HelloWorld,
    Login
  },
})
export default class Home extends Vue {}
</script>

<style>


</style>
