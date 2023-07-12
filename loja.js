
/*
    Na grande cidade de São Vicente, temos uma loja, onde qualquer
    vicentino que comprar seus produtos, terá direito a um desconto
    que irá variar de acordo com o valor da compra
    
    Pessoas de outras cidades NAO DEVERÃO TER DIREITO A DESCONTO
*/

class Loja {
    constructor(nomeCliente, cidade) {
        this.valorCompra = 0
        this.cliente = nomeCliente
        this.cidade = cidade
    }

    adicionarItem(valor) {
        this.valorCompra += valor
    }

    comprar() {

        /*
        esta funcao verifica se o cliente é de São Vicente;
        dá um desconto no valor da compra
        e retorna o valor do desconto tambem
        */

        if(this.cidade == "São Vicente") {
            // calcular os descontos

            // 15%
            if (this.valorCompra >= 500) {
                const desconto = (15 * this.valorCompra) / 100
                this.valorCompra -= desconto
                return desconto
            }
            
             // 10%
            else if (this.valorCompra >= 300) {
                const desconto = (10 * this.valorCompra) / 100
                this.valorCompra -= desconto
                return desconto
            }

             // 5%
            else if (this.valorCompra <= 100) {
                const desconto = (5 * this.valorCompra) / 100
                this.valorCompra -= desconto
                return desconto
            }

            else {
                return this.valorCompra
            }
        }
    }

}


module.exports = Loja
