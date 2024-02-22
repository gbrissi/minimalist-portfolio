import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name field can't be empty",
    })
    .max(255, {
      message: "Name must be at most 255 characters long",
    }),
  email: z.string().email(),
  subject: z
    .string()
    .min(1, {
      message: "Subject field can't be empty",
    })
    .max(255, {
      message: "Subject must be at most 255 characters long",
    }),
  message: z
    .string()
    .min(1, {
      message: "Message field can't be empty",
    })
    .max(65535, {
      message: "Message must be at most 65535 characters long",
    }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("subject", values.subject);
    data.append("message", values.message);

    setIsLoading(true);

    fetch("https://formsubmit.co/gabrielrissisc@gmail.com", {
      method: "post",
      body: data,
    })
      .then((res) => {
        // Check the response status code
        if (res.ok) {
          toast({
            variant: "success",
            title: "Successful request",
            description: "Your message was sent successfully",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Failed request",
            description: "An unexpected error occurred, try again later",
          });
        }
      })
      .catch((_) => {
        toast({
          variant: "destructive",
          title: "Unexpected form submission error",
          description: "An unexpected error occurred, try again later",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...contactForm}>
      <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormInput
            label="Name"
            placeholder="John Doe"
            name="name"
            control={contactForm.control}
          />
          <FormInput
            label="Email"
            placeholder="johndoe@mail.com"
            name="email"
            control={contactForm.control}
          />
        </div>
        <FormInput
          label="Subject"
          placeholder="Job Offer"
          name="subject"
          control={contactForm.control}
        />
        <FormTextarea
          label="Message"
          placeholder="Hello there, my name is John doe..."
          name="message"
          control={contactForm.control}
        />
        <div className="flex w-full justify-end">
          {isLoading ? <ButtonLoading /> : <SubmitButton />}
        </div>
      </form>
    </Form>
  );
}

function SubmitButton() {
  return <Button type="submit">Send</Button>;
}

function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

interface FormProps {
  name: string;
  label: string;
  placeholder: string;
  // TODO: Can't find the right way to set this value as a parameter.
  control: any;
}

function FormInput(props: FormProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function FormTextarea(props: FormProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Textarea rows={4} placeholder={props.placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
