<template>
  <b-jumbotron class="turnos">
    <img src="../assets/logoSLP.png" alt="Vue.js PWA" />
    <br />
    <br />
    <div>
      <b-card>
        <b-card-text>
            <h1>Turno No:</h1>
          <h1 class="display-1">{{ turno }}</h1>
          <h2>Modulo {{ modulo }}</h2>
        </b-card-text>
      </b-card>
    </div>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'
export default {
  name: 'turnos',
  data () {
    return {
      msg: '',
      modulo: '',
      turno: 0,
      turnoSend: {},
      msgError: ''
    }
  },
  created: function () {
    this.updateTurno()
  },
  methods: {
    updateTurno () {
      setInterval(() => {
        axios.get(`http://localhost:3000/turnos`).then(res => {
          return res.data[0].NoTurno
          //this.modulo = res.data[0].Modulo
        }).catch(e => {
          this.msgError = e
          alert(this.msgError)
        })
      }, 1000)
    }
  },
  computed: {
    Turnos: function () {
      setInterval(function(){
          axios.get(`http://localhost:3000/turnos`).then(res => {
            return res.data[0].Modulo        
          }).catch(e => {
            this.msgError = e
            alert(this.msgError)
          })
      }, 1000)
    },
    Modulo: function () {
      setTimeout(this.updateModulo(), 1000)
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
