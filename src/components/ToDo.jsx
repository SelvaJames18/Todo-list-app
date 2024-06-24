import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const ToDo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef()

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === '') {
            return null;
        }

        const newTOdo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,

        }
        setTodoList((prev) => [...prev, newTOdo])
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prvToDos) => {
            return prvToDos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((precToDos) => {
            return precToDos.map((todos) => {
                if (todos.id === id) {
                    return { ...todos, isComplete: !todos.isComplete }
                }
                return todos;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl'>

            {/* title */}

            <div className="flex items-center mt-7 gap-2">
                <img className='w-7' src={todo_icon} alt="" />
                <h1 className='text-xl font-semibold'>To-Do List</h1>
            </div>

            {/* input boe */}

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 
                placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white font-medium cursor-pointer'>ADD +</button>
            </div>

            {/* todo list */}

            <div>

                {todoList.map((item, index) => {
                    return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                })}
            </div>


        </div>
    )
}

export default ToDo
