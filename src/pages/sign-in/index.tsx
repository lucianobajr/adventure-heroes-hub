import React, { useState } from 'react';

import Logo from "../../assets/logo-with-name.svg"

import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Loader2 } from 'lucide-react';

import { useForm } from 'react-hook-form';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '../../components/ui/form';

import { Input } from '../../components/ui/input';

const formSchema = z.object({
    nickname: z.string().min(2, {
        message: "O Nickname é obrigatório!",
    })
})

import { useAuth } from "../../contexts/auth/AuthContext"
import { Label } from '@radix-ui/react-label';

const SignIn: React.FC = () => {
    const [loading, setIsLoading] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };


    const imageVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

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
        <div className="h-screen w-screen flex">
            <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-zinc-200 overflow-x-hidden overflow-y-hidden">
                <motion.div
                    className="w-full h-full lg:h-3/5 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={Logo}
                        alt="Adventure Heroes Hub Logo"
                        initial="hidden"
                        className='w-96 h-96'
                        animate="visible"
                        variants={imageVariants}
                    />
                </motion.div>

            </div>
            <motion.div
                className="h-screen w-full md:w-1/2 bg-white flex flex-col items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ duration: 0.5 }}
            >
                <div className='xs:w-96 w-full xs:p-0 p-2'>
                    <h1 className='font-roboto-slab font-bold text-4xl text-gray-secondary'>Hora da Batalha!</h1>
                    <h3 className='text-base mt-3'>Embarque na sua jornada épica. Estávamos esperando por você para viver as maiores aventuras!</h3>
                </div>

                <div className='xs:w-96 w-full mt-16 xs:p-0 p-2'>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                            <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className='flex flex-col'>
                                                <Label className='font-roboto-slab font-bold mb-2'>Nickname</Label>
                                                <Input placeholder="Jhon Doe" {...field} className='h-12 rounded-lg border border-gray-secondary font-roboto-slab text-secondary  placeholder-gray-700 ' />
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
                </div>

            </motion.div >

        </div >
    );
}

export default SignIn;