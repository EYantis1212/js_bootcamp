const account = {
	name: 'Eric Yantis',
	income: [],
	expenses: [],
	addIncome: function (description, amount) {
		this.income.push({
			description: description,
			amount: amount,
		});
	},
	addExpense: function (description, amount) {
		this.expenses.push({
			description: description,
			amount: amount,
		});
	},
	getAccountSummary: function () {
		let totalExpenses = 0;
		let totalIncome = 0;
		let balance = 0;
		this.expenses.forEach(function (expense) {
			totalExpenses = totalExpenses + expense.amount;
		});
		this.income.forEach(function (income) {
			totalIncome = totalIncome + income.amount;
		});
		balance = totalIncome - totalExpenses;
		return `${this.name} has a balance of $${balance} with an income of $${totalIncome} and $${totalExpenses} in expenses.`;
	},
};

// Expense -> description, amount
// addExpense (description, amount)
//getAccountSummary -. total up all expenses -> Eric has $1234 in expenses.
account.addIncome('retirement', 2000);
account.addExpense('rent', 1200);
account.addExpense('coffee', 4);
account.addExpense('electric', 200);
console.log(account);

console.log(account.getAccountSummary());
