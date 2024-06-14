import React, { useState } from 'react'

function ExpenseForm({addExpense} : any) {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState("")
    const [error , setError] = useState("")

    const handleSubmit = (e : any) => {
        e.preventDefault()
        if(description.length > 0 ||amount) {
            setError("")
            const expense = {
                id : Math.floor(Math.random() * 10000),
                description : description,
                amount : parseFloat(amount)
            }
            addExpense(expense)
            setDescription('')
            setAmount('')
        }else {
            setError("You need to write something to be able to add something 🙄")
        }
    }

  return (
    <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="block  text-sm  font-medium text-[#f3e7e0]"
            >
              Description
            </label>
            <textarea
              id="message"
              className="mt-2 bg-[#BAA89C] text-sm  border border-[#876B5D] placeholder-[#2F1F1B] rounded-lg  block w-full p-2.5 active:border-transparent focus:outline-none "
              placeholder="Describe your expense..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-2  text-sm  font-medium text-[#f3e7e0]"
            >
              Message
            </label>
            <input
              id="message"
              className="bg-[#BAA89C] text-sm  border border-[#876B5D] placeholder-[#2F1F1B] rounded-lg  block w-full p-2.5 active:border-transparent focus:outline-none "
              placeholder="$0.00"
              min={0}
              step="0.01"
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#2F1F1B] hover:bg-amber-950 text-white font-medium text-sm py-3 px-5 rounded-lg w-full"
            >
                Add Expense
            </button>
          </div>
          {error && <p className="text-[#EDDBC2] text-sm text-center mb-2">{error}</p>}
        </form>
    </div>
  )
}

export default ExpenseForm