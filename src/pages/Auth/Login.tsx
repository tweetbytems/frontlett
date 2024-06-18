import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/thirdparty/form";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-3 h-screen p-0 m-0">
      <div className="col-span-1 col"></div>
      <div className="col-span-1 col text-center mt-36 ">
        <div
          className="
        text-edu-blue text-3xl font-semibold
        "
        >
          <h1>
            Sign in to
            <span className="text-edu-yellow pl-2">Educativ</span>
          </h1>
        </div>
        <div>
          <p className=" mx-auto max-w-[60%] text-xs pt-2">
            To sign in, please, type the email address linked to your educativ
            account
          </p>
        </div>
        <div
          className="mt-10 bg-white shadow-lg h-48
        "
        >
          hi
        </div>
      </div>
      <div className="col-span-1 col"></div>
      <UIForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4">
                <div>
                  <FormLabel className="font-bold text-lg">Email</FormLabel>
                  <FormControl>
                    <Input label="" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>

                <div>
                  <FormLabel className="relative font-bold text-lg">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input label="" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </form>
      </UIForm>
    </div>
  );
};

export default Login;
