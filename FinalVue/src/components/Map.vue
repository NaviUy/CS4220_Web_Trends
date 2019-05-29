<template>
<img v-bind:src="newMap()">
</template>

<script>

export default {
name: 'my-map',
props: ['newURL'],
data: function(){
        return {

        }
    },
methods:{
    newMap: function(){
        //alert(this.newURL)
        return this.newURL
    },
}
}
</script>
