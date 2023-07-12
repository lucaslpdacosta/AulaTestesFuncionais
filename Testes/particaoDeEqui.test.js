const Loja = require("../loja")

/*

logo a baixo temos os valores de entrada(valor pago)
e o valor do desconto que se espera

*/

describe("testes partição de equivalencia", () => {

    beforeEach(() => {
        cliente1 = new Loja("joao", "São Vicente")
   })

    it("nao deve receber um desconto de 15% - no limite 499.99", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(499.99)
        expect(cliente1.comprar()).toBe(49.998999999999995)
    })

    it("deve receber um desconto de 15% - no limite 500.01", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(500.01)
        expect(cliente1.comprar()).toBe(75.0015)
    })

    it("nao deve receber um desconto de 10% - no limite 299.99", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(299.99)
        expect(cliente1.comprar()).toBe(14.999500000000001)
    })

    it("deve receber um desconto de 10% - no limite 300.01", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(300.01)
        expect(cliente1.comprar()).toBe(30.000999999999998)
    })

    it("nao deve receber um desconto de 5% - no limite 99.99", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(99.99)
        expect(cliente1.comprar()).toBe(99.99)
    })

    it("deve receber um desconto de 5% - no limite 100.01", () => {
        
        // desconto de 10%
        cliente1.adicionarItem(100.01)
        expect(cliente1.comprar()).toBe(5.0005)
    })

})

