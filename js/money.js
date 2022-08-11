document.getElementById('calculation-mont-income').addEventListener('click', function () {
    // income
    const monthlyIncome = document.getElementById('monthly-income');
    const userMonthlyIncome = monthlyIncome.value;
    const userIncomeINT = parseInt(userMonthlyIncome);

    // Expenses
    const expensesFood = document.getElementById('expenses-food').value;
    const IntFood = parseInt(expensesFood);

    const expensesRent = document.getElementById('expenses-rent').value;
    const IntRent = parseInt(expensesRent);

    const expensesClothes = document.getElementById('expenses-clothes').value;
    const IntClothes = parseInt(expensesClothes);


    // total-Expence-value input
    let totalExpenceValue = document.getElementById('total-Expence-value');
    // totalExpenses
    const totalExpenses = IntFood + IntRent + IntClothes;
    const userMonthlyTotalExpenses = totalExpenceValue.innerText = totalExpenses;


    // total-subtotal-balance
    const totalSubtotalBalance = document.getElementById('total-subtotal-balance');
    const totalSubtotal = userIncomeINT - userMonthlyTotalExpenses;
    totalSubtotalBalance.innerText = totalSubtotal;

})