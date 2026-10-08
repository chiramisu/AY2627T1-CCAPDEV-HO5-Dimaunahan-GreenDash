let sampleData = {
    "vendor_order_status": {
        "Pending": 10,
        "Processing": 20,
        "Completed": 30,
        "Cancelled": 5
    },
    "vendor_orders_over_time": {
        "2023-01-01": 5,
        "2023-01-02": 10,
        "2023-01-03": 15,
        "2023-01-04": 20
    },
    "user_avg_money_spent": {
        "January": 567,
        "February": 827,
        "March": 439,
        "April": 991,
        "May": 1234,
        "June": 876,
        "July": 654,
        "August": 432,
        "September": 765,
        "October": 987,
        "November": 543,
        "December": 678
    }
};

function createVendorOrderStatusChart(data) {
    const ctx = document.getElementById('vendor-01').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Order Status',
                data: Object.values(data),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Vendor Order Status'
                }
            }
        }
    });
}

function createVendorOrdersOverTimeChart(data) {
    const ctx = document.getElementById('vendor-02').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Orders Over Time',
                data: Object.values(data),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Vendor Orders Over Time'
                }
            }
        }
    });
}

function createUserAvgMoneySpentChart(data) {
    const ctx = document.getElementById('user-01').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Average Money Spent',
                data: Object.values(data),
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'User Average Money Spent'
                }
            }
        }
    });
}

createVendorOrderStatusChart(sampleData.vendor_order_status);
createVendorOrdersOverTimeChart(sampleData.vendor_orders_over_time);
createUserAvgMoneySpentChart(sampleData.user_avg_money_spent);