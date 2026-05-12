import "../styles/ProfileCSS.css"

export default function Profile({ nome, idade, profissao, foto }) {
  return (
    <>
      <div className="profile-card">
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{idade} anos</p>
        <p>{profissao}</p>
      </div>
    </>
  )
}