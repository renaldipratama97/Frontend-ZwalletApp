<template>
    <div>
        <Header />
        <div class="content">
          <div class="content-box">
            <nav>
            <!-- <div class="box"> -->
                <ul>
                    <li><img @click.prevent="goHome" src="../../assets/img/grid.png"><p><router-link class="link" to="/">Dashboard</router-link></p></li>
                    <li><img @click.prevent="goTransfer" src="../../assets/img/arrow-up.png"><p><router-link class="link" to="/transfer">Transfer</router-link></p></li>
                    <li><img @click.prevent="goTopUp" src="../../assets/img/plus.png"><p><router-link class="link" to="/topup">Topup</router-link></p></li>
                    <li><img @click.prevent="goProfile" src="../../assets/img/user.png"><p><router-link class="link" to="/profil">Profil</router-link></p></li>
                    <li><img @click.prevent="goLogout" src="../../assets/img/log-out.png"><p><router-link class="link" to="/">Logout</router-link></p></li>
                </ul>
            <!-- </div> -->
            </nav>
            <section>
                <div class="box">
                    <div class="content-title">Manage Phone Number</div>
                    <p>You can only delete the phone number and then you must add another phone number.</p>
                    <div class="add">
                      <p v-if="!userLogin.phonenumber"><router-link class="link" :to="{ name: 'AddPhonePrimary', params: { idUser: userLogin.id }}">Add Phone Number</router-link></p>
                      <p v-else></p>
                    </div>
                    <div class="box-manage-phone">
                        <div class="box">
                            <div class="phone-number">
                                <span>Primary</span>
                                <p v-if="userLogin.phonenumber"> {{userLogin.phonenumber}} </p>
                                <p v-else> - </p>
                            </div>
                            <button v-on:click="editPhone(userLogin.id)">
                            <img src="../../assets/img/edit-pen.svg">
                            </button>
                        </div>
                    </div>

                    <div class="add">
                      <p v-if="!phoneUser.phone_number && userLogin.phonenumber"><router-link class="link" to="/add-phone">Add Phone Number</router-link></p>
                      <p v-else></p>
                    </div>
                    <div class="box-manage-phone" v-for="data in phoneUser" :key="data.id">
                        <div class="box">
                            <div class="phone-number">
                                <span>Secondary</span>
                                <p> {{data.phone_number}} </p>
                            </div>
                            <button v-on:click="deletePhone(data.id)">
                            <img src="../../assets/img/trash.svg">
                            </button>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        </div>
        <Footer :authorFooter = "author" :hpFooter = "hp" :mailFooter = "mail"/>
    </div>
</template>

<script>
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Manage-Phone',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com',
      userId: null || localStorage.getItem('id'),
      dataPhones: []
    }
  },
  mounted () {
    this.getUserLogin()
    this.getPhone()
  },
  methods: {
    ...mapActions(['getUserLogin', 'getPhone', 'deletePhoneUser']),
    goHome () {
      this.$router.push('/')
    },
    goTransfer () {
      this.$router.push('/transfer')
    },
    goTopUp () {
      this.$router.push('/topup')
    },
    goProfile () {
      this.$router.push('/profil')
    },
    goLogout () {
      this.$router.push('/')
    },
    editPhone (id) {
      this.$router.push(`/add-phone-primary/${id}`)
    },
    deletePhone (id) {
      const payload = {
        id
      }
      this.deletePhoneUser(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted success',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/manage-phone')
        })
        .catch((err) => {
          console.log(err.response.data.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Deleted failed',
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
  },
  computed: {
    ...mapGetters(['phoneUser', 'userLogin'])
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

.content .content-box section .box .content-title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #3A3D42;
    font-size: 18px;
    font-weight: bold;
}

.content .content-box section .box p {
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
    line-height: 28px;
    width: 70%;
    text-align: left;
}

.content .content-box section .box .add {
  display: flex;
  width: 100%;
  margin-top: 5%;
  justify-content: flex-end;
}

.content .content-box section .box .add p {
  width: max-content;
}

.content .content-box section .box .add p .link {
  text-decoration: none;
  color: rgb(99, 121, 244, 1);
}

.content .content-box section .box .add p .link:hover{
  color: rgba(0, 0, 0, 0.8);
}

.content .content-box section .box .box-manage-phone {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 92px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin-top: 3%;
}

.content .content-box section .box .box-manage-phone .box {
    display: flex;
    flex-direction: row;
    width: 95%;
    align-items: center;
}

.content .content-box section .box .box-manage-phone .box .phone-number {
    display: flex;
    flex-direction: column;
}

.content .content-box section .box .box-manage-phone .box .phone-number span {
    color: #7A7886;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
}

.content .content-box section .box .box-manage-phone .box .phone-number p {
    color: #514F5B;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: auto;
    width: max-content;
}

.content .content-box section .box .box-manage-phone .box button {
    width: 40px;
    height: 40px;
    margin-left: auto;
    border: none;
    background: transparent;
    cursor: pointer;
}

.content .content-box section .box .box-manage-phone .box button {
    width: 40px;
    height: 40px;
    margin-left: auto;
}

.content .content-box section .box .box-manage-phone .box button img {
    width: 28px;
    height: 28px;
}

@media only screen and (max-width: 576px) {
    .content {
        display: flex;
        width: 100%;
        height: max-content;
        margin-top: 15px;
    }

    .content .content-box{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 700px;
    }

    .content .content-box nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        border-radius: 15px;
    }

    .content .content-box nav ul{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100%;
    }

    .content .content-box nav ul li{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100%;
    }

    .content .content-box nav ul li p{
      display: none;
    }

    .content .content-box section{
        width: 100%;
        margin-top: 10px;
    }

    .button button {
      width: 35%;
      height: 50px;
    }
}
</style>
