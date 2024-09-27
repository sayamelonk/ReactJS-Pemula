import PropTypes from 'prop-types'

const Navigation = ({ listItem }) => {
  return (
    <nav className="flex justify-between bg-orange-300">
      <h1 className="text-2xl font-bold text-orange-600 flex items-center">
        Logo
      </h1>
      <ul className="flex flex-row gap-8 p-5">
        {listItem.map((item) => (
          <li key={item.id} className="hover:text-orange-600">
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  listItem: PropTypes.array.isRequired,
}

export default Navigation
