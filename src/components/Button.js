import PropTypes from 'prop-types';

const Button = ({ value, className }) => (
  <>
    <button type="button" className={className}>{value}</button>
  </>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
