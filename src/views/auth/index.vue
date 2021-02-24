<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-md-7 d-none d-sm-block background-container">
          <h1>Zwallet</h1>

          <div class="image-container">
            <img
              src="../../assets/img-auth/png-phone2.png"
              alt="phone"
              class="img-responsive phone2"
            />
            <img
              src="../../assets/img-auth/png-phone.png"
              alt="phone"
              class="img-responsive phone"
            />
          </div>

          <h2>App that Covering Banking Needs.</h2>
          <p>
            Zwallet is an application that focussing in banking needs for all
            users<br />in the world. Always updated and always following world
            trends.<br />
            5000+ users registered in Zwallet everyday with worldwide<br />users
            coverage.
          </p>
        </div>
        <div class="col-lg-5 col-md-5 form-container">
          <div class="col-lg-10 col-md-12 col-sm-9 col-xs-12 form-box">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.container-fluid {
  position: relative;
  font-size: 16px;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
}
.background-container {
  background-image: url("../../assets/img-auth/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 150vh;
  position: relative;
}
.background-container h1 {
  position: absolute;
  left: 13%;
  top: 5.2%;
  bottom: 90.63%;
  color: #fff;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  font-style: normal;
}
.background-container h2 {
  position: absolute;
  left: 14%;
  top: 78%;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  font-style: normal;
}
.background-container p {
  position: absolute;
  left: 14%;
  top: 86%;
  font-weight: normal;
  line-height: 23px;
  font-style: normal;
}
.background-container .img-container {
  display: flex;
  position: relative;
}
.background-container .img-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.background-container .phone {
  position: absolute;
  left: 250px;
  top: 120px;
}
.background-container .phone2 {
  position: absolute;
  left: 95px;
  top: 120px;
}
.form-container {
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.form-box {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1300px) {
  .background-container {
    height: 150vh;
  }
  .background-container .phone {
    left: 210px;
  }
  .background-container .phone2 {
    left: 50px;
  }
  .background-container h2 {
    left: 80px;
  }
  .background-container p {
    left: 80px;
  }
}
@media (max-width: 1100px) {
  .background-container .phone {
    left: 180px;
  }
  .background-container .phone2 {
    left: 20px;
  }
  .background-container h2 {
    left: 60px;
  }
  .background-container p {
    left: 60px;
  }
}
@media (max-width: 992px) {
  .background-container {
    height: 170vh;
  }
  .background-container .phone {
    left: 170px;
  }
  .background-container .phone2 {
    left: 10px;
  }
  .background-container h2 {
    top: 700px;
    left: 50px;
  }
  .background-container p {
    top: 760px;
    left: 50px;
  }
}
@media (max-width: 928px) {
  .background-container h2 {
    left: 30px;
  }
  .background-container p {
    left: 30px;
  }
}
@media (max-width: 858px) {
  .background-container .phone {
    left: 130px;
  }
  .background-container .phone2 {
    left: -10px;
  }
}
@media (max-width: 844px) {
  .background-container .phone {
    left: 130px;
  }
  .background-container .phone2 {
    left: -30px;
  }
}
@media (max-width: 802px) {
  .background-container .phone {
    left: 110px;
  }
}
@media (max-width: 768px) {
  .background-container {
    height: 160vh;
  }
  .background-container .phone {
    left: 300px;
  }
  .background-container .phone2 {
    left: 130px;
  }
  .background-container h2 {
    left: 120px;
  }
  .background-container p {
    left: 120px;
  }
}
@media (max-width: 720px) {
  .background-container .phone {
    left: 250px;
  }
  .background-container .phone2 {
    left: 90px;
  }
}
@media (max-width: 699px) {
  .background-container .phone {
    left: 250px;
  }
  .background-container .phone2 {
    left: 90px;
  }
}
@media (max-width: 664px) {
  .background-container .phone {
    left: 220px;
  }
  .background-container .phone2 {
    left: 50px;
  }
}
@media (max-width: 622px) {
  .background-container .phone {
    left: 200px;
  }
  .background-container .phone2 {
    left: 40px;
  }
  .background-container h2 {
    left: 90px;
  }
  .background-container p {
    left: 90px;
  }
}
@media (max-width: 590px) {
  .background-container .phone {
    left: 220px;
  }
  .background-container .phone2 {
    left: 50px;
  }
  .background-container h2 {
    left: 70px;
  }
  .background-container p {
    left: 70px;
  }
}
@media (max-width: 576px) {
  .background-container .phone {
    left: 200px;
  }
  .background-container .phone2 {
    left: 30px;
  }
}
</style>
