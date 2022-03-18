"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = exports.Industry = exports.Commerce = exports.Place = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    introduceYourself() {
        return `Olá sou ${this.name}. Bom dia!`;
    }
}
const igor = new User('123', 'asdsaj@gmail.com', 'igor', 'asdaskoda');
class Customer extends User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
        console.log(this.purchaseTotal, this.creditCard);
    }
    getCreditCard() {
        return this.creditCard;
    }
}
const aline = new Customer('asd', 'fasd@gmail.com', 'aline', 'jffffa', '564214');
aline.introduceYourself();
const client = {
    name: "Igor",
    registrationNumber: 156,
    consumedEnergy: 900,
    calculateBill: () => {
        return 2;
    }
};
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.Commerce = Commerce;
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
        console.log(this.cep);
    }
}
exports.Industry = Industry;
class Residence extends Place {
    constructor(dwellersQuantity, cep) {
        super(cep);
        this.dwellersQuantity = dwellersQuantity;
    }
    getDwellersQuantity() {
        return this.dwellersQuantity;
    }
    getCep() {
        return this.cep;
    }
}
exports.Residence = Residence;
const asAsul = new Residence(845231, '2');
//# sourceMappingURL=index.js.map