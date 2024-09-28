import PropTypes from 'prop-types';

const TittleHeader = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold underline text-blue-900 mb-5">{title}</h1>
  );
};

TittleHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default TittleHeader
