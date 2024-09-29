import TittleHeader from '../components/TittleHeader'

const TodoView = () => {
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
              </tr>
            </thead>
            <tbody className="bg-orange-100 text-left">
              <tr>
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">Bangun Tidur</td>
                <td className="px-6 py-3">Bangun Tidur + Buka IG</td>
              </tr>
              <tr>
                <td className="px-6 py-3">2</td>
                <td className="px-6 py-3">Makan</td>
                <td className="px-6 py-3">Makan Pagi Nasi Uduk</td>
              </tr>
              <tr>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">Karja</td>
                <td className="px-6 py-3">Kembali dari Weekend</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TodoView
