"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImagePicker from "@/components/ui/image-picker";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  title: z.string().min(1, {
    message: "Title is required",
  }),
  summary: z.string().min(1, {
    message: "Summary is required",
  }),
  instructions: z.string().min(1, {
    message: "Instructions is required",
  }),
  image: z
    .any()
    .refine(
      (files) => {
        console.log(files[0], "heeey");
        debugger;
        return files?.length >= 1;
      },
      { message: "Image is required." }
    )
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: "Only .jpg, .jpeg, and .png files are accepted.",
    })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
});

export default function Share() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      image: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    debugger;
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  debugger;

  return (
    <div className="flex flex-col items-center h-full w-full">
      <header className="w-9/12 py-24 px-8 flex flex-col items-start text-left">
        <h1 className="text-5xl md:text-5xl font-bold mb-8">
          Share your <span className="text-primary">favorite meal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="mt-12 w-9/12 px-8 flex mb-24">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-8/12 "
          >
            <div className=" flex w-full gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className=" basis-1/2">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" basis-1/2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Summary</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none h-48" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Picture</FormLabel>
                  <FormControl>
                    <ImagePicker {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Button
                type="submit"
                className=" text-right bg-gradient-to-r from-primary/90 to-secondary/90 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105"
              >
                Share Meal
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}
