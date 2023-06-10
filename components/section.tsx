"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

const FormSchema = z.object({
  threadLink: z
    .string()
    .url()
    .regex(/twitter\.com\/.+\/status\/\d+$/, {
      message: "Invalid twitter thread link",
    }),
  isThread: z.boolean().optional(),
  theme: z.enum(["default", "dim", "lights out", "blue gray", "teal"], {
    required_error: "Please select a theme",
  }),
  show_engagement: z.boolean().optional(),
  show_details: z.boolean().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const defaultValues: Partial<FormValues> = {
  isThread: false,
  theme: "default",
  show_engagement: true,
  show_details: true,
};

export function InputReactHookForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 px-6 md:px-0"
      >
        {/* <div className="flex flex-row gap-4 items-end w-full"> */}
        <FormField
          control={form.control}
          name="threadLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Twitter Thread Link</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="https://twitter.com/PritishhMishraa/status/1666106369341288453"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isThread"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  className="h-5 w-5"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-base">is thread?</FormLabel>
            </FormItem>
          )}
        />
        {/* </div> */}
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-white">
              <FormLabel className="text-base">Theme</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-[200px] appearance-none bg-transparent font-normal"
                    )}
                    {...field}
                  >
                    <option value="default">default</option>
                    <option value="dim">dim</option>
                    <option value="lights out">lights out</option>
                    <option value="blue gray">blue gray</option>
                    <option value="teal">teal</option>
                  </select>
                </FormControl>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="show_engagement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-white">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Show Engagement</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="show_details"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-white">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Show Details</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function Section() {
  return (
    <div className="mx-auto mb-10 mt-12 max-w-md px-2.5 sm:max-w-xl sm:px-0 z-10 w-full">
      <InputReactHookForm />
    </div>
  );
}
