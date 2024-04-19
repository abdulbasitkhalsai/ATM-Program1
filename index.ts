#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

//Variable Declaration
let myBalance : number = 10000;
let myPin: number = 1111;

//Login 
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your Pin (Pin Number = 1111)",
            type: "number",
        }
    ]
    )
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold("Access Granted"));
// Main Interface (Selection of Operations) 
    let transType = await inquirer.prompt(
        [
            {
                name: "transType",
                message: "Enter the type of transaction",
                type: "list",
                choices: ["Balance Inquiry", "Cash Withdrawl", "Fast Cash", "Mini Statement", "Change Pin"],
            }
        ]
    )
    // Balance Inquiry
    if (transType.transType === "Balance Inquiry") {
        console.log(chalk.green.bold(myBalance))
        //Cash Withdrawl
    } else if (transType.transType === "Cash Withdrawl") {
        let transAmount = await inquirer.prompt(
            [
                {
                    name: "amountWithdrawl",
                    message: "Enter the amount to withdraw",
                    type: "number",
                }
            ]
        ) 
        myBalance -= transAmount.amountWithdrawl
        if (transAmount.amountWithdrawl <= myBalance && !(transAmount.amountWithdrawl % 500))
         {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now you current Balance is ${myBalance}.`)
        } else if (transAmount.amountWithdrawl > myBalance) 
            {console.log("You have insufficient Balance to perform this transaction")

            } else {console.log("Please enter the amount multiplied by 500")};
} else if (transType.transType === "Change Pin") { 
    
    // Pin not updated, as the code in executing line by line. Login feature is above the change (Solution Missing)
    let updatedPin = await inquirer.prompt(
        [
            {
                name: "newPin",
                message: "Enter your new pin",
                type: "number",
            }
        ]
    ) 
    {  
        if (updatedPin.newPin >=1000 && updatedPin.newPin <= 9999) {console.log(chalk.green.bold("Pin Updated Successfully"))
        myPin = updatedPin.newPin;
     } else console.log(chalk.red.bold("Pin should be 4 digit number, Please try again"))
    };
} else if (transType.transType === "Mini Statement") {
    console.log(chalk.green.bold("Please pick your statement"))
} else if (transType.transType === "Fast Cash") {
     let transAmount = await inquirer.prompt(
         [
            {
                name: "amountWithdrawl",
                message: "Please select Withdrawl Amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
            }
        ]) 
        {
            console.log(`Please receive cash Rs. ${transAmount.amountWithdrawl}. Now your current Balance is ${myBalance-transAmount.amountWithdrawl}`);
        }
        
        
} //else console.log(chalk.red.bold("Please select a valid amount"))
        }
    
  else {console.log(chalk.red.bold("Access Denied"))};
{
    console.log(chalk.yellow.bold("Thank you for using ATM"));
}

/*
Login Done
Balance Inquiry Done
Cash Withdraw Done
Mini Statement Done
Fast Cash Done
Pin Update (Solution missing on line by line code execution)
*/