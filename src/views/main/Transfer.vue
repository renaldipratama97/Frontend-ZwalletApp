<template>
    <div>
        <Header />
        <div class="content">
          <div class="content-box">
            <nav>
                <ul>
                    <li><img @click.prevent="goHome" src="../../assets/img/grid.png"><p><router-link class="link" to="/">Dashboard</router-link></p></li>
                    <li><img @click.prevent="goTransfer" src="../../assets/img/arrow-up.png"><p><router-link class="link" to="/transfer">Transfer</router-link></p></li>
                    <li><img @click.prevent="goTopUp" src="../../assets/img/plus.png"><p><router-link class="link" to="/topup">Topup</router-link></p></li>
                    <li><img @click.prevent="goProfile" src="../../assets/img/user.png"><p><router-link class="link" to="/profil">Profil</router-link></p></li>
                    <li><img @click.prevent="goLogout" src="../../assets/img/log-out.png"><p><router-link class="link" to="/">Logout</router-link></p></li>
                </ul>
            </nav>
            <section>
                <div class="box">
                  <div class="title-sort">
                    <div class="search-receiver">Search Receiver</div>
                    <div class="sort">
                      <button @click.prevent="ascSort">ASC</button>
                      <button @click.prevent="descSort">DESC</button>
                    </div>
                  </div>
                    <div class="search-input">
                        <img src="../../assets/img/search.png">
                        <input type="text" @keyup.enter="searchReceiver" name="search" id="search"  placeholder="Search receiver here" autocomplete="off">
                    </div>
                    <div class="box-to-box" v-for="data in resultSearch" :key="data.id">
                        <img v-if="data.picture" :src="data.picture">
                        <img v-else src="../../assets/default.jpg">
                        <router-link class="link" :to="{ path: `/input-transfer/${data.id}` }">
                        <div class="box-profile">
                            <span>{{data.username}}</span>
                            <p v-if="data.phonenumber"> {{data.phonenumber}} </p>
                            <p v-else> - </p>
                        </div>
                        </router-link>
                    </div>
                    <div class="pagination">
                      <div class="button-pagination">
                        <button v-if="pagination.prevPage" @click.prevent="previousPagination">&laquo;</button>
                        <button v-else class="disabled-page">&laquo;</button>
                        <button>{{pagination.currentPage}}</button>
                        <button v-if="pagination.nextPage" @click.prevent="nextPagination">&raquo;</button>
                        <button v-else class="disabled-page">&raquo;</button>
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
    this.sortUser('ASC')
  },
  methods: {
    ...mapActions(['searchUser', 'sortUser', 'paginationUsers']),
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
    searchReceiver (e) {
      this.searchUser(e.target.value)
    },
    ascSort () {
      this.sortUser('ASC')
    },
    descSort () {
      this.sortUser('DESC')
    },
    previousPagination () {
      const payload = {
        page: parseInt(this.pagination.currentPage) - 1
      }
      this.paginationUsers(payload)
    },
    nextPagination () {
      const payload = {
        page: parseInt(this.pagination.currentPage) + 1
      }
      this.paginationUsers(payload)
    }
  },
  computed: {
    ...mapGetters(['resultSearch', 'pagination'])
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

.box .title-sort {
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
}

.box .title-sort .search-receiver{
  display: flex;
  width: 50%;
  font-size: 18px;
  font-weight: 700;
  color: #3A3D42;
  margin-left: 0px;
}

.box .title-sort .sort{
  display: flex;
  width: 50%;
}

.box .title-sort .sort button{
  width: 15%;
  height: 30px;
  background: #6379F4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  cursor: pointer;
}

.box .title-sort .sort button:hover {
  background: #2243fa;
}

.box .title-sort .sort button:nth-child(1){
  margin-left: auto;
  margin-right: 2%;
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
    width: max-content;
}

.content .content-box section .box .box-to-box .box-profile p {
    color: #7A7886;
    ;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
}

.pagination .button-pagination {
  display: flex;
  width: max-content;
  height: max-content;
}

.pagination .button-pagination button {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background: #6379F4;
  border: none;
  color: white;
  cursor: pointer;
}

.pagination .button-pagination button:nth-child(2) {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background: #f6f7ff;
  border: none;
  color: #6379F4;
  cursor: not-allowed;
}

.pagination .button-pagination button:focus {
  outline: none;
}

.pagination .button-pagination button.disabled-page {
  background: #797979;
  cursor: not-allowed;
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
        height: 900px;
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

    .box .title-sort .sort button{
  width: 25%;
  height: 30px;
  background: #6379F4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  cursor: pointer;
}
}
</style>
