import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import TittleHeader from '../components/TittleHeader'
import { useState } from 'react'

const TodoView = () => {
  const [todoList] = useState([
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

  return (
    <>
      <TittleHeader title="Todo" />
      <div className="grid gap-6 mb-6 grid-cols-2">
        {/* Tambah Form Todo */}
        <div className="border p-3">
          <h1 className="text-3xl text-center font-semibold my-3">
            Tambah Todo
          </h1>
          <form action="">
            <div className="mb-6">
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Body</label>
              <input
                type="text"
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
            <tbody className="bg-orange-100 text-center">
              {todoList.map((todo) => (
                <tr key={todo.id}>
                  <td className="px-6 py-3">{todo.id}</td>
                  <td className="px-6 py-3">{todo.title}</td>
                  <td className="px-6 py-3">{todo.body}</td>
                  <td className="px-6 py-3">
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
                  <td>
                    {todo.isComplete ? (
                      <span>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500"
                        />
                      </span>
                    ) : (
                      <button className="font-bold border rounded-lg p-3 bg-green-200 hover:bg-green-600">
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
