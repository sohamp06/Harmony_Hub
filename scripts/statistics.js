/*
Name: Soham Patel
Date: March 28, 2024
*/

"use strict";
async function fetchStatisticsData() {
    try {
        const response = await fetch('../../data/events.json');
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching statistics data:', error);
        throw error;
    }
}
class Chart {
    constructor(canvasRenderingContext2D, param2) {
    }
}
function renderCharts(data) {
    const ctx = document.getElementById('statisticsChart');
    if (!ctx) {
        console.error('Canvas element not found');
        return;
    }
    const myChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Visitors',
                data: data.visitors,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function checkAuthentication() {
    const isLoggedIn = true;
    return isLoggedIn;
}
function init() {
    if (!checkAuthentication()) {
        console.log('User not authenticated');
        return;
    }
    fetchStatisticsData()
        .then(data => {
            renderCharts(data);
        })
        .catch(error => {
            console.error('Error initializing page:', error);
        });
}
init();
//# sourceMappingURL=chart.js.map