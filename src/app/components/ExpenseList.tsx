import React from 'react'
import { Expense } from '../page'

function ExpenseList({expenses ,onDeleteExpenses } : {expenses : Array<Expense> ,onDeleteExpenses : any }) {
  return (
    <div className="w-full">
        <ul className="">
            {expenses.map((expense) => (
                <li className="flex items-center justify-between px-5 py-2 bg-[#391212] rounded-lg" key={expense.id}>
                    <div className="flex items-center space-x-4">
                        <div>
                            <p className="text-white font-bold">{expense.description}</p>
                            <p className="text-sm text-[#EDDBC2]">{expense.amount}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="text-red-700 hover:text-red-800" onClick={() => onDeleteExpenses(expense.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ExpenseList