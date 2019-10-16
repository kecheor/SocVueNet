<template>
    <div class="row">
    <div class="col-sm" >
      <RegisterForm />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RegisterForm from '@/components/RegisterForm.vue';

@Component({
  components: {
    RegisterForm
  },
})
export default class Register extends Vue {}
</script>