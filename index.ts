import { Assalariado } from "./src/model/Assalariado";
import { Comissionado } from "./src/model/Comissionado";
import { Horista } from "./src/model/Horista";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`,1500);

a1.setNome(`Wesley Sneijder`);
a1.setCpf(`7070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 =new Comissionado (`Slipknot`, `661661661`, 4000, 0.10);
c1.setNome(`leandrinha`);
c1.setCpf(`79143221721`);
c1.setTotalVendas(3200);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, CPF : ${c1.getCpf()}`);
    console.log(`Comissao: ${c1.getTaxaComissao()} Total vendas: ${c1.getTotalVendas()}`);
    console.log(`Vencimento: ${c1.vencimento()}`);

    const c2 = new Horista (`Aleatorio`, `Aleatoriozinho`, 22334, 1234);
    c2.setNome(`Ramdom`);
    c2.setCpf(`Ramdomzinho`);
    c2.setValorHora(1200);
    c2.setHorasTrabalhadas(2300);
    console.log(`Nome: ${c2.getNome()}, CPF: ${c2.getCpf()}`);
    console.log(`Valor Hora ${c2.getValorHora()}, Horas Trabalhadas ${c2.getHorasTrabalhadas()}`);
    console.log(`Vencimento ${c2.vencimento()}`);