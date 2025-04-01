import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const { user } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      alert("¡Inicio de sesión exitoso!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input {...register("password")} type="password" placeholder="Contraseña" />
      {errors.password && <p>{errors.password.message}</p>}
      
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}