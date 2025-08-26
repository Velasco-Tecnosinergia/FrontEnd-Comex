import { useState, type JSX } from "react";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (): void => {
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (email === "admin" && password === "1234") {
      alert("Login exitoso 🎉");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Panel izquierdo con degradado y formas */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 items-center justify-center relative overflow-hidden">
        <div className="text-center text-white px-6 z-10">
          <h1 className="text-4xl font-bold mb-4">Pagina de Bienvenida</h1>
          <p className="text-lg opacity-70">Inicia sesión en tu cuenta</p>
        </div>
        {/* círculos decorativos */}
        <div className="absolute w-72 h-72 bg-white/30 rounded-full top-10 left-10 blur-2xl animate-pulse"></div>
        <div className="absolute w-40 h-40 bg-white/20 rounded-full bottom-10 right-10 blur-xl animate-pulse"></div>
      </div>

      {/* Panel derecho - Login */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Hola!</h2>
          <p className="text-sm mb-6">
            <span className="text-indigo-700 font-semibold">Login</span> to your account
          </p>

          <input
            type="email"
            placeholder="Corrreo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-700 outline-none py-2 mb-6 text-gray-700"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-700 outline-none py-2 mb-6 text-gray-700"
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Recuerdame
            </label>
            <a href="#" className="text-indigo-700 hover:underline">
              ¿Has olvidado tu contraseña?
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-80 transition"
          >
            INICIAR
          </button>

          <p className="mt-6 text-center text-sm text-indigo-950">
            Power by Tecnosinergia
          </p>
        </div>
      </div>
    </div>
  );
}
