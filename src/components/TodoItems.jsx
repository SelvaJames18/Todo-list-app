import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div onClick={() => { toggle(id) }} className='flex items-center my-3 gap-2 bg-stone-100 p-4 rounded-3xl hover:bg-stone-200'>
            <div className="flex flex-1 items-center cursor-pointer">
                <img className='w-6' src={isComplete ? tick : not_tick} alt="" />
                <p className={`text-slate-700 ml-4 text-[15px] ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>

            <img onClick={() => { deleteTodo(id) }} className='w-3.5 cursor-pointer' src={delete_icon} alt="" />

        </div>
    )
}

export default TodoItems
