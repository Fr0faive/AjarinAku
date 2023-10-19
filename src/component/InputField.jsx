const InputField = (props) => {
    const { type, placeholder, margin } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered input-info bg-white w-full ${margin}`}
      />
    </>
  );
};

export default InputField;
