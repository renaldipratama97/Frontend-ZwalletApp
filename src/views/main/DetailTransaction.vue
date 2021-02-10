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
              <div class="box" ref="pdfContent">
                <div class="success-logo">
                  <img src="../../assets/img/logo-success.svg" alt="">
                  <div class="success-title">Transfer Success</div>
                </div>

                <div class="white-box">
                  <div class="title">Amount</div>
                  <div class="data">Rp. {{detailTransaction.amount}}</div>
                </div>

                <div class="white-box">
                  <div class="title">Date & Time</div>
                  <div class="data">{{detailTransaction.date_time}}</div>
                </div>

                <div class="white-box">
                  <div class="title">Notes</div>
                  <div class="data">{{detailTransaction.notes}}</div>
                </div>

                <div class="transfer-to">Transfer to</div>

                <div class="transfer-box">
                  <img v-if="detailTransaction.picture" :src="detailTransaction.picture" alt="picture">
                  <img v-else src="../../assets/default.jpg" alt="picture">
                  <div class="name-phone">
                    <div class="name">{{detailTransaction.firstname}} {{detailTransaction.lastname}}</div>
                    <div class="phone">{{detailTransaction.phonenumber}}</div>
                  </div>
                </div>

              </div>

              <div class="button">
                  <button @click.prevent="printPDF">Download PDF</button>
                  <button @click.prevent="goHome">Back to Home</button>
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
const { JsPDF } = require('jspdf')
// import Swal from 'sweetalert2'
export default {
  name: 'DetailTransaction',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com'
    }
  },
  mounted () {
    this.getUserLogin()
    this.getData()
    this.getDetailTransaction()
  },
  methods: {
    ...mapActions(['getUserLogin', 'getDetailTransaction']),
    getData () {
      const payload = {
        id: this.$route.params.idTransfer
      }
      this.getDetailTransaction(payload)
    },
    goHome () {
      this.$router.push('/')
    },
    printPDF () {
      const doc = new JsPDF('p', 'pt', 'letter')

      const html = this.$refs.pdfContent.innerHTML

      doc.fromHTML(html, 15, 15, {
        width: 500
      })
      doc.save('ZwalletApp.pdf')
    }
  },
  computed: {
    ...mapGetters(['userLogin', 'detailTransaction'])
  }

}
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
}

html {
  scroll-behavior: smooth;
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
    flex-direction: column;
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
    height: max-content;
}

.box .success-logo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
}

.box .success-logo img {
  width: 70px;
  height: 70px;
}

.box .success-logo .success-title{
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #4D4B57;
}

.box .white-box{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 2%;
}

.box .white-box .title{
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7A7886;
  margin-left: 2%;
}

.box .white-box .data{
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #514F5B;
  margin-left: 2%;
}

.box .transfer-to {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #514F5B;
  margin-top: 2%;
}

.box .transfer-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 2%;
}

.box .transfer-box img {
  border-radius: 10px;
  width: 70px;
  height: 70px;
  margin-left: 2%;
}

.box .transfer-box .name-phone {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 2%;
}

.box .transfer-box .name-phone .name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #4D4B57;
}

.box .transfer-box .name-phone .phone {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #7A7886;
}

.button {
  display: flex;
  width: 90%;
  height: max-content;
  justify-content: flex-end;
  margin-top: 5%;
}

.button button {
  width: 25%;
  height: 50px;
  background: #6379F4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  border: none;
  color: #FFFFFF;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
}

.button button:hover {
  background: #2b4af8;
}

.button button:nth-child(1) {
  margin-right: 2%;
}
</style>
