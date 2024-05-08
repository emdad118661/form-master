import PropTypes from 'prop-types';
const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string.isRequired, // Requires name prop to be a string
  };

export default Cousin;