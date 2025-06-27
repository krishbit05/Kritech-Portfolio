import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            emailjs
                .sendForm('service_js0ymef', 'template_xw9vqss', form.current, {
                    publicKey: 'ecwblI57aLDhrICD-',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false);
        }, 1500);
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind, want to collaborate, or just want to say hello?
                    I’m always open to new opportunities, feedback, or simply a good conversation.
                    Feel free to reach out — I’ll get back to you as soon as possible!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex space-x-4 border border-primary/50 py-2 rounded-lg pl-2 pr-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="font-medium">Email</div>
                                    <a href="mailto:krishchahit1605@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mailto:krishchahit1605@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex space-x-4 border border-primary/50 py-2 rounded-lg pl-2 pr-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="font-medium">Phone</div>
                                    <a href="tel:+917696007150" className="text-muted-foreground hover:text-primary transition-colors">callme:+917696007150</a>
                                </div>
                            </div>
                            <div className="flex space-x-4 border border-primary/50 py-2 rounded-lg pl-2 pr-5 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col items-start" >
                                    <div className="font-medium">Location</div>
                                    <a className="text-muted-foreground hover:text-primary transition-colors flex">Chandigarh</a>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect with me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" target="_blank">
                                        <Linkedin />
                                    </a>
                                    <a href="#" target="_blank">
                                        <Twitter />
                                    </a>
                                    <a href="#" target="_blank">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form action="" className="space-y-6" ref={form} onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                                    placeholder="krish kumar..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                                    placeholder="john @gmail.com..." />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>
                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                                disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}