// Rework lesson 12
// User
const user = {
  name: "Pavlo",
  age: 12,
  premium: true,
  hobby: "sleeping",
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const res = Object.keys(user);
for (const elem of res) {
  console.log(`${elem}: ${user[elem]}`);
}

// Props
const player = {
  name: "Pasha",
  age: 67,
  location: "Grace",
};

const countProps = (obj) => {
  const total = [];
  const { name, age, ...rest } = obj;
  total.push(`name: ${name}`, `age: ${age}`, rest);
  return total;
};
console.log(countProps(player));

// Workers
const workers = {
  Vasyl: 34,
  Lola: 98,
  Mykola: 12,
};

const entries = Object.entries(workers);

const findBestEmployee = (employees) => {
  let total = 0;
  let totalName = "";

  for (const elem of entries) {
    const name = elem[0];
    const tasks = elem[1];

    if (total < tasks) {
      total = tasks;
      totalName = name;
    }
  }

  return `${totalName}: ${total}`;
};

console.log(findBestEmployee(workers));

// Salary
const salary = {
  Igor: 30000,
  Ira: 25000,
  Max: 40000,
};

function countTotalSalary({ Igor, Ira, Max }) {
  let total = Igor + Ira + Max;
  return total;
}
console.log(countTotalSalary(salary));

// Array of objects
const products = [
  { name: "apple", price: 35, quantity: 2 },
  { name: "bread", price: 45, quantity: 5 },
  { name: "kinder", price: 90, quantity: 3 },
];

const getAllPropValues = (
  [
    { name: n1, price: p1, quantity: q1 },
    { name: n2, price: p2, quantity: q2 },
    { name: n3, price: p3, quantity: q3 },
  ],
  prop,
) => {
  let res = [];
  if (prop === "name") {
    res.push(n1, n2, n3);
  } else if (prop === "price") {
    res.push(p1, p2, p3);
  } else if (prop === "quantity") {
    res.push(q1, q2, q3);
  } else {
    return "Ключ не знайдений";
  }

  return res;
};

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
// Products

const calculateTotalPrice = (
  [
    { price: p1, quantity: q1 },
    { price: p2, quantity: q2 },
    { price: p3, quantity: q3 },
  ],
  productName,
) => {
  let total = 0;
  if (productName === "kinder") {
    total = p3 * q3;
  } else if (productName === "apple") {
    total = p1 * q1;
  } else if (productName === "bread") {
    total = p2 * q2;
  } else {
    return "Продукту не існує";
  }
  return total;
};
console.log(calculateTotalPrice(products, "kinder"));
console.log(calculateTotalPrice(products, "apple"));
console.log(calculateTotalPrice(products, "bread"));
// Rework lesson 12

// Bank

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const { DEPOSIT, WITHDRAW } = Transaction;

const account = {
  balance: 10000,
  transactions: [],
  total: 0,

  createTransaction(amount, type) {
    return {
      id: (this.total += 1),
      type,
      amount,
    };
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів");
      return;
    } else if (amount === 0) {
      alert("Сума не може бути 0");
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, WITHDRAW);
    this.transactions.push(transaction);
  },

  deposit(amount) {
    if (amount === 0) {
      alert("Сума не може бути 0");
      return;
    }

    this.balance += amount;

    const transaction = this.createTransaction(amount, DEPOSIT);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const elem of this.transactions) {
      if (elem.id === id) {
        return elem;
      }
    }
    return "Нічого не знайдено";
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const elem of this.transactions) {
      if (elem.type === type) {
        total += elem.amount;
      }
    }
    return total;
  },
};

account.withdraw(Number(prompt("Введіть число, на скільки хочете зняти")));
account.deposit(Number(prompt("Введіть число, на скільки хочете поповнити")));

console.log("Баланс:", account.getBalance());
console.log("Історія транзакцій:", account.transactions);
console.log("Сума поповнень:", account.getTransactionTotal(DEPOSIT));
console.log("Сума зняття:", account.getTransactionTotal(WITHDRAW));