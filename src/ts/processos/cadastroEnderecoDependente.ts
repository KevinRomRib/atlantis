import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Armazem from "../dominio/armazem";
import CadastroClienteDependente from "./cadastroClienteDependente";

export default class CadastroEnderecoDependente extends Processo {
    private cliente: Cliente
    private titulares: Cliente[]

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.titulares = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numeroDocumentoTitular = this.entrada.receberTexto('Digite o numero do documento do seu titular?')
        console.log('Coletando os dados de endereço...')
        this.titulares.map(item => {
            if(item.Documentos[0].Numero == numeroDocumentoTitular){
                let endereco = item.Endereco.clonar() as Endereco
                this.cliente.Endereco = endereco
            }
        })        
    }

}