import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="m-auto">
      <FaSpinner className="animate-spin w-32 h-full" />
    </div>
  );
}

export default Loader;
