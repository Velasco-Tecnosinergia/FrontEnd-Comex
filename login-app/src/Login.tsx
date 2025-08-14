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
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition shadow-md hover:shadow-lg"
        >
          Entrar
        </button>
        <h3 className="text-xs font-bold text-center mt-3 text-gray-800">Tecnosinergia & UNV</h3>
      </div>
    </div>
  );
}
