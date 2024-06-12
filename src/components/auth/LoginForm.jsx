import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../Common/Field";
import { useAuth } from "../../hooks/useAuth";












const LoginForm = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const user = {...formData}
    setAuth({user});
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3f3f3f] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email id is required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password id is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
