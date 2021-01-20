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
                    <div class="search-receiver">Search Receiver</div>
                    <div class="search-input">
                        <img src="../../assets/img/search.png">
                        <input type="text" @keyup.enter="searchReceiver" name="search" id="search"  placeholder="Search receiver here" autocomplete="off">
                    </div>
                    <button>Sort A</button>
                    <button>Sort B</button>
                    <div class="box-to-box" v-for="data in resultSearch" :key="data.id">
                        <img src="../../assets/img/man.png">
                        <router-link class="link" :to="{ path: `/input-transfer/${data.id}` }">
                        <div class="box-profile">
                            <span>{{data.username}}</span>
                            <p> {{data.phonenumber}} </p>
                        </div>
                        </router-link>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Transfer',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      author: '2020 Zwallet. All right reserved',
      hp: '+62 5637 8882 9901',
      mail: 'contact@zwallet.com',
      firstname: ''
    }
  },
  mounted () {
    this.searchUser('')
  },
  methods: {
    ...mapActions(['searchUser']),
    searchReceiver (e) {
      console.log(e.target.value)
      this.searchUser(e.target.value)
    }
  },
  computed: {
    ...mapGetters(['resultSearch'])
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
    height: 90%;
}

.content .content-box section .box .search-receiver {
    font-size: 18px;
    font-weight: 700;
    color: #3A3D42;
    margin-left: 0px;
}

.content .content-box section .box .search-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 54px;
    background-color: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    margin-top: 3%;
}

.content .content-box section .box .search-input img {
    width: 24px;
    height: 24px;
    margin-left: 3%;
}

.content .content-box section .box .search-input input {
    margin-left: 3%;
    background: transparent;
    outline: none;
    border: none;
}

.content .content-box section .box .box-to-box {
    display: flex;
    align-items: center;
    height: 110px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-top: 5%;
    border-radius: 10px;
}

.content .content-box section .box .box-to-box img {
    width: 70px;
    height: 70px;
    margin-left: 3%;
}

.content .content-box section .box .box-to-box .box-profile {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
}

.link{
    color: #4D4B57;
    text-decoration: none;
    margin-left: 3%;
}

.content .content-box section .box .box-to-box .box-profile span {
    color: #4D4B57;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

.content .content-box section .box .box-to-box .box-profile p {
    color: #7A7886;
    ;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: auto;
}
</style>
