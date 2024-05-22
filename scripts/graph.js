const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "white"],
        datasets: [
            {
                label: "nombre de vote par couleur",
                data: [12, 19, 3, 5, 2, 3, 20],
                borderWidth: 2,
                borderColor: "rgba(255, 99, 132, 1)",
            },
        ],
    },
    options: {
        indexAxis: "y",
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
