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
                <div class="balance-box">
                    <div class="money-balance">
                        <p>Balance</p>
                        <span>Rp. {{userLogin.balance}}</span>
                        <p v-if="userLogin.phonenumber">{{userLogin.phonenumber}}</p>
                        <p v-else> +62 - </p>
                    </div>
                    <div class="transfer-topup">
                        <div @click="toTransfer">
                            <img src="../../assets/img/arrow-up-transfer.svg">
                            <p>Transfer</p>
                        </div>
                        <div @click="toTopup">
                            <img src="../../assets/img/plus-topup.svg">
                            <p>Top Up</p>
                        </div>
                    </div>
                </div>

                <div class="two-content">
                    <div class="chart">
                        <div class="income-expense">
                            <div class="income">
                                <img src="../../assets/img/arrow-up-green.svg">
                                <p>Income</p>
                                <span>Rp2.120.000</span>
                            </div>
                            <div class="expense">
                                <img src="../../assets/img/arrow-up-red.svg">
                                <p>Expense</p>
                                <span>Rp1.560.000</span>
                            </div>
                        </div>
                        <div class="graph">
                            <img src="../../assets/img/graphic.svg">
                        </div>
                    </div>
                    <div class="transaction-history">
                        <div class="box-transaction">
                            <div class="transaction-history-title">
                                <span>Transaction History</span>
                                <p @click="goTransactionHistory">See all</p>
                            </div>
                            <div class="transaction" v-for="transactions in resultTransactions" :key="transactions.idTransfer">
                                <img v-if="transactions.picture" :src="transactions.picture">
                                <img v-else src="../../assets/default.jpg">
                                <div class="status">
                                    <div class="name">{{transactions.firstname}}</div>
                                    <p>Transfer</p>
                                </div>
                                <div class="money-two">Rp. {{transactions.amount}}</div>
                            </div>
                        </div>
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
      mail: 'contact@zwallet.com'
    }
  },
  methods: {
    ...mapActions(['getUserLogin', 'getTransactionLogin']),
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
    toTopup () {
      this.$router.push({ name: 'Topup' })
    },
    toTransfer () {
      this.$router.push({ name: 'Transfer' })
    },
    goTransactionHistory () {
      this.$router.push({ name: 'TransactionHistory' })
    }
  },
  mounted () {
    this.getTransactionLogin()
    this.getUserLogin()
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
    width: 73%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: auto;
}

.content .content-box section .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.content .content-box section .box .balance-box {
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: center;
    align-items: center;
    background-color: #6379F4;
    border-radius: 20px;
}

.content .content-box section .box .balance-box .money-balance {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    justify-content: space-around;
}

.content .content-box section .box .balance-box .money-balance p {
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    color: #E0E0E0;
}

.content .content-box section .box .balance-box .money-balance span {
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #FFFFFF;
}

.content .content-box section .box .balance-box .transfer-topup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    justify-content: center;
}

.content .content-box section .box .balance-box .transfer-topup div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    width: 162px;
    height: 57px;
    margin-top: 3%;
    cursor: pointer;
}

.content .content-box section .box .balance-box .transfer-topup div img {
    width: 28px;
    height: 28px;
}

.content .content-box section .box .balance-box .transfer-topup div p {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-left: 5%;
}

.content .content-box section .box .two-content {
    display: flex;
    flex-direction: row !important;
    width: 100%;
    height: 75%;
    margin-top: 3%;
}

.content .content-box section .box .two-content .chart {
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    justify-content: center;
    align-items: center;
}

.content .content-box section .box .two-content .chart .income-expense {
    display: flex;
    width: 90%;
    height: 25%;
}

.content .content-box section .box .two-content .chart .income-expense .income {
    width: 70%;
    height: 100%;
}

.content .content-box section .box .two-content .chart .income-expense .income img {
    width: 28px;
    height: 28px;
}

.content .content-box section .box .two-content .chart .income-expense .income p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #6A6A6A;
}

.content .content-box section .box .two-content .chart .income-expense .income span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

/*  */
.content .content-box section .box .two-content .chart .income-expense .expense {
    width: 30%;
    height: 100%;
}

.content .content-box section .box .two-content .chart .income-expense .expense img {
    width: 28px;
    height: 28px;
}

.content .content-box section .box .two-content .chart .income-expense .expense p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #6A6A6A;
}

.content .content-box section .box .two-content .chart .income-expense .expense span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

.content .content-box section .box .two-content .chart .graph {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 60%;
    margin-top: 5%;
}

.content .content-box section .box .two-content .chart .graph img {
    width: 341px;
    height: 268px;
}

.content .content-box section .box .two-content .transaction-history {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-left: auto;
}

.content .content-box section .box .two-content .transaction-history .box-transaction {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction-history-title {
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 3%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction-history-title span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction-history-title p {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #6379F4;
    margin-left: auto;
    width: max-content;
    cursor: pointer;
}

.content .content-box section .box .two-content .transaction-history .box-transaction p {
    font-size: 16px;
    font-weight: normal;
    color: #7A7886;
    margin-top: 5%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction p.month {
    margin-top: 13%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction {
    display: flex;
    align-items: center;
    margin-top: 5%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction img {
    width: 56px;
    height: 56px;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .transaction .status {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .status .name {
    color: #4D4B57;
    font-size: 16px;
    font-weight: bold;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .status p {
    color: #7A7886;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 0;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .money-one {
    color: #1EC15F;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
}

.content .content-box section .box .two-content .transaction-history .box-transaction .money-two {
    color: #FF5B37;
    ;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
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
        height: max-content;
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

    .content .content-box section .box{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .content .content-box section .box .balance-box .transfer-topup div {
      width: 130px;
      height: 50px;
    }

    .content .content-box section .box .two-content {
      display: flex;
      flex-direction: column !important;
      width: 100%;
    }

    .content .content-box section .box .two-content .chart{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .content .content-box section .box .two-content .transaction-history{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
    }
}
</style>
