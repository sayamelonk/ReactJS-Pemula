const Navigation = () => {
  return (
    <nav className="flex justify-between bg-orange-300">
      <h1 className="text-2xl font-bold text-orange-600 flex items-center">
        Logo
      </h1>
      <ul className="flex flex-row gap-8 p-5">
        <li className="hover:text-orange-600">
          <a href="">Home</a>
        </li>
        <li className="hover:text-orange-600">
          <a href="">About</a>
        </li>
        <li className="hover:text-orange-600">
          <a href="">Todo</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
