/* Pie chart with chart.js: https://www.chartjs.org/docs/latest/samples/other-charts/pie.html */

const projectsCTX = document.querySelector("#projectsChart");
const projectsChart = new Chart(projectsCTX, {
    type: 'pie',
    data: {
        labels: ["FDND (21)", "CMD (39)", "MDD (10)"],
        datasets: [
        {
            data: [21,39, 10],
            backgroundColor: [
               "#66e5bf",
                "#fff021",
                "#085dc4"
            ]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart'
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

const challengesCTX = document.querySelector("#challengesChart");
const challengesChart = new Chart(challengesCTX, {
    type: 'pie',
    data: {
        labels: ["FDND (12)", "CMD (29)", "MDD (15)"],
        datasets: [
        {
            data: [12,29, 15],
            backgroundColor: [
               "#66e5bf",
                "#fff021",
                "#085dc4"
            ]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart'
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});