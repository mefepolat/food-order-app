const Input = ({ type, placeholder, name }) => {
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          name={name}
          className={`h-14 w-full border border-primary outline-none px-4 peer ${
            name !== "date" && "pt-2"
          }}`}
          required
        />
        {name !== "date" && (
          <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
