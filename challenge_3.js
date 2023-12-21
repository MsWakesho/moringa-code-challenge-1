function getNetSalary(){
const incomeTaxRates = [
    {max: 24000, rate:0.1},
    {max: 32333, rate: 0.25},
    {max: 500000, rate: 0.3},
    {max:800000, rate:0.325}

];

//We have to arrange them in objects  with properties.

const nhifDeductionRate=[
    {max: 5999, rate: 2.50},
    {max: 7999, rate: 3.75},
    {max:11999, rate:3.33 },
    {max: 14999, rate:3.33},
    {max: 24999, rate:3.00},
    {max: 29999, rate:2.83},
    {max: 34999, rate:2.57},
    {max: 39999, rate:2.38},
    {max:44999, rate:2.22},
    {max:59999, rate:2.00},
    {max:69999, rate:1.86},
    {max:79999, rate:1.75},
    {max:89999, rate:1.67},
    {max:99999, rate:1.60},
    {max:100000, rate:1.70},
];

const nssfRates = 0.06;


let individualBasicSalary = prompt( 'Enter Your Basic Salary');

let individualBenefits = prompt('Enter Your Benefits');

// We need to calculate the gross salary by combining the basic salary and benefits of the user
let grossSalary = individualBasicSalary + individualBenefits;

//We then need to calculate the Pay as you earn.

let payee = grossSalary * incomeTaxRates;

//We then need to calculate the NHIF Deductions to get

let nhifDeductions = grossSalary * nhifDeductionRate;

//We then calculate NSSF Deductions

let nssfDeductions = grossSalary * nssfRates;

//We then calculate the net salary 

let netSalary = grossSalary - payee -nhifDeductions - nssfDeductions;

//We need  to give the output or the results for all the calculations done


console.log(`Gross Salary:${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);

}

getNetSalary();
