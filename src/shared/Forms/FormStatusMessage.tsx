import { Box } from '../Layout/Box';
import { Typography } from '../Typography';

type FormStatusMessageProps = {
    title: string;
    message: string;
};

export const FormStatusMessage = (props: FormStatusMessageProps) => {
    const { title, message } = props;
    return (
        <Box className="flex flex-col gap-4 rounded-md bg-rva-neutral-800 px-4 py-8 text-white">
            <Typography variant="h4" className="text-center">
                {title}
            </Typography>
            <Typography className="mx-auto max-w-sm text-center">{message}</Typography>
        </Box>
    );
};
