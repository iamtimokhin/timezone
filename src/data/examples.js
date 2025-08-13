const examples = [
  {
    img: "/images/examples/baldessarini.jpg",
    title: "Baldessarini",
    description: "Синий бомбер Baldessarini",
  },
  {
    img: "/images/examples/gstar.jpg",
    title: "Gstar",
    description: "Сине-голубое полупальто Gstar",
  },
  {
    img: "/images/examples/Ralph_Lauren.jpg",
    title: "Ralph Lauren",
    description: "Голубое пальто Ralph Lauren",
  },
  {
    img: "/images/examples/Ralph_Lauren_1.jpg",
    title: "Ralph Lauren",
    description: "Оранжевое пальто Ralph Lauren",
  },
];

export default examples;

class BankAccount {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }

  getBalance() {
    return `${this.#balance}`;
  }
  deposit(amount) {
    return (this.#balance += amount);
  }

  withdraw(amount) {
    return (this.#balance -= amount);
  }
}
