import { Assalariado } from "./src/model/Assalariado";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`,1500);

a1.setNome(`Wesley Sneijder`);
a1.setCpf(`7070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);