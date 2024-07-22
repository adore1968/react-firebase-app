import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <div className="px-8 pt-6 pb-8 bg-white rounded shadow-md">
        <div className="flex items-center gap-5">
          <h1 className="mb-5 text-xl">
            Welcome {user.displayName || user.email}
          </h1>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="rounded-full"
            />
          )}
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-slate-200 hover:bg-slate-300 px-4 py-2 transition-colors rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
