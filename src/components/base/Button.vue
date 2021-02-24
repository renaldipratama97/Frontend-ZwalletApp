<template>
    <div>
        <button v-set-font:small>{{name}}</button>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String
  }
}
</script>

<style scoped>
button {
    position: relative;
    top: 40px;
    width: 100%;
    height: 57px;
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    background: #DADADA;
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
    color: #88888F;
}
button:focus {
    outline: none;
}
@media (max-width: 1300px) {
    button {
        width: 100%;
        height: 57px;
    }
}
@media (max-width: 1100px) {
    button {
        width: 280px;
        height: 57px;
    }
}
@media (max-width: 992px) {
    button {
        width: 280px;
        height: 57px;
    }
}
@media (max-width: 768px) {
    button {
        width: 100%;
        height: 57px;
    }
}
@media (max-width: 590px) {
    button {
        width: 100%;
        height: 57px;
    }
}
@media (max-width: 458px) {
    button {
        top: 40px;
    }
}
@media (max-width: 320px) {
    button {
        top: 50px;
    }
}
</style>
