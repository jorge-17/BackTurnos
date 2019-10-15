<template>
  <b-jumbotron class="hello">
    <img src="../assets/logoSLP.png" alt="Vue.js PWA">
    <br><br>
    <h1>{{ msg }}</h1>
    <v-select v-model="modulo" :reduce="mod => mod.value" :options="modulos" label="nombre"></v-select>
    <br />
    <b-button v-on:click="Ingresar(modulo)" block pill variant="primary">Ingresar</b-button>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Selecciona un modulo para ingresar',
      modulo: '',
      modulos: [],
      msgError: ''
    }
  },
  created () {
    axios.get('http://localhost:3000/modulos/').then(response => {
      this.modulos = response.data
    }).catch(e => {
      this.msgError = e
    })
  },
  methods: {
    Ingresar (value) {
      localStorage.setItem('modulo', value)
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
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
  color: #35495e;
}
</style>
