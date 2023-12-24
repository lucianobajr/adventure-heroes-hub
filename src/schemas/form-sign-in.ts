import * as z from "zod"

const formSchema = z.object({
    nickname: z.string().min(2, {
        message: "O Nickname é obrigatório!",
    })
})

export { formSchema };