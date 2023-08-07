import PropTypes from 'prop-types';

const Alert = (props) => {
  const { children, severity } = props;

  const getAlertColor = () => {
    switch (severity) {
      case 'error':
        return 'bg-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-200 text-blue-800';
      case 'success':
        return 'bg-green-200 text-green-800';
      default:
        return 'bg-red-200 text-red-800';
    }
  };

  return (
    <div className={`w-full ${getAlertColor()} px-4 py-2 rounded-md`}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
};

export default Alert;
