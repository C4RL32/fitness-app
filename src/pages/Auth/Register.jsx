import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { register } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

// Esquema de validación extendido para registro
const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string()
    .min(6, "Mínimo 6 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número"),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
});

export default function Register() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });
  const { user } = useAuth();

  const onSubmit = async (data) => {
    try {
      await register(data.email, data.password, data.name);
      alert("¡Registro exitoso! Por favor inicia sesión");
      // Redirigir a login después de registro exitoso
      window.location.href = "/login";
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre completo</label>
          <input 
            {...register("name")} 
            placeholder="Tu nombre" 
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            {...register("email")} 
            placeholder="tu@email.com" 
            type="email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input 
            {...register("password")} 
            type="password" 
            placeholder="Mínimo 6 caracteres"
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input 
            {...register("confirmPassword")} 
            type="password" 
            placeholder="Repite tu contraseña"
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>

      <div className="auth-footer">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </div>
    </div>
  );
}