import React from 'react';

type PropsDateInput = React.ComponentProps<'input'> & {
  label: string;
  id: string;
  handleChange: (e: React.ChangeEvent) => void;
};

const DateInput = ({ label, id, handleChange, ...props }: PropsDateInput) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default DateInput;
