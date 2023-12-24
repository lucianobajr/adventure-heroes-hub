import React, { useState } from 'react';

import * as z from "zod"

import { useForm } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import { zodResolver } from "@hookform/resolvers/zod"

import { useAuth } from "../../../contexts/auth/AuthContext"
import { formSchema } from '@/schemas/form-sign-in';

import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/organisms/form';

import { Loader2 } from 'lucide-react';

const FormSignIn: React.FC = () => {
    const [loading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nickname: "",
        },
    })

    const { signIn } = useAuth();

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const { nickname } = values;

            signIn({ nickname });

            //history('/')
        } catch (error) {
            alert(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <FormField
                    control={form.control}
                    name="nickname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='flex flex-col'>
                                    <Label className='font-roboto-slab font-bold mb-2 dark:text-black'>Nickname</Label>
                                    <Input placeholder="Jhon Doe" {...field} className='h-12 rounded-lg border border-gray-secondary dark:bg-white font-roboto-slab text-gray-secondary dark:text-gray-secondary placeholder-gray-700 ' />
                                </div>
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={loading} className='w-full rounded-lg text-base font-roboto-slab font-bold h-12 text-white bg-main hover:bg-dark-main transition-colors duration-300' type='submit'>{loading ?
                    <>
                        <Loader2 className="mr-2 animate-spin" />
                        Please wait
                    </>
                    : "Entrar"
                }</Button>
            </form>

        </Form>
    );
}

export default FormSignIn;