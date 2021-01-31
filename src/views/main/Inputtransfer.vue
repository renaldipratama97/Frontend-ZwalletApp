<template>
    <div>
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
                <div class="page-title">Transfer Money</div>

                <div class="box-sendto">
                  <img src="../../assets/default.jpg" alt="picture">
                  <div class="name-phone">
                    <div class="name">{{toTransfer.username}}</div>
                    <div class="phone">{{toTransfer.phonenumber}}</div>
                  </div>
                </div>

                <div class="description">Type the amount you want to transfer and then press continue to the next steps.</div>

                <div class="amount">
                  <input type="text" v-model="amount" name="amount" placeholder="0.00">
                </div>

                <div class="balance">Rp. {{userLogin.balance}} Avalaible</div>

                <div class="notes">
                  <input type="text" v-model="notes" name="notes" placeholder="Add some notes">
                </div>

                <div class="button">
                  <button @click.prevent="prosesTransfer">Transfer</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer :authorFooter = "author" :hpFooter = "hp" :mailFooter = "mail"/>
    </div>
    </div>
</template>

<script>
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'InputTransfer',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com',
      amount: '',
      notes: ''
    }
  },
  mounted () {
    this.getParams()
    this.getUserToTransfer()
    this.getUserLogin()
  },
  methods: {
    ...mapActions(['getUserToTransfer', 'getUserLogin', 'transfer']),
    getParams () {
      const payload = {
        id: this.$route.params.receiverId
      }
      this.getUserToTransfer(payload)
    },
    prosesTransfer () {
      const payload = {
        sender_id: localStorage.getItem('id'),
        receiver_id: this.$route.params.receiverId,
        amount: this.amount,
        notes: this.notes
      }
      console.log(payload)
      this.transfer(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Transfer success',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Transfer failed',
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
  },
  computed: {
    ...mapGetters(['toTransfer', 'userLogin'])
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
  height: 650px;
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

.box .page-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
}

.box .box-sendto {
  display: flex;
  align-items: center;
  width: 100%;
  height: 110px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 5%;
}

.box .box-sendto img {
  background-blend-mode: normal;
  border-radius: 10px;
  width: 70px;
  height: 70px;
  margin-left: 3%;
}

.box .box-sendto .name-phone {
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-left: 3%;
}

.box .box-sendto .name-phone .name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #4D4B57;
}

.box .box-sendto .name-phone .phone{
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7A7886;
  margin-top: auto;
}

.box .description {
  display: flex;
  width: 336px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  margin-top: 5%;
}

.box .amount {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  margin-top: 5%;
}

.box .amount input {
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  text-align: center;
  background: transparent;
  color: #494949;
  border: none;
}

.box .amount input:focus {
  outline: none;
  background: transparent;
}

.box .balance {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #3A3D42;
  margin-top: 3%;
}

.box .notes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
}

.box .notes input {
  width: 343px;
  height: 35px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(29, 29, 29, 0.8);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  margin-top: 5%;
}

.box .notes input:focus {
  outline: none;
}

.box .button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: max-content;
  margin-top: 5%;
}

.box .button button {
  background: #6379F4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  Width: 170px;
  Height: 57px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  border: none;
  cursor: pointer;
}

.box .button button:hover {
    background: #3754f8;
}

.box .button button:focus {
  outline: none;
}
</style>
