import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import CadastroCpf from "./cadastroCpf";
import CadastroRg from "./cadastroRg";
import CadastroPassaporte from "./cadastroPassaporte";

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1: // CPF
                    this.processo = new CadastroCpf(this.cliente)
                    this.processo.processar()
                    break
                case 2: // RG
                    this.processo = new CadastroRg(this.cliente)
                    this.processo.processar()
                    break
                case 3: // Passaporte
                    this.processo = new CadastroPassaporte(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}