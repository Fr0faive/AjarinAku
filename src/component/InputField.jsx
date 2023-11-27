const InputField = (props) => {
  const { name, type, placeholder, margin, onChange } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered input-info bg-white w-full ${margin}`}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
