import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import TittleHeader from '../components/TittleHeader'
import { useState, useEffect, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoView = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { todoList, addTodo, changeStatusTodo } = useContext(TodoContext)

  const inputTitle = (event) => {
    setTitle(event.target.value)
  }

  const inputBody = (event) => {
    setBody(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title, body)
    setTitle('')
    setBody('')
  }

  // console.log(title, body)

  const changeStatus = (id) => {
    changeStatusTodo(id)
  }

  useEffect(() => {
    console.log('Todo Updated:', todoList)
  }, [todoList])

  return (
    <>
      <TittleHeader title="Todo" />
      <div className="grid gap-6 mb-6 grid-cols-2">
        {/* Tambah Form Todo */}
        <div className="border p-3">
          <h1 className="text-3xl text-center font-semibold my-3">
            Tambah Todo
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                onChange={inputTitle}
                value={title}
                className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Body</label>
              <input
                type="text"
                onChange={inputBody}
                value={body}
                className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
              />
            </div>
            <div className="mb-6">
              <input
                type="submit"
                className="bg-orange-200 border rounded-lg w-full p-2 cursor-pointer hover:bg-orange-600"
              />
            </div>
          </form>
        </div>
        {/* Table Todo */}
        <div className="border p-3">
          <h1 className="text-3xl text-center my-3 font-semibold">
            Table Todo
          </h1>
          <table className="w-full text-sm text-left">
            <thead className="bg-orange-200 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Body
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-orange-100 text-left">
              {todoList.map((todo) => (
                <tr key={todo.id}>
                  <td className="px-6 py-3">{todo.id}</td>
                  <td className="px-6 py-3">{todo.title}</td>
                  <td className="px-6 py-3">{todo.body}</td>
                  <td className="px-6 py-3 text-center">
                    {todo.isComplete ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-red-500"
                      />
                    )}
                  </td>
                  <td className="text-center">
                    {todo.isComplete ? (
                      <span>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500"
                        />
                      </span>
                    ) : (
                      <button
                        onClick={() => changeStatus(todo.id)}
                        className="font-bold border rounded-lg p-3 bg-green-200 hover:bg-green-600"
                      >
                        Success
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TodoView
