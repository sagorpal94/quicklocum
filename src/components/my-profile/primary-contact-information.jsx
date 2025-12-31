import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {FieldGroup} from "@/components/ui/field.jsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.jsx";
import {IdCard, Mail, Phone, User} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

const formSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name is too long"),
    position: z.string()
        .min(2, "Position must be at least 2 characters")
        .max(100, "Position name is too long"),
    phoneNumber: z
        .string()
        .regex(
            /^(\+?\d{1,3}[- ]?)?\d{10,14}$/,
            "Invalid phone number"
        ),
    email: z
        .string()
        .email("Invalid email address"),
})
export default function PrimaryContactInformation() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            position: "",
            phoneNumber: "",
            email: "",
        },
        mode: "onSubmit",
    })

    function onSubmit() {
    }

    return (

        <div>
            <h2 className="mb-4 text-lg font-semibold text-[#194185]">Primary Contact Information</h2>

            <Form {...form} >
                <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FieldGroup
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-3">
                        {/* Full Name Field */}
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">
                                        Full Name
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="Hamza El Mazouzi" {...field}/>
                                            <InputGroupAddon>
                                                <User/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="position"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">
                                        Position
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="CTO" {...field}/>
                                            <InputGroupAddon>
                                                <IdCard/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Email Address<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="Email Address..." {...field}/>
                                            <InputGroupAddon>
                                                <Mail/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Phone Number<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="(+880)1516184764" {...field}/>
                                            <InputGroupAddon>
                                                <Phone/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                    </FieldGroup>
                    <Button variant="secondary" type="submit"
                            className="bg-[#216CD2] hover:bg-[#216CD2] text-white">
                        Edit Details
                    </Button>
                </form>
            </Form>
        </div>
    )
}