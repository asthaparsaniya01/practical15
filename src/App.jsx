import { useRef, useState } from "react";
import FormInput from "./components/FormInput";
import Button from "./components/Button";

function App() {
  // References to uncontrolled inputs
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Store submitted information for display
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username,
      password,
    });
  };

  // Reset form and submitted information
  const handleReset = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    setSubmittedData(null);
  };

  return (
    <div className="flex min-h-screen items-center justify-center
      bg-gradient-to-br from-indigo-100 via-white to-purple-100
      px-4 py-10">

      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl
          ring-1 ring-gray-200 sm:p-10">

          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16
              items-center justify-center rounded-full
              bg-indigo-100 text-3xl">
              🔐
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Please enter your login details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <FormInput
              label="Username"
              name="username"
              placeholder="Enter your username"
              inputRef={usernameRef}
              required
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              inputRef={passwordRef}
              required
            />

            <Button type="submit">
              Login
            </Button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full rounded-lg border border-gray-300
                px-4 py-3 font-semibold text-gray-700
                transition hover:bg-gray-100"
            >
              Reset
            </button>
          </form>
        </div>

        {/* Submitted Information */}
        {submittedData && (
          <div className="mt-6 rounded-2xl border
            border-green-200 bg-white p-6 shadow-lg">

            <h2 className="mb-4 text-xl font-bold text-green-700">
              Form Submitted Successfully!
            </h2>

            <div className="space-y-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Username
                </p>
                <p className="mt-1 break-words font-semibold
                  text-gray-800">
                  {submittedData.username}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Password
                </p>
                <p className="mt-1 break-words font-semibold
                  text-gray-800">
                  {submittedData.password}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;