import PropTypes from 'prop-types';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';
const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {asset && <Special asset={asset}></Special>}
            {name === 'Rubaiya' && <Friend></Friend>}
        </div>
    );
};

Cousin.propTypes = {
    name: PropTypes.string.isRequired, // Requires name prop to be a string
  };

export default Cousin;