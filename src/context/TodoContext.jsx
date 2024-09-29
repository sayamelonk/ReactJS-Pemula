import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Bangun Tidur',
      body: 'Bangun Tidur di Pagi Hari',
      isComplete: true,
    },
    {
      id: 2,
      title: 'Makan Pagi',
      body: 'Makan Soto Lamongan/Nasi Campur',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Kerja',
      body: 'Kerja Kantoran dari Jam 9 Pagi - 5 Sore',
      isComplete: false,
    },
  ])

  const addTodo = (title, body) => {
    let todoArray = todoList.length
    setTodoList([
      ...todoList,
      {
        id: todoArray + 1,
        title: title,
        body: body,
        isComplete: false,
      },
    ])
    // setTitle('')
    // setBody('')
  }

  const changeStatusTodo = (id) => {
    setTodoList((itemTodo) =>
      itemTodo.map((data) =>
        data.id === id ? { ...data, isComplete: true } : data,
      ),
    )
    // console.log(todoList)
  }

  return (
    <TodoContext.Provider value={{ todoList, addTodo, changeStatusTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
