import { Typography } from '../Typography';

type FormLabelProps = {
    label: string;
    htmlFor: string;
};

export const FormLabel = (props: FormLabelProps) => (
    <label htmlFor={props.htmlFor} className="mb-1 block">
        <Typography className="header text-sm">{props.label}</Typography>
    </label>
);
