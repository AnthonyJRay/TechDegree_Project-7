const msgBox = document.querySelector(".msgBox")
const close = document.getElementById("close")

$( function() {
  $( "#tabs" ).tabs({
    collapsible: true
  });
} );

close.addEventListener("click", ()=> {
	msgBox.style.display = "none";
	})

new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
      labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
      datasets: [{ 
          data: [4,7,5,9,12,9,10,7,10,13,10,13],
          label: "Hourly",
          borderColor: "rgba(20, 3, 80, 0.76)",
          backgroundColor: "rgba(111, 88, 211, 0.325)",
          borderWidth: .7,
          fill: true
        }, { 
          data: [107,178,128,214,285,214,250,178,250,321,250,321],
          label: "Daily",
          borderColor: "rgba(20, 3, 80, 0.76)",
          backgroundColor: "rgba(111, 88, 211, 0.325)",
          borderWidth: .7,
          fill: true
        }, { 
          data: [750,1250,900,1500,2000,1500,1750,1250,1750,2250,1750,2250],
          label: "Weekly",
          borderColor: "rgba(20, 3, 80, 0.76)",
          backgroundColor:"rgba(111, 88, 211, 0.325)",
          borderWidth: .7,
          fill: true
        }, { 
          data: [22500,37500,27000,45000,60000,45000,52500,37500,52500,67500,52500,67500],
          label: "Monthly",
          borderColor: "rgba(20, 3, 80, 0.76)",
          backgroundColor:"rgba(111, 88, 211, 0.325)",
          borderWidth: .7,
          fill: true
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'TRAFFIC'
      }
    }
  });

// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'DAILY TRAFFIC',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)'
            ],
            borderColor: [
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)',
                'rgba(86, 79, 192, 0.842)'
            ],
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

new Chart(document.getElementById("doughtnutChart"), {
    type: 'doughnut',
    data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [11000,11000,45500]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'MOBILE USERS'
      }
    }
});

const stats = document.getElementById('stats')
