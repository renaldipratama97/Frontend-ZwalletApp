<template>
  <div>
    <div class="heading mb-4">
        <h2>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
        <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
    </div>

    <form @submit.prevent="goLogin">
        <div class="form-input">
            <span><i class="fas fa-envelope"></i></span>
            <Input v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" type="email" placeHolder="Enter your e-mail"/>
            <div class="invalid-feedback" v-if="!$v.email.required">Field is required.</div>
            <div class="invalid-feedback" v-if="!$v.email.email">invalid email</div>
        </div>

        <div class="form-input mt-5">
            <span><i class="fas fa-lock"></i></span>
            <Input id="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': validationStatus($v.password) }" type="password" placeHolder="Enter your password"/>
            <span class="span-eye"><i class="far fa-eye-slash" id="eye"></i></span>
            <input type="checkbox" class="toggle-password">
            <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
            <div class="invalid-feedback" v-if="!$v.password.minLength">Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
        </div>

        <div class="row mb-3">
            <div class="col-12 text-right">
                <router-link to="/auth/send-email-reset-password" class="forget-link">Forgot Password?</router-link>
            </div>
        </div>

        <div class="text-center mb-3">
            <Button type="submit" name="Login"/>
        </div>

        <div class="text-center mb-2">
            <div class="mb-3 sign-up">Don’t have an account? Let’s<router-link to="/auth/register"> Sign Up</router-link></div>
        </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Input from '../../../components/base/Input'
