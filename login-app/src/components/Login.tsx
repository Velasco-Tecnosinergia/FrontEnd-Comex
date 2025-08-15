import { useState, type JSX } from "react";

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (): void => {
    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    if (username === "admin" && password === "1234") {
      alert("Login exitoso 🎉");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700">
      <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 animate-fadeIn">
        <img
            alt="Your Company"
            src="/src/assets/uniview_mexico.png"
            className="mx-auto h-10 w-auto"
        />
        <h2 className="text-3xl font-bold text-center mb-6 text-sky-950">
          Iniciar Sesión
        </h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-sky-700 transition"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-sky-700 transition"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <div className="text-sm pb-4">
        <a href="#" className="font-semibold text-sky-950 hover:text-indigo-700">
          ¿Has olvidado tu contraseña?
        </a>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-800 text-white py-3 rounded-lg hover:bg-cyan-900 transition shadow-md hover:shadow-lg"
        >
          Entrar
        </button>
        <h3 className="text-xs font-bold text-center mt-3 text-sky-950">Tecnosinergia</h3>
      </div>
    </div>
  );
}
