<template>
  <HeaderLayout />
  <NavbarLayout />
  <div class="container-mx-auto">
    <div class="col">
      <div class="register-form">
        <h2>Felhasználói Regisztráció</h2>
        <form @submit.prevent="registerUser">
          <div>
            <label for="username">Felhasználónév:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Jelszó:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Regisztráció</button>
        </form>
        <p v-if="message">{{ message }}</p>
      </div>

    </div>
  </div>
  <main>
    <router-view />
  </main>
</template>

<script>
import HeaderLayout from "@layouts/HeaderLayout.vue";
import NavbarLayout from '@layouts/NavbarLayout.vue';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: '',
    };
  },
  components: {
    HeaderLayout,
    NavbarLayout,
  },
  methods: {
    async registerUser() {
      try {
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        });
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error('Hiba a regisztráció során:', error);
        this.message = 'Hiba történt a regisztráció során';
      }
    },
  },
};
</script>
<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
}
.register-form div {
  margin-bottom: 15px;
}
</style>