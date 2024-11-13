import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../utils/useAuth";

const LogIn = () => {

    const {logIN} = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    logIN(email,password)
     .then(result => {
        console.log(result.user)
     })
     .catch(error => {
        console.log(error)
     })
  };

  return (
    <div className=" w-full h-screen grid justify-center ">
      <div className=" w-4/6 m-auto md:p-8 grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center gap-x-20 items-center">
        <div className="form_section w-full">
          <h1 className="text-6xl font-PT capitalize ">login here...</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full grid grid-cols-1 gap-y-4"
          >
            <input
              className="w-full border-b-[1px] border-zinc-400 outline-none focus:bg-none ps-4 my-5 font-serif"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p role="alert">email is required</p>
            )}
            <input
              className="w-full border-b-[1px] border-zinc-400 outline-none focus:bg-none ps-4 my-5 font-serif"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Password"
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
            <input
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            />
          </form>
          <p>dont have any accout..? <Link to='/signUp'>sign-up</Link></p>
        </div>
        <div className="text_section">
          <h1 className=" text-5xl font-serif ">nice to see you again..</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem laudantium doloribus rem nesciunt ab aut?
          </p>
          <button className="">
            <img className=" w-24 h-24 aspect-video object-cover" src="https://i.pinimg.com/originals/3b/13/2b/3b132b09c724d2406b3e8967a2967bbd.gif" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
