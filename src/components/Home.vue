<template>
  <b-jumbotron class="home">
    <img src="../assets/logoSLP.png" alt="Vue.js PWA" />
    <br />
    <br />
    <div>
      <b-card>
        <b-card-text>
          <h1>{{ turno }}</h1>
          <p>Actualizar el contador de turnos</p>
          <a href="#" v-on:click="SumarTurno(1)" class="btn btn-primary">+</a>
          <a href="#" v-on:click="RestarTurno(1)" class="btn btn-danger">-</a>
        </b-card-text>
      </b-card>
    </div>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      modulo: '',
      turno: 0,
      turnoSend: {},
      msgError: ''
    }
  },
  created () {
    this.modulo = localStorage.getItem('modulo')
    this.updateTurno()
  },
  watch: {
    turno () {
      console.log('Actualizado')
    }
  },
  methods: {
    SumarTurno (inc) {
      this.turno = parseInt(this.turno) + inc
      this.turnoSend.NoTurno = this.turno
      this.turnoSend.Modulo = this.modulo
      this.turnoSend.FechaRegistro = moment().format()
      axios.put(`http://localhost:3000/addTurno/5d9fb53b7233fb1b7838a07e`, this.turnoSend)
        .then(response => {
          console.log('Registrado')
        })
        .catch(e => {
          this.msgError = e
          console.log(this.msgError)
        })
    },
    RestarTurno (dec) {
      this.turno -= dec
    },
    updateTurno (){
      setInterval(() => {
        axios.get(`http://localhost:3000/turnos`).then(res => {
          this.turno = res.data[0].NoTurno
          this.modulo = res.data[0].Modulo
        }).catch(e => {
          this.msgError = e
          alert(this.msgError)
        }) 
      }, 1000)
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
