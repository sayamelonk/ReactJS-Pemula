import TittleHeader from '../components/TittleHeader'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'

const HomeView = () => {
  const { todoList } = useContext(TodoContext)

  return (
    <>
      <TittleHeader title={'Home'} />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title} : Status ({todo.isComplete ? 'Selesai' : 'Belum'})
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomeView
