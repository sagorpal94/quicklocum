import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Shield, Lock, Users, Upload, Trash2, Mail, Eye, EyeOff, Check, X} from "lucide-react"

function MyAccountPage() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    return (
        <div className="min-h-screen">
            <div className="space-y-6">
                {/* Status Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Security Status */}
                    <div className="rounded-[12px] border bg-card p-3 transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm text-[#194185]">Security Status</p>
                                <p className="text-lg font-medium text-[#194185]">Protected</p>
                            </div>
                            <div className="rounded-[8px] bg-[#EAF5FE] w-11 h-11 flex justify-center items-center">
                                <Shield className="h-6 w-6 text-[#2D8FE3] " strokeWidth="1.5px"/>
                            </div>
                        </div>
                    </div>

                    {/* Connection Status */}
                    <div className="rounded-lg border bg-card p-3 transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm text-[#194185]">Connection</p>
                                <p className="text-lg font-medium text-[#194185]">Encrypted</p>
                            </div>
                            <div className="rounded-[8px] bg-[#EBFFEE] w-11 h-11 flex justify-center items-center">
                                <Lock className="h-6 w-6 text-[#19B28A]" strokeWidth="1.5px"/>
                            </div>
                        </div>
                    </div>

                    {/* Account Type */}
                    <div
                        className="rounded-lg border bg-card p-3 transition-all hover:shadow-md sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm text-[#194185]">Account Type</p>
                                <p className="text-lg font-medium text-[#194185]">Institute</p>
                            </div>
                            <div className="rounded-[8px] bg-[#FBF1E7]  w-11 h-11 flex justify-center items-center">
                                <Users className="h-6 w-6 text-[#F0A33A]" strokeWidth="1.5px"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="rounded-[12px] border border-[#F3F4F6] bg-card p-6 shadow-[0px_9px_24px_0px_rgba(0,0,0,0.03)]">
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h2 className="text-xl font-bold text-[#194185]">Account Setting</h2>
                            <p className="text-sm text-[#194185]">
                                Manage your personal information and security settings
                            </p>
                        </div>

                        {/* Profile Picture Section */}
                        <div
                            className="space-y-4 bg-[#F3F9FE] p-3 rounded-[8px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4 mb-0">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Profile"/>
                                    <AvatarFallback>RA</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-base font-medium text-[#194185]">Profile Picture</h3>
                                    <p className="text-sm text-[#194185]">PNG, JPEG Under 12MB</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Button variant="outline" className="gap-2 bg-[#DBEEFF] rounded-[8px] border border-[#F3F4F6] py-3 px-2 text-base text-[#2A394B]">
                                    <Upload className="h-5 w-5"/>
                                    Upload Image
                                </Button>
                                <Button
                                    variant="outline"
                                    className="gap-2 bg-[#FFFBFA] rounded-[8px] border border-[#F3F4F6] py-3 px-2 text-base text-[#2A394B]"
                                >
                                    <Trash2 className="h-5 w-5"/>
                                    Delete
                                </Button>
                            </div>
                        </div>

                        {/* Personal Information Section */}
                        <div className="space-y-5">
                            <div className="space-y-[6px]">
                                <h3 className="text-base font-medium text-[#4B5563]">Personal Information</h3>
                                <p className="text-sm font-medium text-[#4B5563]">Upload your email and name
                                    details</p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="space-y-[13px]">
                                    <Label className="text-[#4B5563] text-sm" htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Rafla" className="text-sm text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] py-[10px] px-[14px] rounded-[8px] gap-[10px]"/>
                                </div>
                                <div className="space-y-[13px]">
                                    <Label className="text-[#4B5563] text-sm" htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Rafla" className="text-sm text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] py-[10px] px-[14px] rounded-[8px] gap-[10px]"/>
                                </div>
                                <div className="space-y-[13px]">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-[#4B5563] text-sm" htmlFor="email">Email</Label>
                                        <button
                                            className="text-sm text-[#2D8FE3] underline cursor-pointer">
                                            Changes
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <Mail
                                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                        <Input id="email" type="email" defaultValue="rafla.afla@gmail.com"
                                               className="bg-muted/50 pl-10"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security & Password Section */}
                        <div className="space-y-5">
                            <div className="space-y-[6px]">
                                <h3 className="text-base font-medium text-[#4B5563]">Security & Password</h3>
                                <p className="text-sm text-[#4B5563]">Modify your current password</p>
                            </div>

                            {/* Password Security Tips */}
                            <div className="rounded-[8px] bg-[#FCF1F1] p-3 gap-2">
                                <h4 className="mb-3 text-sm font-medium text-[#18202A]">Password Security Tips</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-1 text-sm">
                                        <Check className="h-4 w-4 shrink-0 text-[#34C759]" strokeWidth="1.5px"/>
                                        <span className="text-xs text-[#2A394B]">
                                          Use a combination of uppercase, lowercase, numbers, and special characters
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <X className="h-4 w-4 shrink-0 text-[#ED354A]"/>
                                        <span className="text-xs text-[#2A394B]">Avoid using personal information in your password</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <X className="h-4 w-4 shrink-0 text-[#ED354A]"/>
                                        <span className="text-xs text-[#2A394B]">Change your password regularly for enhanced security</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Password Fields */}
                            <div className="grid gap-5 lg:grid-cols-3">
                                <div className="space-y-[13px]">
                                    <Label className="text-[#4B5563] text-sm" htmlFor="currentPassword">Current Password</Label>
                                    <div className="relative">
                                        <Lock
                                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" strokeWidth="1.2px"/>
                                        <Input
                                            id="currentPassword"
                                            type={showCurrentPassword ? "text" : "password"}
                                            defaultValue="rafla.afla@gmail.com"
                                            className="pl-10 pr-10 text-sm text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] rounded-[8px] gap-[10px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showCurrentPassword ? <EyeOff className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/> :
                                                <Eye className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/>}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-[13px]">
                                    <Label className="text-[#4B5563] text-sm" htmlFor="newPassword">New Password</Label>
                                    <div className="relative">
                                        <Lock
                                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" strokeWidth="1.2px"/>
                                        <Input
                                            id="newPassword"
                                            type={showNewPassword ? "text" : "password"}
                                            defaultValue="rafla.afla@gmail.com"
                                            className="pl-10 pr-10 text-sm text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] rounded-[8px] gap-[10px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showNewPassword ? <EyeOff className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/> :
                                                <Eye className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/>}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-[13px]">
                                    <Label className="text-[#4B5563] text-sm" htmlFor="confirmPassword">Confirm New Password</Label>
                                    <div className="relative">
                                        <Lock
                                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" strokeWidth="1.2px"/>
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            defaultValue="rafla.afla@gmail.com"
                                            className="pl-10 pr-10 text-sm text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] rounded-[8px] gap-[10px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/> :
                                                <Eye className="h-4 w-4 text-[#6B7280]" strokeWidth="1.2px"/>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col-reverse gap-[8px] pt-4 sm:flex-row sm:justify-end">
                                <Button variant="outline" size="lg" className=" cursor-pointer rounded-[8px] py-[10px] px-[16px] gap-[6px] bg-[#F3F4F6] text-[#2A394B] text-sm">
                                    Cancel
                                </Button>
                                <Button
                                    size="lg"
                                    className=" cursor-pointer rounded-[8px] py-[10px] px-[16px] gap-[6px] bg-[#2D8FE3] text-[#FBFBFB] text-sm sm:w-auto "
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyAccountPage;