<template>
    <div>
        <header>
        <div class="box">
            <div class="title">Zwallet</div>
            <div class="profil">
                <img @click.prevent="changePage()" v-if="userLogin.picture" :src="userLogin.picture">
                <img @click.prevent="changePage()" v-else src="../../assets/default.jpg">
                <div class="name">
                    <span> {{userLogin.username}} </span>
                    <p v-if="userLogin.phonenumber"> {{userLogin.phonenumber}} </p>
                    <p v-else> +62 - </p>
                </div>
                <div class="notification">
                    <img src="../../assets/img/bell.png">
                </div>
            </div>
        </div>
    </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions(['getUserLogin', 'getPhone']),
    changePage () {
      this.$router.push('/profil')
    }
  },
  mounted () {
    this.getUserLogin()
    this.getPhone()
  },
  computed: {
    ...mapGetters(['userLogin', 'phoneUser'])
  }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 140px;
    background-color: rgb(255, 255, 255, 1);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

header .box {
    display: flex;
    width: 75%;
    height: 100%;
    align-items: center;
    /* border: 1px solid black;    */
}

header .box .title {
    color: rgb(99, 121, 244, 1);
    font-size: 29px;
    font-weight: bold;
    line-height: 40px;
}

header .box .profil {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

header .box .profil img {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    margin-right: 6%;
    cursor: pointer;
}

header .box .profil .name {
    width: 150px;
    color: #3A3D42;
    display: flex;
    flex-direction: column;
    height: 50px;
}

header .box .profil .name span {
    width: max-content;
    font-size: 18px;
    font-weight: 700;
}

header .box .profil .name p {
    font-size: 13px;
    font-weight: 400;
    margin-top: 7px;
}

header .box .profil .notification {
    width: 18px;
    height: 15px;
}

header .box .profil .notification img {
    width: 18px;
    height: 15px;
}

@media only screen and (max-width: 480px) {
    header {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 150px;
    }

    header .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }

    header .box .profil {
        margin-left: 0;
    }
}
</style>