import Button from '../../../components/base/Button'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    Input,
    Button
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    ...mapActions(['login']),
    togglePasswword () {
      this.password = document.getElementById('password')
      if (this.password.type === 'password') {
        this.password.type = 'text'
      } else {
        this.password.type = 'password'
      }
    },
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    goLogin () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>
.form-box h2 {
    margin-top: 100px;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    font-style: normal;
    color: #3A3D42;
}
.form-box p {
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
}
.form-box .form-input {
    position: relative;
}
.form-box .form-input .is-invalid {
    border-bottom: 2px solid red;
}
.form-box .form-input .is-invalid:focus {
    border-bottom: 2px solid red;
    box-shadow: none;
}
.form-box .form-input .invalid-feedback,
.form-box .form-input .invalid-feedback-password {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: red;
  margin: 0;
  padding-top: 0;
  font-size: 12px;
}
.form-box .form-input .toggle-password {
    position: absolute;
    top: 20px;
    left: 390px;
    opacity: 0;
}
.form-box .form-input span {
    position: absolute;
    top: 8px;
    padding-left: 5px;
    color: rgba(169, 169, 169, 0.6);
}
.form-box .form-input span.span-eye {
    position: absolute;
    top: 15px;
    left: 380px;
}
.form-box .form-input span.span-eye:active {
    color: #000;
}
.forget-link {
    position: relative;
    top: 5px;
    font-style: normal;
    font-weight: 600;
    font-style: 14px;
    line-height: 24px;
    color: rgba(58, 61, 66, 0.8);
}
.forget-link:hover {
    text-decoration: none;
    color: rgba(58, 61, 66, 0.8);
}
.form-box .sign-up {
    position: relative;
    top: 50px;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    color:rgba(58, 61, 66, 0.8);
}
.form-box .sign-up a:hover {
    text-decoration: none;
}
@media (max-width: 1300px) {
    .form-box .form-input .toggle-password {
        left: 350px;
    }
    .form-box .form-input span.span-eye {
        left: 340px;
    }
}
@media (max-width: 1208px) {
    .form-box .form-input .toggle-password {
        left: 330px;
    }
    .form-box .form-input span.span-eye {
        left: 320px;
    }
}
@media (max-width: 1156px) {
    .form-box .form-input .toggle-password {
        left: 310px;
    }
    .form-box .form-input span.span-eye {
        left: 300px;
    }
    .forget-link {
        top: 30px;
    }
}
@media (max-width: 1100px) {
    .form-box .form-input .toggle-password {
        left: 290px;
    }
    .form-box .form-input span.span-eye {
        left: 280px;
    }
}
@media (max-width: 1042px) {
    .form-box .form-input .toggle-password {
        left: 260px;
    }
    .form-box .form-input span.span-eye {
        left: 250px;
    }
}
@media (max-width: 992px) {
    .form-box .form-input .toggle-password {
        left: 310px;
    }
    .form-box .form-input span.span-eye {
        left: 300px;
    }
}
@media (max-width: 966px) {
    .form-box .form-input .toggle-password {
        left: 300px;
    }
    .form-box .form-input span.span-eye {
        left: 290px;
    }
}
@media (max-width: 898px) {
    .form-box .form-input .toggle-password {
        left: 270px;
    }
    .form-box .form-input span.span-eye {
        left: 260px;
    }
}
@media (max-width: 824px) {
    .form-box .form-input .toggle-password {
        left: 240px;
    }
    .form-box .form-input span.span-eye {
        left: 230px;
    }
}
@media (max-width: 768px) {
    .form-box .form-input .toggle-password {
        left: 490px;
    }
    .form-box .form-input span.span-eye {
        left: 480px;
    }
}
@media (max-width: 744px) {
    .form-box .form-input .toggle-password {
        left: 470px;
    }
    .form-box .form-input span.span-eye {
        left: 460px;
    }
}
@media (max-width: 716px) {
    .form-box .form-input .toggle-password {
        left: 440px;
    }
    .form-box .form-input span.span-eye {
        left: 430px;
    }
}
@media (max-width: 699px) {
    .form-box .form-input .toggle-password {
        left: 430px;
    }
    .form-box .form-input span.span-eye {
        left: 420px;
    }
}
@media (max-width: 664px) {
    .form-box .form-input .toggle-password {
        left: 410px;
    }
    .form-box .form-input span.span-eye {
        left: 400px;
    }
}
@media (max-width: 642px) {
    .form-box .form-input .toggle-password {
        left: 390px;
    }
    .form-box .form-input span.span-eye {
        left: 380px;
    }
}
@media (max-width: 622px) {
    .form-box .form-input .toggle-password {
        left: 370px;
    }
    .form-box .form-input span.span-eye {
        left: 360px;
    }
}
@media (max-width: 590px) {
    .form-box .form-input .toggle-password {
        left: 350px;
    }
    .form-box .form-input span.span-eye {
        left: 340px;
    }
}
@media (max-width: 568px) {
    .form-box .heading {
        margin-top: -10%;
    }
    .form-box .form-input .toggle-password {
        left: 480px;
    }
    .form-box .form-input span.span-eye {
        left: 470px;
    }
}
@media (max-width: 554px) {
    .form-box .form-input span.span-eye {
        left: 440px;
    }
    .form-box .form-input .toggle-password {
        left: 450px;
    }
}
@media (max-width: 532px) {
    .form-box .form-input span.span-eye {
        left: 420px;
    }
    .form-box .form-input .toggle-password {
        left: 430px;
    }
}
@media (max-width: 506px) {
    .form-box .form-input span.span-eye {
        left: 400px;
    }
    .form-box .form-input .toggle-password {
        left: 410px;
    }
}
@media (max-width: 494px) {
    .form-box .form-input span.span-eye {
        left: 380px;
    }
    .form-box .form-input .toggle-password {
        left: 390px;
    }
}
@media (max-width: 470px) {
    .form-box .form-input span.span-eye {
        left: 360px;
    }
    .form-box .form-input .toggle-password {
        left: 370px;
    }
}
@media (max-width: 458px) {
    .form-box .form-input span.span-eye {
        left: 340px;
    }
    .form-box .form-input .toggle-password {
        left: 350px;
    }
}
@media (max-width: 424px) {
    .form-box .form-input span.span-eye {
        left: 320px;
    }
    .form-box .form-input .toggle-password {
        left: 330px;
    }
}
@media (max-width: 414px) {
    .form-box .form-input span.span-eye {
        left: 310px;
    }
    .form-box .form-input .toggle-password {
        left: 320px;
    }
}
@media (max-width: 396px) {
    .form-box .form-input span.span-eye {
        left: 290px;
    }
    .form-box .form-input .toggle-password {
        left: 300px;
    }
}
@media (max-width: 379px) {
    .form-box .form-input span.span-eye {
        left: 270px;
    }
    .form-box .form-input .toggle-password {
        left: 280px;
    }
    .form-box .sign-up {
        top: 30px;
    }
}
@media (max-width: 356px) {
    .form-box .form-input span.span-eye {
        left: 250px;
    }
    .form-box .form-input .toggle-password {
        left: 260px;
    }
}
@media (max-width: 336px) {
    .form-box .form-input span.span-eye {
        left: 230px;
    }
    .form-box .form-input .toggle-password {
        left: 240px;
    }
}
@media (max-width: 320px) {
    .form-box .form-input span.span-eye {
        left: 220px;
    }
    .form-box .form-input .toggle-password {
        left: 230px;
    }
    .form-box .sign-up {
        top: 50px;
    }
}
</style>
