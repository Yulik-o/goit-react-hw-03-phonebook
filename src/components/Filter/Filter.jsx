import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
