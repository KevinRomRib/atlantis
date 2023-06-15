import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoDependente(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica.Clientes
        let numeroDocumentoTitular = this.entrada.receberTexto('Digite novamente o numero do documento do seu titular: ')
        armazem.map(item => {
            if(item.Documentos[0].Numero == numeroDocumentoTitular){
                item.Dependentes.push(cliente)
            }
        })
        console.log('Finalizando o cadastro do cliente...')
    }
}