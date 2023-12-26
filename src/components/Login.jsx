import axios from "axios";
import Modal from "./Modal";
import { useModal } from "./useModal";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  let [email, setEmail] = useState(""); // challenge@alkemy.org
  let [password, setPassword] = useState(""); // react
  let [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(false);
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!email.trim()) {
      setMessage("Escribe el e-mail");
      openModal();
      return;
    }
    if (email.trim() && !emailRegex.test(email.trim())) {
      setMessage("Escribe un e-mail de la forma example@email.com");
      openModal();
      return;
    }
    if (!password.trim()) {
      setMessage("Escribe la contraseña");
      openModal();
      return;
    }

    if (!sessionStorage.getItem("token")) {
      setLoading(true);
      setMessage("cargando los datos");
      openModal();
      axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          console.log(res.data.token);
          let token = res.data.token;
          sessionStorage.setItem("token", token);
          setLoading(false);
          setMessage("datos enviados correctamente");
          navigate("/listado");
        })
        .catch((err) => {
          console.log(err);
          console.log({ email, password });
          setLoading(false);
          setMessage(" ERROR verifique su usuario y contraseña");
        });
    } else {
      navigate("/listado");
    }
  };
  const handleClose = (e) => {
    closeModal();
  };

  let token = sessionStorage.getItem("token");
  if (token) return <Navigate to="/listado" />;

  return (
    <section className="max-w-[350px] mx-auto bg-dark self-center pt-5 pb-6 px-6 rounded-lg">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="user" className="flex items-center mb-2 font-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            className="fill-blue-300"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <span className="ml-2">Email</span>
        </label>
        <input
          type="text"
          name="user"
          id="user"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Ingresá tu usuario"
          className="mb-4 font-primary text-ultra px-2 py-1 rounded-lg outline-none focus:outline-blue-300"
        />
        <label
          htmlFor="password"
          className="flex items-center mb-2 font-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            className="fill-blue-300"
          >
            <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
          </svg>
          <span className="ml-2">Contraseña</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresá tu contraseña"
          className="mb-8 font-primary text-ultra px-2 py-1 rounded-lg outline-none focus:outline-blue-300"
        />
        <button
          type="submit"
          className="font-secondary border-white border-solid border-2 rounded-lg p-2 hover:border-blue-300 hover:text-blue-300"
        >
          Ingresar
        </button>
      </form>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} close={handleClose} showClose={!loading}>
          {message}
          {loading && (
            <div className="flex justify-center pt-5">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-white animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}

export default Login;
