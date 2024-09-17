let currentTable = null;
let currentOrder = [];
let totalAmount = 0;
let totalCustomers = 0;

function selectTable(tableNumber) {
    currentTable = tableNumber;
    alert(`Table ${tableNumber} selected`);
}

function addOrder(item, price) {
    if (!currentTable) {
        alert("Please select a table first!");
        return;
    }
    currentOrder.push({ item, price });
    totalAmount += price;
    updateOrder();
}

function updateOrder() {
    const orderDetails = document.getElementById("orderDetails");
    const total = document.getElementById("total");

    orderDetails.innerHTML = currentOrder
        .map((order, index) => `${index + 1}. ${order.item} - $${order.price}`)
        .join("<br>");
    
    total.textContent = totalAmount;
}

function placeOrder() {
    if (currentOrder.length === 0) {
        alert("No items in the order!");
        return;
    }

    // Increment the total customers
    totalCustomers++;
    document.getElementById("customerCount").textContent = totalCustomers;

    // Display success notification
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");
    
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 2000);

    clearOrder();
}

function clearOrder() {
    currentOrder = [];
    totalAmount = 0;
    updateOrder();
    alert("Order cleared!");
}

