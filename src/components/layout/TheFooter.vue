<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div class="footer">
      <div class="inner">
      <p>Contact Us</p>
    <a href="https://www.facebook.com/kuba.keska.9/" class="fa fa-facebook"></a>
<a class="fa fa-linkedin" href="https://www.linkedin.com/in/jakub-k%C4%99ska-a6643b24b/"></a>
<a class="fa fa-github" href="https://github.com/Jakubk12"></a>
</div>
    </div>
</template>


<style scoped lang="scss">
    .footer {
        width: 100%;
        height: 20vh;
        margin-bottom: 0;
        background:  #36486b;
        display: inline-block;
     margin-bottom: 0;
  text-align: left;
  padding: 2em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4em;
  font-weight: 900;
  line-height: 1.6em;
     @media all and (max-width:900px) {
      .footer {
        width: 100%;
        
      }
     }
     .inner {
      margin-left: 3vw;
     }
    }

    .fa {
  padding: 10px;
  font-size: 15px;
  width: 25px;
  text-align: center;
  text-decoration: none;
  transition: 0.2s all;
  margin: 0.2vw;

}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
  transform: scale(1.5)
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  border-radius: 50%;
  color: white;
}
/* Linkedin */
.fa-linkedin {
  background: #0e76a8;
  border-radius: 50%;
  color: white;

}
.fa-github {
    border-radius: 50%;
    background: #171515;
    color: white


}
</style>
<script>

</script>
