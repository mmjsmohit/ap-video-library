"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { useEffect } from "react";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  // Watch for changes in the input value and update the router.
  useEffect(() => {
    const subscription = form.watch((value) => {
      const inputValue = value.input ?? "";
      if (inputValue.length === 1) {
        router.push(`/`);
      } else if (inputValue.length >= 2) {
        router.push(`/search/${inputValue}`);
      }
    });

    return () => subscription.unsubscribe();
  }, [form, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchInput;