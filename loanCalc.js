

const loanAmntInput = document.querySelector(".loan-amount");
const IRInput = document.querySelector(".intrest-rt");
const loanPeriodInput = document.querySelector(".loan-period");

const calcBtn = document.querySelector(".calc-btn");

let loanAmt = parseFloat(loanAmntInput.value);
let interestRate = parseFloat(IRInput.value);
let loanPeriod = parseFloat(loanPeriodInput.value);0;

let interest = ((interestRate/12)/100).toFixed(4);


            // Not important: Lines for chart display for study case.
// let myChart;

// const chartDisplay = (totalInterestAmount) => {

//     const ctx = document.getElementById('myChart').getContext('2d');

//     myChart = new Chart(ctx, {
//         type: 'pie',
//         data: { 
//             labels: ['Total interest','Total Loan Amount'],
//             datasets: [
//                 {
//                     data: [totalInterestAmount, loanAmt],
//                     backgroundColor: [ "red", "blue"],
//                     borderWidth: 0,
//                     }
//             ]
//         }, 
//     }
//     );
//     console.log(myChart)
// };

// const updateChart = (totalInterestAmount) => {
//     myChart.data.datasets[0].data[0] = totalInterestAmount;
//     myChart.data.datasets[0].data[1] = loanAmt;
//     myChart.update(); //default function that comes with chart.js library.
// };

const resetInputValues = () =>{
    loanAmt = parseFloat(loanAmntInput.value);
    interestRate = parseFloat(IRInput.value);
    loanPeriod = parseFloat(loanPeriodInput.value);
    let interest = (interestRate/12)/100;
}

const calculateMonthlyPay = () => {
    resetInputValues();

    const monthlyPay = loanAmt * interest * ((Math.pow(1 + interest, loanPeriod))/(Math.pow(1 + interest, loanPeriod) - 1));

    return monthlyPay
}

const updateData = (monthlyPay) => {

    const monthlyPayDiv = document.querySelector('.monthly-pay');
    const TLIdiv = document.querySelector('.full-loan');
    const totalInterestDiv = document.querySelector('.total-interest');

    const monthlyPayValue = document.createElement("div");
    monthlyPayValue.className = "value";

    const totalInterestValue = document.createElement('div');
    totalInterestValue.className = "value";

    monthlyPayValue.innerHTML = Math.round(monthlyPay);

    let totalAmount = Math.round(loanPeriod * monthlyPay);
    totalInterestValue.innerHTML = totalAmount;

    monthlyPayDiv.appendChild(monthlyPayValue);
    TLIdiv.appendChild(totalInterestValue);


    // if(myChart){
    //     updateChart(totalInterestAmount);
    // }else{
    //     updateChart(totalInterestAmount);
    // }  
}

const init = () => {
    monthlyPay = calculateMonthlyPay();
    updateData(monthlyPay);
}

init;

calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetInputValues();
    init();
})
