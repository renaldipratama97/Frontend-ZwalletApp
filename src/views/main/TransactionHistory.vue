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
                <div class="page-title">Transactions History</div>

                <div class="box-history-transfer">
                  <div @click="goDetailTransfer(transactions.idTransfer)" class="white-box" v-for="transactions in resultTransactions" :key="transactions.idTransfer">
                    <img v-if="transactions.picture" :src="transactions.picture" alt="picture">
                    <img v-else src="../../assets/default.jpg" alt="picture">
                    <div class="name-transfer">
                      <div class="name">{{transactions.firstname}}</div>
                      <div class="transfer">Transfer</div>
                    </div>
                    <div class="amount">Rp. {{transactions.amount}}</div>
                  </div>

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
// import Swal from 'sweetalert2'
export default {
  name: 'TransactionHistory',
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
    this.getTransactionLogin()
  },
  methods: {
    ...mapActions(['getUserLogin', 'getTransactionLogin']),
    goDetailTransfer (idTransfer) {
      this.$router.push({ name: 'DetailTransaction', params: { idTransfer } })
    }
  },
  computed: {
    ...mapGetters(['userLogin', 'resultTransactions'])
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

.box-history-transfer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  overflow:auto;
  scroll-behavior: smooth;
}

.box-history-transfer .white-box {
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

.box-history-transfer .white-box img{
  border-radius: 10px;
  width: 56px;
  height: 56px;
  margin-left: 2%;
  cursor: pointer;
}

.box-history-transfer .white-box .name-transfer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: normal;
  color: #4D4B57;
  height: 100%;
  margin-left: 3%;
}

.box-history-transfer .white-box .name-transfer .name{
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
}

.box-history-transfer .white-box .name-transfer .transfer{
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
}

.box-history-transfer .white-box .amount{
  display: flex;
  margin-left: auto;
  margin-right: 3%;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #ff0000;
}

</style>
