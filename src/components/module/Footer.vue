<template>
    <div>
        <footer>
        <div class="box">
            <div class="author"> {{authorFooter}} </div>
            <div class="contact-hp"> {{hpFooter}} </div>
            <div class="contact-mail"> {{mailFooter}} </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    authorFooter: {
      type: String,
      required: true
    },
    hpFooter: {
      type: String,
      required: true
    },
    mailFooter: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
footer {
    display: flex;
    width: 100%;
    height: 68px;
    background-color: rgb(99, 121, 244, 1);
    color: white;
    justify-content: center;
    margin-top: 35px;
}

footer .box {
    display: flex;
    width: 75%;
    align-items: center;
}

footer .box .author {
    width: 229px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}

footer .box .contact-hp {
    width: auto;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    margin-right: 40px;
    margin-left: auto;
}

footer .box .contact-mail {
    width: auto;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
}

@media only screen and (max-width: 480px) {
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max-content;
    }

    footer .box{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        height: max-content;
    }

    footer .box .contact-hp {
      margin-left: 0;
    }
}
</style>
