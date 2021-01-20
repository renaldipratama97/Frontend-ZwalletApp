<template>
    <div>
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
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
nav {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 500px;
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 18px;
    font-weight: 400;
    color: rgba(58, 61, 66, 0.8);
}

nav ul li{
    list-style: none;
    display: flex;
    margin-top: 10%;
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
    margin-left: 5%;
}

nav ul li p .link {
    text-decoration: none;
    color: rgba(58, 61, 66, 0.8);
}

nav ul li p .link:hover {
    color: rgb(99, 121, 244, 1);
}
</style>
