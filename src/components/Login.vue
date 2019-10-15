<template>
  
  <!-- <div class="login-form">
    <!-- Icon --
  
    <!-- Login Form --
    <b-form @submit="onSubmit" >
      <b-form-group>
        <b-input-group id="input-group-login" prepend="Login:" label-for="input-login">
          <b-form-input id="input-login" v-model="form.login" required placeholder="Enter login"></b-form-input>
        </b-input-group>
 </b-form-group>
  <b-form-group>
        <b-input-group id="input-group-password" prepend="Password:" label-for="input-password" inline>
          <b-form-input
            id="input-password"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
        
    </b-form>
  </div> -->

  <div>
<b-form @submit="onSubmit" >
  <b-input-group >
   
     <b-form-input id="input-login" v-model="form.login" required placeholder="Enter login">

     </b-form-input>
      <b-form-input
            id="input-password"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
           <b-input-group-append >
      <b-button type="submit" size="sm" variant="success" >Login</b-button>
    </b-input-group-append>
  </b-input-group>
</b-form>
</div>
</template>
<script lang="ts">
import UserApi from '../services/api';

export default {
  data() {
    return {
      form: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt: Event) {
    const Api = new UserApi();
      Api.Login(this.form.login, this.form.password);
    }
  }
};
</script>
<style scoped>

</style>