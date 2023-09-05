import { useForm } from "react-hook-form";
import axios from "axios";

type FormLogin = {
  email: string;
  password: string;
};

export function UserLogin() {
  const { register, handleSubmit } = useForm<FormLogin>();

  const onSubmit = async (userData: FormLogin) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData
      );
      console.log("you logged in successfully:", response.data);
    } catch (error) {
      console.error("Error while login: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...login("email")} />
      </label>
      <label>
        Password
        <input type="password" {...login("password")} />
      </label>
      <input type="submit" value="login" />
    </form>
  );
}