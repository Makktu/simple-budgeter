const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

const expensesList = document.querySelector("#expenses-list");

const clearFields = function () {
    reasonInput.value = "";
    amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
    if (amountInput.value && reasonInput.value) {
        const enteredReason = reasonInput.value;
        const enteredAmount = amountInput.value;
        const newItem = document.createElement("ion-item");
        newItem.textContent += enteredReason + ": £" + enteredAmount;
        expensesList.appendChild(newItem);
        clearFields();
    } else {
        console.log("enter a value");
    }
});

cancelBtn.addEventListener("click", () => {
    if (amountInput.value || reasonInput.value) {
        clearFields();
    }
});
