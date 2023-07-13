class Lampada {
  constructor() {
    this.ligada = false; // Definindo o estado inicial da lâmpada como "desligada"
  }

  isLigada() {
    return this.ligada; // Retorna o estado
  }

  ativarInterruptor() {
    this.ligada = !this.ligada; // Inverte o estado da lâmpada ao pressionar o interruptor
  }

  ligar() {
    this.ligada = true;  // Definindo o estado da lâmpada como "ligada"
  }
}

module.exports = Lampada;
