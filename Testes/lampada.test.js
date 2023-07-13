const Lampada = require('../lampada');

describe('Exemplo da técnica de transição de estados', () => {
  let lampada;

  beforeEach(() => {
    lampada = new Lampada();
  });

  it('CENÁRIO 1: Lâmpada está inicialmente em estado desligada e devemos deixar ela ligada.', () => {

    // Transição de estados:
    // Estado inicial: Desligado
    // Ação: Pressionar o interruptor
    // Resultado esperado: A lâmpada deve estar ligada.

    // Primeiro, verifique se a lâmpada está inicialmente desligada

    // Instancie o método que simboliza o evento

    // Verifique se a lâmpada já está ligada
  });

  it('CENÁRIO 2: Lâmpada está em estado ligada e devemos deixar ela desligada.', () => {
    
    // Transição de estados:
    // Estado inicial: Ligado
    // Ação: Pressionar o interruptor
    // Resultado esperado: A lâmpada deve estar desligada

    // Primeiro, instancie o método de ligar a lâmpada, para que seu estado passe de "desligada" para "ligada"

    // Verifique se a lâmpada está ligada

    // Instancie o método que simboliza o evento

    // Verifique se a lâmpada está desligada
  });
});