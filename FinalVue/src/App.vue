<template>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>CS4220 Final</title>
</head>
<body>
    <div class="container">
        <div id="myLocation">
        <div class="jumbotron">
            <h4 class="display-4">
                My Location
            </h4>
            <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
            <hr>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="lat" id="lat" placeholder="Latitude" class="form-control" v-model="lat">
                    </div>
                    <div class="col">
                        <input type="text" name="lon" id="lon" placeholder="Longitude" class="form-control" v-model="lon">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                                    <input type="submit" value="Show My Location" class="btn btn-primary mt-4" v-on:click="myMap">
                    </div>
                </div>
            </form>
        </div>

      <mymap v-bind:newURL="newURL"></mymap>
    </div>
    </div>
</body>
</html>
</template>

<script>

import Map from './components/Map.vue'

export default {
  name: 'app',
  data () {
    return {
    lon: '',
    lat: '',
    url: "https://maps.googleapis.com/maps/api/staticmap?center=",
    zoom:"&zoom=14",
    size: "&size=500x500",
    marker: "&markers=color:red%7C",
    apikey: "&key=AIzaSyDmQDxwaAY7bAMqpNB4NiiQRxgrPjG58cc",
    newURL: "https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=14&size=500x500&markers=color:red%7C0,0&key=AIzaSyDmQDxwaAY7bAMqpNB4NiiQRxgrPjG58cc"

    }
  },
  methods: {
        myMap:function(e){
        e.preventDefault();
        this.newURL = this.url + this.lat + "," + this.lon + this.zoom + this.size + this.marker + this.lat + "," + this.lon + this.apikey
        // alert(this.newURL)
    }
  },
  components: {
    mymap: Map
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
