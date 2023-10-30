type FormInputProps = {
    textarea?: boolean;
    id: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required: boolean;
};

export const FormInput = (props: FormInputProps) => {
    const commonProps = {
        id: props.id,
        placeholder: props.placeholder,
        value: props.value,
        onChange: props.onChange,
        required: props.required,
        className: 'border border-rva-neutral-300 w-full rounded border p-2 focus:border-rva-800 outline-none duration-500'
    };

    if (props.textarea) {
        return <textarea {...commonProps} rows={5} />;
    } else {
        return <input {...commonProps} type={props.type} />;
    }
};
