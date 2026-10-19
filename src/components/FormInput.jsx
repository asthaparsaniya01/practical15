function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  inputRef,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        required={required}
        className="w-full rounded-lg border border-gray-300
          px-4 py-3 text-gray-800 outline-none transition
          placeholder:text-gray-400
          focus:border-indigo-500 focus:ring-2
          focus:ring-indigo-200"
      />
    </div>
  );
}

export default FormInput;