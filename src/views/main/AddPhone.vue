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
                    <li><img src="../../assets/img/log-out.png"><p><router-link class="link" to="/auth/login">Logout</router-link></p></li>
                </ul>
            <!-- </div> -->
            </nav>
            <section>
                <div class="box">
                    <div class="content-title">Add Phone Number</div>
                    <p>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>

                    <div class="box-password">
                        <div class="input-password">
                            <img src="../../assets/img/phone-logo.svg">
                            <div class="code-phone">+62</div>
                            <input type="text" v-model="number_phone" placeholder="Enter your phone number">
                        </div>

                        <button @click.prevent="addPhones">Add Phone Number</button>
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
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'AddPhone',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com',
      number_phone: '',
      dataPhones: []
    }
  },
  methods: {
    ...mapActions(['addPhone']),
    addPhones () {
      console.log('Ini perintah add phones')
      const payload = {
        id_user: localStorage.getItem('id'),
        phone_number: this.number_phone
      }
      this.addPhone(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Phonenumber has been add',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/manage-phone')
        })
        .catch((err) => {
          console.log(err.response.data.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Failed to add phonenumber',
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
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

.content .content-box section .box .box-password {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

}

.content .content-box section .box .box-password .input-password {
    display: flex;
    width: 50%;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    height: 37px;
    align-items: center;
    color: rgba(169, 169, 169, 0.8);
    margin-top: 10%;
}

.content .content-box section .box .box-password .input-password .code-phone {
    margin-left: 3%;
    font-size: 16px;
    font-weight: 600;
    color: #3A3D42;
}

.content .content-box section .box .box-password .input-password input {
    border: none;
    margin-left: 3%;
    font-size: 16px;
    font-weight: normal;
    color: rgba(169, 169, 169, 0.8);
    background: transparent;
}

.content .content-box section .box .box-password .input-password input::placeholder {
    color: rgba(169, 169, 169, 0.8);
}

.content .content-box section .box .box-password .input-password input:focus {
    outline: none;
}

.content .content-box section .box .box-password .input-password img {
    width: 24px;
    height: 24px;
}

.content .content-box section .box .box-password button {
    width: 50%;
    height: 57px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    background-color: #DADADA;
    border: none;
    margin-top: 10%;
    color: #88888F;
    font-size: 18px;
    font-weight: bold;
}

.content .content-box section .box .box-password button:focus {
    outline: none;
}

.content .content-box section .box .box-password button:hover {
    background-color: #6379F4;
    color: #FFFFFF;
}
</style>
