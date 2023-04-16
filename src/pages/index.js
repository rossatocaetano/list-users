import Head from 'next/head';

export async function getServerSideProps() {
  const USERS_API_URL = 'https://randomuser.me/api/?results=10';
  const response = await fetch(USERS_API_URL);
  const data = await response.json();
  return {
    props: {
      users: data.results,
    },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>Listar Usuários</title>
      </Head>
      <h1>Listar Usuários Aleatórios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.large} alt={`Foto de ${user.name.first} ${user.name.last}`} />
            <div>
              <p>Nome: {user.name.first} {user.name.last}</p>
              <p>Login: {user.login.username} </p>
              <p>Email: {user.email}</p>
              <p>Gênero: {user.gender}</p>
              <p>Localização: {user.location.street.name}, {user.location.city}, {user.location.state} {user.location.country}</p>
              <p>Telefone: {user.phone} </p>
              <p>Celular: {user.cell}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}