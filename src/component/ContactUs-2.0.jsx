
import Button from "../Shared/Button"
import Input from "../Shared/Input"
import Label from "../Shared/Label"
import Textarea from "../Shared/Textarea"

export default function ContactUs2() {
    return (
        <div id="contact" className="mx-auto space-y-6 min-h-screen items-center flex flex-col justify-center  bg-gradient-to-r from-theme-background-100 to-theme-foreground-100">
            <div className="border-2 p-4 rounded bg-white w-full max-w-xl border-theme-foreground-500 shadow">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="text-theme-background-500">Fill out the form below and {"we'll"} get back to you as soon as possible.</p>
                </div>
                <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input className="w-full" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input className="w-full" id="email" type="email" placeholder="Enter your email" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input className="w-full" id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" required />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={(e) => {
                            e.preventDefault()
                            const name = document.getElementById("name").value
                            const email = document.getElementById("email").value
                            const phone = document.getElementById("phone").value
                            const message = document.getElementById("message").value
                            const recipientEmail = "info@preventivesmarttechnology.co.in"
                            const mailToLink = `mailto:${recipientEmail}?subject=New Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`
                            window.location.href = mailToLink
                        }}
                    >
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    )
}