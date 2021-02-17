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
                    <div class="content-title">Personal Information</div>
                    <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                    <article>
                        <span @click.prevent="editFirstname">First Name</span>
                        <p v-if="userLogin.firstname">{{userLogin.firstname}}</p>
                        <p v-else>-</p>
                    </article>

                    <article>
                        <span  @click.prevent="editLastname">Last Name</span>
                        <p v-if="userLogin.lastname">{{userLogin.lastname}}</p>
                        <p v-else>-</p>
                    </article>

                    <article>
                        <span>Verified E-Mail</span>
                        <p>{{userLogin.email}}</p>
                    </article>

                    <router-link class="link" :to="{ path: `/manage-phone`}">
                    <article>
                        <span>Phone Number</span>
                        <p v-if="userLogin.phonenumber">{{userLogin.phonenumber}}</p>
                        <p v-else>+62</p>
                    </article>
                    </router-link>
                </div>
            </section>
          </div>
        </div>
        <Footer :authorFooter = "author" :hpFooter = "hp" :mailFooter = "mail"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import Swal from 'sweetalert2'

export default {
  name: 'Home',
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
    this.getUserLogin()
  },
  methods: {
    ...mapActions(['getUserLogin', 'updatefirstname', 'updatelastname']),
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
    navigationHandle () {
      this.router.push()
    },
    async editFirstname () {
      const { value: firstname } = await Swal.fire({
        title: 'Input your first name',
        input: 'text',
        inputLabel: 'Your first name',
        inputPlaceholder: 'Enter your first name'
      })

      if (firstname) {
        // Swal.fire(`Entered phone: ${phone}`)
        const payload = {
          id: localStorage.getItem('id'),
          firstname: firstname
        }
        await this.updatefirstname(payload)
      }
    },
    async editLastname () {
      const { value: lastname } = await Swal.fire({
        title: 'Input your last name',
        input: 'text',
        inputLabel: 'Your last name',
        inputPlaceholder: 'Enter your last name'
      })

      if (lastname) {
        // Swal.fire(`Entered phone: ${phone}`)
        const payload = {
          id: localStorage.getItem('id'),
          lastname: lastname
        }
        await this.updatelastname(payload)
      }
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
  height: 700px;
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
    color: #3A3D42;
    font-size: 18px;
    font-weight: bold;
    display: flex;
}

.content .content-box section .box p {
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
    line-height: 28px;
    width: 70%;
    text-align: left;
}

.content .content-box section .box article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 100%;
    height: 92px;
    margin-top: 3%;
}

.content .content-box section .box article span {
    margin-left: 3%;
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
    margin-top: 2%;
    cursor: pointer;
}

.content .content-box section .box article p {
    margin-left: 3%;
    color: #514F5B;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 2%;
}

.content .content-box section .box .profile p {
    color: #4D4B57;
    font-size: 24px;
    font-weight: bold;
    margin-top: 2%;
}

.link{
    text-decoration: none;
    color: #514F5B;
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
