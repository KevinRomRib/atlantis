import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import CadastroClienteDependente from "./cadastroClienteDependente";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1: // Titular
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2: // Dependente
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}