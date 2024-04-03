import PropTypes from 'prop-types';
const Checkbox = ({isChecked,handleCheckboxChange}) => {
  return (
<div className="flex items-center">
  <input id="checkbox"
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={isChecked}
        onChange={handleCheckboxChange}/>
  <label htmlFor="checkbox" className="ml-2 block text-gray-800">Check me</label>
</div>

  );
}
Checkbox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };
export default Checkbox;
