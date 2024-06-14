"use client"
import React, { useState } from "react"; 
import ExpenseForm from "./components/ExpenseForm"; 
import ExpenseList from "./components/ExpenseList";

export type Expense = {
  id : number;
  description : string;
  amount : number;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const addExpense = (expense : Expense) => {
    setExpenses([...expenses, expense]);
    console.log(expenses)
  };

  const onDeleteExpenses = (id : number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24 md:p-20 bg-[#2F1F1B]">
      <div className="w-full flex flex-col items-center bg-[#876B5D] p-8 border rounded-lg border-[#BAA89C] lg:w-2/3 md:w-1/2 py-16 lg:py-6">
        <div className="flex flex-row items-center justify-center mb-12">
          <h1 className="text-3xl font-bold mr-4 text-[#f3e7e0]">Expense Tracker</h1>
          <img src="/assets/lg.png" width={50} height={50} alt="logo" />
        </div>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpenses={onDeleteExpenses}  />
      </div>
    </main>
  );
}
