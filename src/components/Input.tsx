import { UseFormRegister } from "react-hook-form";

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

interface InputComponentProps {
  name: string;
  placeholder: string;
  error: string | undefined;
  label: string;
  customClass: string;
  register: UseFormRegister<any>;
  type: string;
  disabled?: boolean;
}
export default function InputComponent({
  placeholder,
  error,
  register,
  name,
  label,
  customClass,
  type,
  disabled = false,
}: InputComponentProps) {
  return (
    <div className="my-5 h-20">
      <p>{label}</p>
      <input
        type={type}
        className={`${fixedInputClass} ${customClass}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <span className="text-rose-500 text-xs">{error}</span>}
    </div>
  );
}
