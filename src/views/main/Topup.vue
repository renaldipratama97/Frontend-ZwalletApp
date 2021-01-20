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
                    <p>How to Top Up</p>
                    <article>
                        <span>1</span>
                        <p>Go to the nearest ATM or you can use E-Banking.</p>
                    </article>

                    <article>
                        <span>2</span>
                        <p>Type your security number on the ATM or E-Banking.</p>
                    </article>

                    <article>
                        <span>3</span>
                        <p>Select “Transfer” in the menu</p>
                    </article>

                    <article>
                        <span>4</span>
                        <p>Type the virtual account number that we provide you at the top.</p>
                    </article>

                    <article>
                        <span>5</span>
                        <p>Type the amount of the money you want to top up.</p>
                    </article>

                    <article>
                        <span>6</span>
                        <p>Read the summary details</p>
                    </article>

                    <article>
                        <span>7</span>
                        <p>Press transfer / top up</p>
                    </article>

                    <article>
                        <span>8</span>
                        <p>You can see your money in Zwallet within 3 hours.</p>
                    </article>
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
    this.getTransactions()
  },
  methods: {
    getTransactions () {
      axios.get('http://localhost:2000/transfers/').then(res => {
        this.dataTransactions = res.data
      }).catch((err) => {
        console.log(err)
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
  height: 900px;
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
    height: 95%;
}

.content .content-box section .box p {
    color: #3A3D42;
    font-size: 18px;
    font-weight: bold;
}

.content .content-box section .box article {
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;
    background-color: #FFFFFF;
    ;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin-top: 3%;
}

.content .content-box section .box article span {
    color: #6379F4;
    font-size: 18px;
    font-weight: bold;
    margin-left: 2%;
}

.content .content-box section .box article p {
    color: #7A7886;
    font-size: 16px;
    font-weight: normal;
    margin-left: 3%;
}
</style>
