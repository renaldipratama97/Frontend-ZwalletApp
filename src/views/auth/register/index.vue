<template>
    <div class="container">
        <aside>
            <div class="box">
                <div class="title">Zwallet</div>
                <img src="../../../assets/img/phone.svg">
                <div class="app">App that Covering Banking Needs.</div>
                <p>Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage.</p>
            </div>
        </aside>
        <div class="login-box">
            <div class="box">
                <div class="word-bold">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</div>
                <div class="word-small">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                <div class="login">Sign Up</div>
                <form @submit.prevent="methodRegister">
                <div class="input-box">
                    <div class="input">
                        <img src="../../../assets/img/user.png">
                        <input type="text" v-model="username" name="email" placeholder="Enter your name">
                    </div>
                </div>

                <div class="input-box">
                    <div class="input">
                        <img src="../../../assets/img/mail.svg">
                        <input type="text" v-model="email" name="email" placeholder="Enter your e-mail">
                    </div>
                </div>

                <div class="input-box">
                    <div class="input">
                        <img src="../../../assets/img/lock.svg">
                        <input type="password" v-model="password" name="email" placeholder="Create your password">
                        <img src="../../../assets/img/eye.svg">
                    </div>
                </div>

                <button type="submit">Sign Up</button>
                </form>
                <span>Already have an account? Let’s <router-link class="link" to="/auth/login">Login</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    methodRegister () {
      console.log('Running Method Register')
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Your account has been created',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/auth/login')
        })
        .catch((err) => {
          console.log(err.response.data.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Register failed',
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
  }
}
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: row;
    height: 961px;
    width: 100%;
    min-width: 400px;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
}

/* Styling aside */

.container aside {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    background-image: url(../../../assets/img/left-bg.svg);
    background-repeat: no-repeat;
}

.container aside .box {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    /* border: 1px solid black; */
}

.container aside .box .title {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;
}

.container aside .box img {
    margin-left: -8%;
    margin-top: 3%;
}

.container aside .box .app {
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
    margin-top: 10%;
}

.container aside .box p {
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.8);
    Width: 488px;
    height: auto;
    margin-top: 10%;
}

/* Akhir Styling aside */

/* Styling .login-box */

.container .login-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    background-color: rgb(248, 248, 248);
    height: 100%;
}

.container .login-box .box {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
}

.container .login-box .box .word-bold {
    width: 384px;
    color: #3A3D42;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
}

.container .login-box .box .word-small {
    width: 433px;
    color: rgba(58, 61, 66, 0.6);
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    margin-top: 10%;
}

.container .login-box .box .login {
    display: none;
}

.container .login-box .box .input-box {
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 35px;
    margin-top: 10%;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}

.container .login-box .box .input-box .input {
    display: flex;
    align-items: center;
}

.container .login-box .box .input-box .input img {
    width: 24px;
    height: 24px;
}

.container .login-box .box .input-box .input input {
    margin-left: 4%;
    border: none;
    background: transparent;
    color: rgba(169, 169, 169, 0.8);
    font-weight: normal;
    font-size: 16px;
    width: 80%;
}

.container .login-box .box .input-box .input input::placeholder {
    color: rgba(169, 169, 169, 0.8);
    font-weight: normal;
    font-size: 16px;
}

.container .login-box .box .input-box .input input:focus {
    outline: none;
}

.container .login-box .box button {
    width: 85%;
    height: 57px;
    background-color: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    margin-top: 20%;
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #88888F;
}

.container .login-box .box button:hover {
    background-color: #6379F4;
    color: #FFFFFF;
}

.container .login-box .box button:focus {
    outline: none;
}

.container .login-box .box span {
    margin-top: 10%;
    width: 85%;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: rgba(58, 61, 66, 0.8);
}

.container .login-box .box span .link {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #6379F4;
}
</style>
