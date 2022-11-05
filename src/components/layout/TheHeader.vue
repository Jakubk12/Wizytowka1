<template>
<div class="main">
    <nav>
     <h1> <router-link to="/routercomponents"><button class="inner">Home</button></router-link></h1>
              <ul>  <h1><router-link to="/routercomponents/:id"><button class="inner">Projects</button></router-link> </h1>
                     <h1>   <router-link to="/projects"><button class="inner">About</button></router-link> </h1>
        </ul>
    </nav>
    
</div>
</template>

<style scoped lang="scss">
.main {
    height: 150px;
    background-color: #3d008d;
     display: flex;
  justify-content: center;
  align-items: center;
  }
  .main nav {
     width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .main ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}
.inner {
  background-color: #3d008d;
  margin: 0 6.5rem;
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: White;
  font-weight: 900;
  border: 0;
  
  &:hover {
    background-color: #f18973;
    color: black;
    cursor: pointer;
     transition: 1.2s all;

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