import PropTypes from 'prop-types';

const Label = ({ to, children }) => {
  return (
    <label
      className="text-sm tracking-wide text-gray-900 dark:text-gray-50"
      htmlFor={to}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
