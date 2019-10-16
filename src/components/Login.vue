<template>
  <div>
    <b-form @submit="onSubmit">
      <b-input-group>
        <b-form-input id="input-login" v-model="form.login" required placeholder="Enter login"></b-form-input>
        <b-form-input
          id="input-password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
        <b-input-group-append>
          <b-button type="submit" size="sm" variant="success">Login</b-button>
          
        </b-input-group-append>
       
      </b-input-group>
      <router-link class="register" to="/register">Register</router-link> 
      <b-alert variant="danger" :show="message.length === 0 ? null : true">{{message}}</b-alert>
    </b-form>
  </div>
</template>
<script lang="ts">
import UserService from "../services/UserService";

export default {
  data() {
    return {
      form: {
        login: "",
        password: ""
      },
      message: ""
    };
  },
  methods: {
    async onSubmit(evt: Event) {
      this.message = "";
      const Api = new UserService();
      try {
        const result = await Api.Login(this.form.login, this.form.password);
        if (result && result.length !== 0) {
          this.$router.push(`/user/${result}`);
        }
      } catch (ex) {
        this.message = ex;
      }
    }
  }
};
</script>
<style scoped>
.register {
  color: grey;
}
</style>