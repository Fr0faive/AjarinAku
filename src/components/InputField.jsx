const InputField = (props) => {
  const { name, type, placeholder, margin, onChange, height } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered input-info bg-white w-full ${height} text-gray-900 ${margin}`}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
