/* eslint-disable react/prop-types */
function Alert({ message }) {
  return (
    <div className="relative px-4 py-2 mb-2 text-center text-red-700 bg-red-100 border border-red-400 rounded">
      <span className="sm:inline block">{message}</span>
    </div>
  );
}

export default Alert;
