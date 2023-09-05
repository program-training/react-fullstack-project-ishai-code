import { useForm } from "react-hook-form";
import axios from "axios";

type FormRegister = {
  email: string;
  password: string;
};

export function UserRegistration() {
  const { register, handleSubmit } = useForm<FormRegister>();

  const onSubmit = async (userData: FormRegister) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error while registering: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register("email")} />
      </label>
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
}
