/* Pie chart with chart.js: https://www.chartjs.org/docs/latest/samples/other-charts/pie.html */

const projectsCTX = document.querySelector("#projectsChart");
const projectsChart = new Chart(projectsCTX, {
    type: 'pie',
    data: {
        labels: ["FDND (9)", "CMD (39)", "MDD (10)"],
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
            display: false,
            text: 'Projecten'
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

const challengesCTX = document.querySelector("#challengesChart");
const challengesChart = new Chart(challengesCTX, {
    type: 'pie',
    data: {
        labels: ["VID (12)", "UX/UI (15)", "FED (11)"],
        datasets: [
        {
            data: [12, 15, 11],
            backgroundColor: [
               "#666",
                "#ccc",
                "#aaa"
            ]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Sustainability Goals'
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});