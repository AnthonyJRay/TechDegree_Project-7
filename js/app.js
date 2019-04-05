const msgBox = document.querySelector(".msgBox");
const close = document.getElementById("close");
const dropDown = document.querySelector('.notification-drop');
const bell = document.querySelector('.bell-icon');
const dashboard = document.getElementById('dashboard');
const members = document.getElementById('members');
const visitors = document.getElementById('visitors');
const settings = document.getElementById('settings');
const navIcons = document.getElementsByClassName('nav-icons');
const searchBar = document.getElementById('searchBar');
const searchUser = document.querySelector('#search-user');
const msgUser = document.querySelector('#message-user');
const sendBtn = document.querySelector('.send-btn');

sendBtn.addEventListener('click', () => {
  if (searchUser.value === '' || msgUser.value === '') {
    alert('Please input a message');
  } else {
    confirm('Message was sent!');
  }
})



bell.addEventListener('click', () => {
  if (dropDown.style.display === 'none') {
    dropDown.style.display = 'block';
  } else {
    dropDown.style.display = 'none';
  } 
});


// SEARCH BAR FUNCTION //
function active(){
    if(searchBar.value == 'Search...'){
      searchBar.value = ''
      searchBar.placeholder = 'Search...'
    }
  }
  function inactive(){
    const searchBar = document.getElementById('searchBar');

    if(searchBar.value == ''){
      searchBar.value = 'Search...'
      searchBar.placeholder = ''
    }
  }

// ALERT BOX EVENT LISTENER //
close.addEventListener("click", ()=> {
	msgBox.style.display = "none";
	})

// CHART.js LINE CHART //
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
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'TRAFFIC',
      }
    }
  });

// CHART.js BAR CHART //
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
// CHART.js DOUGHTNUT CHART //
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
  
$(function(){
  $.switcher('input[type=checkbox]');
});