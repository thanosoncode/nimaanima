import { UseFormRegister } from 'react-hook-form';
import { OrderDetails } from '../page';

interface FieldsetProps {
  id: 'email' | 'fullName' | 'street' | 'postalCode' | 'city';
  label: string;
  info?: string;
  value: string | number;
  register: UseFormRegister<OrderDetails>;
  inputProps?: { multiple: boolean };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Fieldset: React.FC<FieldsetProps> = ({
  handleInputChange,
  id,
  label,
  value,
  inputProps,
  info,
  register,
}) => {
  return (
    <fieldset className='flex flex-col gap-2'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-900'>
        {label}
        {info && <p className='text-sm'>{info}</p>}
      </label>
      <input
        min={0}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
        id={id}
        value={value}
        type='text'
        {...inputProps}
        {...register(id, { required: true })}
        onChange={handleInputChange}
      />
    </fieldset>
  );
};
export default Fieldset;
