import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, type, ...rest } = props;

  return (
    <button
      type={type || 'button'}
      {...rest}
      className="capitalize rounded text-sm transition-colors bg-blue-500 hover:bg-blue-600 text-white p-2 dark:bg-indigo-800 dark:hover:bg-indigo-900 tracking-wider"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
