'use client';

import { FormEvent, useState } from 'react';
import { Button } from '../../shared/Buttons/Button';
import { Typography } from '@/shared/Typography';
import { Box } from '@/shared/Layout/Box';
import { LoadingPosition } from '@/shared/Buttons/types/ButtonType';
import { FormInput } from '@/shared/Forms/FormInput';
import { FormLabel } from '@/shared/Forms/FormLabel';
import { FormStatusMessage } from '@/shared/Forms/FormStatusMessage';

enum FormStatus {
    IDLE = 'idle',
    SUBMITTING = 'submitting',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const ContactForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [contactFormStatus, setContactFormStatus] = useState<FormStatus>(FormStatus.IDLE);
    const isSubmitting = contactFormStatus === FormStatus.SUBMITTING;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setContactFormStatus(FormStatus.SUBMITTING);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                setContactFormStatus(FormStatus.SUCCESS);
                setEmail('');
                setMessage('');
            } else {
                setContactFormStatus(FormStatus.ERROR);
            }
        } catch (error) {
            setContactFormStatus(FormStatus.ERROR);
        }
    };

    if (contactFormStatus === FormStatus.SUCCESS) {
        return (
            <FormStatusMessage
                title="Thank you!"
                message="Your message has been received, and I appreciate your contact. I'll get back to you as soon as possible. Have a wonderful day!"
            />
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col gap-4" disabled={isSubmitting}>
                <Box>
                    <FormLabel htmlFor="name" label="Your name" />
                    <FormInput
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Box>

                <Box>
                    <FormLabel htmlFor="email" label="Your email address" />
                    <FormInput
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Box>

                <Box>
                    <FormLabel htmlFor="message" label="Message" />
                    <FormInput
                        id="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        textarea
                    />
                </Box>
            </fieldset>

            {contactFormStatus === FormStatus.ERROR && (
                <Typography variant="text-sm" className="text-error-100">
                    Oops, something went wrong. Please try again later. If the issue persists, you can reach out to me using one of the
                    contact options on the left.
                </Typography>
            )}

            <Button
                type="submit"
                variant="contained"
                className="ml-auto mt-2 w-fit"
                endIcon="paper-plane"
                disabled={isSubmitting}
                loading={isSubmitting}
                loadingPosition={LoadingPosition.ONLY}
            >
                Send
            </Button>
        </form>
    );
};
