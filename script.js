const data = {
    labels: ['External', 'Search', 'Direct', 'Pages'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [8, 11, 35.8, 37.5],
            backgroundColor: ['rgb(150, 180, 255)', 'rgb(100, 145, 255)', 'rgb(70, 115, 235)', 'rgb(25, 80, 225)'],
            hoverOffset: 4
        }
    ]
};

// Get the canvas element
const ctx = document.getElementById('circle').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false, // Hide the default legend
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value}`;
                    }
                }
            }
        }
    }
});