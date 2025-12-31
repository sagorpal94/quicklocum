import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {FieldGroup} from "@/components/ui/field.jsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.jsx";
import {Chromium, DoorOpen, IdCard, Mail, MapPin, Phone} from "lucide-react";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

const formSchema = z.object({
    agencyName: z
        .string()
        .min(2, "Agency name must be at least 2 characters")
        .max(100, "Agency name is too long"),

    businessName: z.string()
        .min(2, "Business name must be at least 2 characters")
        .max(100, "Business name is too long"),

    headOfficeAddress: z.string()
        .min(5, "Address must be at least 5 characters"),

    city: z
        .string()
        .min(2, "City name is required"),

    province: z
        .string()
        .min(2, "Province is required"),

    postalCode: z
        .string()
        .regex(/^[A-Za-z0-9 -]{3,10}$/, "Invalid postal code"),

    phoneNumber: z
        .string()
        .regex(
            /^(\+?\d{1,3}[- ]?)?\d{10,14}$/,
            "Invalid phone number"
        ),

    email: z
        .string()
        .email("Invalid email address"),

    website: z
        .string()
        .url("Invalid website URL")
        .optional(),
})

export default function AgencyInformation(){

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            agencyName: "",
            businessName: "",
            headOfficeAddress: "",
            city: "",
            province: "",
            postalCode: "",
            phoneNumber: "",
            email: "",
            website: "",
        },
        mode: "onSubmit",
    })

    function onSubmit() {
    }
    return (
        <div>
            <h2 className="mb-4 text-lg font-semibold text-[#194185]">Agency Information</h2>

            <Form {...form} >
                <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FieldGroup
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-3">
                        {/* Agency Name Field */}
                        <FormField
                            control={form.control}
                            name="agencyName"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">
                                        Agency Name
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="Search..." {...field}/>
                                            <InputGroupAddon>
                                                <DoorOpen/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="businessName"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">
                                        Business Name
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="Business Name..." {...field}/>
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
                            name="headOfficeAddress"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Head Office
                                        Address<span
                                            className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="Head Office Address..." {...field}/>
                                            <InputGroupAddon>
                                                <MapPin/>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="city"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">City<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#F3F4F6] border-[#E5E7EB]"
                                               type="text"
                                               placeholder="City..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="province"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Province<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#F3F4F6] border-[#E5E7EB]"
                                               type="text"
                                               placeholder="Province..." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="postalCode"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Postal Code<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#F3F4F6] border-[#E5E7EB]"
                                               type="text"
                                               placeholder="Postal Code..." {...field} />
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
                            name="website"
                            render={({field}) => (
                                <FormItem className="gap-[13px]">
                                    <FormLabel className="mb-0.5 gap-0">Website<span
                                        className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <InputGroup className="bg-[#F3F4F6] border-[#E5E7EB]">
                                            <InputGroupInput type="text"
                                                             placeholder="https://www.example.com..." {...field}/>
                                            <InputGroupAddon>
                                                <Chromium/>
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
};