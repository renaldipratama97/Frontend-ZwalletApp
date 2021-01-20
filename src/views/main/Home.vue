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
                <div class="balance-box">
                    <div class="money-balance">
                        <p>Balance</p>
                        <span>Rp120.000</span>
                        <p>+62 813-9387-7946</p>
                    </div>
                    <div class="transfer-topup">
                        <div>
                            <img src="../../assets/img/arrow-up-transfer.svg">
                            <p>Transfer</p>
                        </div>
                        <div>
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
                        <div class="box">
                            <div class="transaction-history-title">
                                <span>Transaction History</span>
                                <p>See all</p>
                            </div>
                            <p>This Week</p>
                            <div class="transaction">
                                <img src="../../assets/img/man.png">
                                <div class="status">
                                    <div class="name">Samuel Suhi</div>
                                    <p>Transfer</p>
                                </div>
                                <div class="money-one">+Rp.50.000</div>
                            </div>

                            <div class="transaction">
                                <img src="../../assets/img/logo-netflix.png">
                                <div class="status">
                                    <div class="name">Netflix</div>
                                    <p>Subscription</p>
                                </div>
                                <div class="money-two">-Rp.149.000</div>
                            </div>

                            <p class="month">This Month</p>
                            <div class="transaction">
                                <img src="../../assets/img/women.png">
                                <div class="status">
                                    <div class="name">Christin Mar...</div>
                                    <p>Transfer</p>
                                </div>
                                <div class="money-one">+Rp.150.000</div>
                            </div>

                            <div class="transaction">
                                <img src="../../assets/img/logo-adobe.png">
                                <div class="status">
                                    <div class="name">Adobe Inc.</div>
                                    <p>Subscription</p>
                                </div>
                                <div class="money-two">-Rp.249.000</div>
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
import axios from 'axios'
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import { mapGetters } from 'vuex'

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
      firstName: ''
    }
  },
  mounted () {
    axios.get('http://localhost:2000/users/14').then(res => {
      this.firstName = res.data.result.firstname
    }).catch((err) => {
      console.log(err)
    })
  },
  computed: {
    ...mapGetters({ getUser: 'getUser' })
  }
}
</script>

<style scoped>
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 678px;
  margin-top: 35px;
}

.content .content-box{
    width: 75%;
    height: 100%;
}

.content .content-box section {
    display: flex;
    flex-direction: column;
    width: 73%;
    height: 100%;
    margin-left: auto;
    background-color: transparent;
}

.content .content-box section .balance-box {
    display: flex;
    width: 100%;
    height: 25%;
    justify-content: center;
    align-items: center;
    background-color: #6379F4;
    border-radius: 20px;
}

.content .content-box section .balance-box .money-balance {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    justify-content: space-around;
}

.content .content-box section .balance-box .money-balance p {
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    color: #E0E0E0;
}

.content .content-box section .balance-box .money-balance span {
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #FFFFFF;
}

.content .content-box section .balance-box .transfer-topup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    justify-content: center;
}

.content .content-box section .balance-box .transfer-topup div {
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
}

.content .content-box section .balance-box .transfer-topup div img {
    width: 28px;
    height: 28px;
}

.content .content-box section .balance-box .transfer-topup div p {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-left: 5%;
}

.content .content-box section .two-content {
    display: flex;
    width: 100%;
    height: 72%;
    margin-top: 3%;
}

.content .content-box section .two-content .chart {
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

.content .content-box section .two-content .chart .income-expense {
    display: flex;
    width: 90%;
    height: 25%;
}

.content .content-box section .two-content .chart .income-expense .income {
    width: 70%;
    height: 100%;
}

.content .content-box section .two-content .chart .income-expense .income img {
    width: 28px;
    height: 28px;
}

.content .content-box section .two-content .chart .income-expense .income p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #6A6A6A;
}

.content .content-box section .two-content .chart .income-expense .income span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

/*  */
.content .content-box section .two-content .chart .income-expense .expense {
    width: 30%;
    height: 100%;
}

.content .content-box section .two-content .chart .income-expense .expense img {
    width: 28px;
    height: 28px;
}

.content .content-box section .two-content .chart .income-expense .expense p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #6A6A6A;
}

.content .content-box section .two-content .chart .income-expense .expense span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

.content .content-box section .two-content .chart .graph {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 60%;
    margin-top: 5%;
}

.content .content-box section .two-content .chart .graph img {
    width: 341px;
    height: 268px;
}

.content .content-box section .two-content .transaction-history {
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

.content .content-box section .two-content .transaction-history .box {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
}

.content .content-box section .two-content .transaction-history .box .transaction-history-title {
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 3%;
}

.content .content-box section .two-content .transaction-history .box .transaction-history-title span {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

.content .content-box section .two-content .transaction-history .box .transaction-history-title p {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #6379F4;
    margin-left: auto;
    width: max-content;
}

/*  */

.content .content-box section .two-content .transaction-history .box p {
    font-size: 16px;
    font-weight: normal;
    color: #7A7886;
    margin-top: 5%;
}

.content .content-box section .two-content .transaction-history .box p.month {
    margin-top: 13%;
}

.content .content-box section .two-content .transaction-history .box .transaction {
    display: flex;
    align-items: center;
    margin-top: 5%;
}

.content .content-box section .two-content .transaction-history .box .transaction img {
    width: 56px;
    height: 56px;
}

.content .content-box section .two-content .transaction-history .box .transaction .status {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
}

.content .content-box section .two-content .transaction-history .box .status .name {
    color: #4D4B57;
    font-size: 16px;
    font-weight: bold;
}

.content .content-box section .two-content .transaction-history .box .status p {
    color: #7A7886;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 0;
}

.content .content-box section .two-content .transaction-history .box .money-one {
    color: #1EC15F;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
}

.content .content-box section .two-content .transaction-history .box .money-two {
    color: #FF5B37;
    ;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
}
</style>
