// Interfaces (Contratos)

// Em POO, uma interface representa mais do que apenas uma estrutura de dados, representa a definicão de um contrato - um
// conjunto de atributos e métodos que devem necessariamente ser implementados pela classe.

// Uma interface não possui implementação, portanto programar "orientado a interfaces" torna o código mais flexível e
// desacoplado.

// É um dos pilares do conceito de "abstração" em POO.
// Abstração é a qualidade de lidar com ideias ao invés de objetos concretos.

// Exemplo => Método de Pagamento é um conceito abstrato. Ele não existe por si só se não tiver alguma entidade, no caso
// da programação, um objeto, que implemente (respeite) as regras de um método de pagamento.
// Podemos fazer uma compra usando a conta corrente (PIX) ou um Cartão de Crédito.
// Toda classe que quiser se tornar um método de pagamento precisa seguir as regras/contrato do método de pagamento.

// O contrato é o PaymentMethod.
// As classes CreditCard e CurrentAccount não estão acopladas a uma terceira classe

// A Interface é outra forma de implementar o conceito de Polimorfismo, pois diferentes objetos respondem à mesma chamada
// de método de diferentes maneiras.

import { CreditCard } from "./banking/CreditCard";
import { CurrentAccount } from "./banking/CurrentAccount";

import { Person } from "./banking/Person";
import { ProcessPayment } from "./banking/ProcessPayment";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));
const mariaCurrentAccount = new CurrentAccount(maria, 100, "123", 2);

const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));
const lucasCreditCard = new CreditCard("555 555", 200);

const payment = new ProcessPayment(lucasCreditCard, 100);
payment.execute();
