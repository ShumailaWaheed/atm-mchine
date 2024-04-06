#! /usr/bin/env node

import inquirer from "inquirer";
    
let myBalance = 50000; // Dollar
let myPin = 24865;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin number",
        
    }
]);
//    12345  ===  1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select an option",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])
    if (operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod ==="Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000 , 2000, 5000, 10000, 20000, 50000, 100000]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log("Insufficent Balance");
            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} Withdraw Sucessfully`);
                console.log(`Your Ramaining Balance is: ${myBalance}`);
            }
                       
        }
        else if(withdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to Withdraw",
            }
        ]);
        if(amountAns.amount > myBalance){
            console.log("Insufficent Balance");
        }
        else{
             myBalance -= amountAns.amount;
             console.log(`${amountAns.amount}Withdraw Sucsessfully`);
             console.log(`Your Remaining Balance is: ${myBalance}`);
        }
   }
}
else if(operationAns.operation === 'Check Balance') {
        console.log(`Your Remaining Balsnce is: ${myBalance}`);
    }
}
else{
    console.log("Pin is Incorrect, Try Again");
}
                