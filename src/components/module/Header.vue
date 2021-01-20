<template>
    <div>
        <header>
        <div class="box">
            <div class="title">Zwallet</div>
            <div class="profil">
                <img @click.prevent="changePage()" src="../../assets/img/profil-foto.png">
                <div class="name">
                    <span> {{getUser.username}} </span>
                    <p>+62 8139 3877 7946</p>
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
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  methods: {
    changePage () {
      this.$router.push('/profil')
    }
  },
  computed: {
    ...mapGetters(['getUser'])
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
    margin-right: 6%;;
}

header .box .profil .name {
    width: 180px;
    color: #3A3D42;
    display: flex;
    flex-direction: column;
    height: 50px;
}

header .box .profil .name span {
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
</style>
