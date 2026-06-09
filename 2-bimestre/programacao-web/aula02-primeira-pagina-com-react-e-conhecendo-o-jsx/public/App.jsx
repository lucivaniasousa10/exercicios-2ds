// Importando o CSS do componente
import './App.css'

// Variável com seu filme favorito
const filmeFavorito = "Vingadores: Ultimato"

export default function App() {
  return (
    <div>
      {/* Seu nome */}
      <h1>lucivania sousa</h1>

      {/* Sua matéria favorita */}
      <p>Minha matéria favorita é Desenvolvimento Web.</p>

      {/* Filme favorito */}
      <p>Meu filme favorito é: {filmeFavorito}</p>
    </div>
  )
}