// public =>    A visibilidade padrão dos membros da classe é "public".
//              Um membro "public" pode ser acessado em qualquer lugar.

// protected => Membros "protected" são visíveis apenas para subclasses da
//              classe em que são declarados.

// private =>   Não permite  acesso ao membro nem mesmo pelas subclasses.
//              Somente a própria classe pode acessá-lo.

export class Person {
  private firstName: string;
  lastName: string;
  birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    const today = new Date();
    const age = today.getFullYear() - this.birthDate.getFullYear();

    return this.isBirthdayPassed() ? age : age - 1;
  }

  protected isBirthdayPassed(): boolean {
    const today = new Date();

    return (
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate())
    );
  }

  updateFirstName(firstName: string): void {
    this.firstName = firstName;
  }
}

class Player extends Person {
  constructor(firstName: string, lastName: string, birthDate: Date) {
    super(firstName, lastName, birthDate);
  }

  method1() {
    this.getFullName();
    this.isBirthdayPassed();
  }
}
