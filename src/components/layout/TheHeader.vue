<template>
<div class="main">
    <nav>
     <h1> <router-link to="/routercomponents"><button class="inner">Home</button></router-link></h1>
     <p class="animated">Welcome to frontend developer's card</p>

                <h1><router-link to="/routercomponents/:id"><button class="inner">Projects</button></router-link> </h1>
                     <h1>   <router-link to="/projects"><button class="inner">About</button></router-link> </h1>
      
    </nav>
    
</div>
</template>

<style scoped lang="scss">
.main {
        margin-right: 0;
        width: 100%;
        display: flex;
    height: 180px;
    background-color: #3d008d;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;
  .animated {
    animation: grow-animation 20s linear infinite, color-change 8s infinite;
      list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
    
  }
  @keyframes grow-animation {
    0%{transform:scale(1.0)}
    25%{transform:scale(1.50)}
    50%{transform:scale(2.00)}
    75%{transform:scale(1.50)}
    100%{transform:scale(1.00)}
  }
}

@keyframes color-change {
  0% { color: #ffa200; }
  25% { color: #16142e}
  50% { color: #0eff00;}
  75% { color: #16142e }
  100% { color: #ffa200; }
}

  .main nav {
     width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }


.inner {
  background-color: #3d008d;
  margin: 0 6.5rem;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  color: White;
  font-weight: 900;
  border: 0;

  
  &:hover {
    background-color: #f18973;
    color: black;
    cursor: pointer;
     transition: 1.2s all;
     text-decoration:black;
     &::after {
        background-color: #3d008d;
        color: White;
        transition: 1.2s all;
        



     }
  }
  
  
     
}

        @media all and (max-width:1000px) {
        .main {  display: flex; 
        height: 30vh;  
        justify-content: space-around;    }
        .animated {
          scale: 0.75
        }
        .inner {
          margin: 0 auto;
        }
        }
         @media all and (max-width:600px) {
        .inner {  
          
        }
        }
h1 {
    margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}


</style>