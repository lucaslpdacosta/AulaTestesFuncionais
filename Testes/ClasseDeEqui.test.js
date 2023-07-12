const Loja = require("../loja")

describe("testes classe de equivalencia... pessoas que devem receber desconto", () => {

    beforeEach(() => {
        cliente1 = new Loja("joao", "São Vicente")
   })

    it("cliente deve receber um desconto de 15%", () => {
        cliente1.adicionarItem(700.50)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(595.425)
    })

    it("cliente deve receber um desconto de 10%", () => {
        cliente1.adicionarItem(400)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(360)
    })

    it("cliente deve receber um desconto de 5%", () => {
        cliente1.adicionarItem(120)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(114)
    })

    it("abaixo de 100.00 nao tem desconto", () => {
        cliente1.adicionarItem(95.50)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(95.50)
    })
})



describe("testes classe de equivalencia... pessoas que não devem receber desconto", () => {

    beforeEach(() => {
        cliente1 = new Loja("paulo", "Currais Novos")
        cliente2 = new Loja("carlos", "Bodó")
   })

    it("cliente deve receber um desconto de 15%", () => {
        cliente1.adicionarItem(700.50)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(700.50)
    })

    it("cliente deve receber um desconto de 10%", () => {
        cliente1.adicionarItem(400)
        cliente1.comprar()
        expect(cliente1.valorCompra).toBe(400)
    })

    it("cliente deve receber um desconto de 5%", () => {
        cliente2.adicionarItem(120)
        cliente2.comprar()
        expect(cliente2.valorCompra).toBe(120)
    })

    it("abaixo de 100.00 nao tem desconto", () => {
        cliente2.adicionarItem(95.50)
        cliente2.comprar()
        expect(cliente2.valorCompra).toBe(95.50)
    })
})