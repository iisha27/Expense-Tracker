import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses'; 
import NewExpense from './components/NewExpense/NewExpense';
let DUMMY_EXPENSE=[
    {
        id:'e1',
        title: 'Books',
        amount:145,
        date: new Date(2021,6,13)
    },
    {
        id:'e2',
        title: 'Car Insurance',
        amount: 170,
        date: new Date(2022, 1, 14)
    },
    {
        id:'e3',
        title:'Refrigerator',
        amount: 300,
        date: new Date(2022,4,3)
    },

];

const App=()=>{

    const[expenses, setExpenses]=useState(DUMMY_EXPENSE);
        
      const addExpenseHandler = (expense) =>{
        const updatedExpense=[expense, ...expenses];
        setExpenses(updatedExpense);
      };

    return (
        <div>
        <NewExpense onAddExpense={addExpenseHandler } />

        <Expenses item={expenses}/>
          
        </div>
    );
}

export default App;