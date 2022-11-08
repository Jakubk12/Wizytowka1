<template>
    <button class="switch-left">Left</button>
</template>

<style lang="scss" scoped>
.switch-left {
     height: 4%;
        background: #80ced6;
        float: left;
        cursor: pointer;
        transition: .2s all;
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 900;
        border: none;
        width: 8%;
        text-decoration: white;
        
    &:hover{
        background: #FF521B;
        text-decoration: black;
        transition: 0.2s all;
        text-transform: uppercase;
        color: black
    }
    }
        @media all and (max-width:900px) {
            .switch-left {
            width: 15%;
            }
        }
    
</style>