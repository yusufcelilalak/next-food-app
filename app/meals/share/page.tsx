"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImagePicker from "@/components/ui/image-picker";
import FormDataSchema from "@/schemas/form-data-schema";
import { shareMeal } from "@/lib/actions";

export default function Share() {
  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      creator: "",
      creator_email: "",
      title: "",
      summary: "",
      instructions: "",
      image: null,
    },
  });

  async function onSubmit(values: z.infer<typeof FormDataSchema>, e: any) {
    const formData = new FormData(e.target);
    const { image, ...mainForm } = values;

    const result = await shareMeal(mainForm, formData);
    console.log(result, "result");
  }

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
            onSubmit={form.handleSubmit((data, e) => onSubmit(data, e))}
            // action={shareMeal}
            className="space-y-8 w-8/12 "
          >
            <div className=" flex w-full gap-6">
              <FormField
                control={form.control}
                name="creator"
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
                name="creator_email"
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
                disabled={form.formState.isSubmitting}
                type="submit"
                className=" text-right bg-gradient-to-r from-primary/90 to-secondary/90 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 mr-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Share Meal"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}
