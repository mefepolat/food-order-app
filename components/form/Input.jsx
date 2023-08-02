const Input = ({ type, placeholder, name }) => {
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          name={name}
          className={`h-14 w-full border border-primary outline-none px-4 peer ${
            name !== "date" && "pt-4"
          }}`}
          required
        />
        {name !== "date" && (
          <span className="absolute top-0 left-0 h-full w-full border border-primary outline-none px-4 peer pt-2">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
