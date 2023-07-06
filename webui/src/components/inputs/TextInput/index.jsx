const TextInput = (props) => {
  return (
    <input
      {...props}
      className="border dark:border-gray-800 transition-colors rounded py-2.5 text-sm text-gray-900 px-3 outline-none w-full hover:border-gray-400 focus:border-blue-600 dark:bg-[#262730] dark:text-gray-100 tracking-widest dark:focus:border-blue-500"
    />
  );
};

export default TextInput;
