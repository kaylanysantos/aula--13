function ContaBancaria (titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;

 this.depositar = function (valor) {
  this.saldo += valor
  console.log(`saldo de R$${valor} depositadocom sucesso`)
  },

this.retirar = function (valor) {
  if (this.saldo > valor) {
    this.saldo -= valor
    console.log(`saldo de R$${valor} depositadocom sucesso`)
  } else {
    console.log(`saldo é insuficiente`)
  }
},

this.consultarSaldo = function () {
  console.log(`\nTitular: ${this.titular}\nSaldo: ${this.saldo}`)
}
}; 

const kaylanysantos = new ContaBancaria("kaylany santos", 2  )

kaylanysantos.depositar(10)


