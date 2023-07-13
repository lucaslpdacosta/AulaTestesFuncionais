const Lampada = require('./lampada');

describe('Exemplo da técnica de transição de estados', () => {
  let lampada;

  beforeEach(() => {
    lampada = new Lampada();
  });

  it('CENÁRIO 1: Lâmpada está inicialmente em estado desligada e devemos deixar ela ligada.', () => {

    // Transição de estados:
    // Estado inicial: Ligado
    // Ação: Pressionar o interruptor
    // Resultado esperado: A lâmpada deve estar ligada

    // Verifique se a lâmpada está inicialmente desligada
    expect(lampada.isLigada()).toBe(false);

    // Instanciando o método que simboliza o evento
    lampada.ativarInterruptor();

    // Verificando se a lâmpada já está ligada
    expect(lampada.isLigada()).toBe(true);
  });

  it('CENÁRIO 2: Lâmpada está em estado ligada e devemos deixar ela desligada.', () => {
    
    // Transição de estados:
    // Estado inicial: Ligado
    // Ação: Pressionar o interruptor
    // Resultado esperado: A lâmpada deve estar desligada

    // Instanciando o método de ligar a lâmpada, para que seu estado passe para "ligada"
    lampada.ligar();

    // Verificando se a lâmpada já está ligada
    expect(lampada.isLigada()).toBe(true);

    // Instanciando o método que simboliza o evento
    lampada.ativarInterruptor();

    // Verificando se a lâmpada está desligada
    expect(lampada.isLigada()).toBe(false);
  });

  // it('CENÁRIO 3: Lâmpada está inicialmente em estado desligada e espera-se que se mantenha desligada.', () => {

  //   // Transição de estados:
  //   // Estado inicial: Desligado
  //   // Ação: Pressionar o interruptor
  //   // Resultado esperado: A lâmpada deve estar desligada

  //   // Verifique se a lâmpada está inicialmente desligada
  //   expect(lampada.isLigada()).toBe(false);

  //   // Instanciando o método que simboliza o evento
  //   lampada.ativarInterruptor();

  //   // Verificando se a lâmpada já está ligada
  //   expect(lampada.isLigada()).toBe(false);
  // });
});