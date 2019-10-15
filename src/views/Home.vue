<template>

<div ><Login />  </div>

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

.logo {
  filter: hue-rotate(60deg);
  transform: rotate(-60deg);
  top: 50px;
  position: relative;
}
</style>
