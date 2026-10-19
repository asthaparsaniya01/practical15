function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-lg bg-indigo-600 px-4 py-3
        font-semibold text-white transition
        hover:bg-indigo-700
        focus:outline-none focus:ring-2
        focus:ring-indigo-400 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default Button;