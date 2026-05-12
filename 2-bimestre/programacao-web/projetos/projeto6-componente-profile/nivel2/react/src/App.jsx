import Profile from "./components/Profile"

export default function App() {
  return (
    <div>
      <h1>Usuários do Sistema</h1>
      <div className="profiles-container">
        <Profile
          nome="Ana Souza"
          idade={29}
          profissao="UX Designer"
          foto="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <Profile
          nome="Carlos Lima"
          idade={34}
          profissao="Dev Full Stack"
          foto="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <Profile
          nome="Mariana Costa"
          idade={25}
          profissao="Product Manager"
          foto="https://randomuser.me/api/portraits/women/68.jpg"
        />
      </div>
    </div>
  )
}