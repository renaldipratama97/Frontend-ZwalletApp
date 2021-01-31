<template>
    <div>
        <Header />
        <div class="content">
          <div class="content-box">
            <nav>
            <!-- <div class="box"> -->
                <ul>
                    <li><img src="../../assets/img/grid.png"><p><router-link class="link" to="/">Dashboard</router-link></p></li>
                    <li><img src="../../assets/img/arrow-up.png"><p><router-link class="link" to="/transfer">Transfer</router-link></p></li>
                    <li><img src="../../assets/img/plus.png"><p><router-link class="link" to="/topup">Topup</router-link></p></li>
                    <li><img src="../../assets/img/user.png"><p><router-link class="link" to="/profil">Profil</router-link></p></li>
                    <li><img src="../../assets/img/log-out.png"><p><router-link class="link" to="/">Logout</router-link></p></li>
                </ul>
            <!-- </div> -->
            </nav>
            <section>
                <div class="box">
                    <div class="profile">
                        <img v-if="userLogin.picture" :src="userLogin.picture">
                        <img v-else src="../../assets/default.jpg">
                        <div class="edit">
                            <span>Edit</span>
                        </div>
                        <span v-if="userLogin.firstname && userLogin.lastname">{{userLogin.firstname}} {{userLogin.lastname}}</span>
                        <span v-else> - </span>
                        <phone-number>{{userLogin.phonenumber}}</phone-number>
                    </div>

                    <div class="menu">
                        <button v-on:click = "navigationHandle()">Personal Information <img src="../../assets/img/arrow-left.svg"></button>
                        <button>Change Password <img src="../../assets/img/arrow-left.svg"></button>
                        <button>Change Pin <img src="../../assets/img/arrow-left.svg"></button>
                        <button @click.prevent="logout">Logout</button>
                    </div>
                </div>
            </section>
          </div>
        </div>
        <Footer :authorFooter = "author" :hpFooter = "hp" :mailFooter = "mail"/>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import mixins from '../../mixins/index'

export default {
  name: 'Home',
  mixins: [mixins],
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com',
      dataTransactions: []
    }
  },
  mounted () {
    this.getTransactions()
    this.getUserLogin()
  },
  methods: {
    ...mapActions(['getUserLogin']),
    navigationHandle () {
      this.$router.push({ name: 'PersonalInformation' })
    },
    logoutHandle () {
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    ...mapGetters(['userLogin'])
  }
}
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
}

.content{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 750px;
  margin-top: 35px;
}

.content .content-box{
    width: 75%;
    height: 100%;
    display: flex;
}

nav {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 95%;
    font-size: 18px;
    font-weight: 400;
    margin-top: 5%;
    color: rgba(58, 61, 66, 0.8);
}

nav ul li{
    list-style: none;
    display: flex;
    margin-top: 15%;
    align-items: center;
}

nav ul li:nth-child(5){
    margin-top: auto;
    margin-bottom: 30px;
}

nav ul li img{
    width: 28px;
    height: 28px;
    margin-left: 10%;
}

nav ul li p{
    margin-left: 8%;
}

nav ul li p .link {
    text-decoration: none;
    color: rgba(58, 61, 66, 0.8);
}

nav ul li p .link:hover {
    color: rgb(99, 121, 244, 1);
}

.content .content-box section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: auto;
}

.content .content-box section .box {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
}

.content .content-box section .box .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.content .content-box section .box .profile img {
    width: 80px;
    border-radius: 10px;
}

.content .content-box section .box .profile .edit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20px;
    margin-top: 1%;
}

.content .content-box section .box .profile .edit img {
    width: 11px;
    height: 11px;
    margin-right: 2%;
}

.content .content-box section .box .profile .edit span {
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
}

.content .content-box section .box .profile span {
    color: #4D4B57;
    font-size: 24px;
    font-weight: bold;
    margin-top: 2%;
}

.content .content-box section .box .profile phone-number {
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
}

.content .content-box section .box .menu {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.content .content-box section .box .menu button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 64px;
    background-color: #E5E8ED;
    border-radius: 10px;
    color: #4D4B57;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 3%;
}

.content .content-box section .box .menu button img {
    width: 28px;
    height: 28px;
}

.content .content-box section .box .menu button:focus {
    outline: none;
}

.content .content-box section .box .menu button:hover {
    background-color: #6379F4;
    color: #FFFFFF;
}
</style>
