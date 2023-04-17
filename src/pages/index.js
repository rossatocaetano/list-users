import Head from 'next/head';
import { Container, Main, Title} from '@/styles/sharedstyles';
import { Card, CardImage, CardItens, CardMainInfo } from '@/styles/card';

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
    <Container>
      <Head>
        <title>Listar Usuários</title>
        <meta name="Listar usuários" content="Exemplo para criar usuários consumindo a API randomuser.me em tempo de execução" />
      </Head>
      <Main>   
        <Title>Usuários</Title>
        <ul>
          {users.map((user) => (
            <Card key={user.login.uuid}>
              <CardImage src={user.picture.large} alt={`Foto de ${user.name.first} ${user.name.last}`} />
              <CardItens>
                <CardMainInfo>{user.name.first} {user.name.last}</CardMainInfo>
                <p>&#128231; <a href={`mailto:${user.email}`} target='_blank'>{user.email}</a></p>
                <p>Login: {user.login.username} </p>                
                <p>Gênero: {user.gender}</p>
                <p>Localização: {user.location.street.name}, {user.location.city}, {user.location.state} {user.location.country}</p>
                <p>Telefone: {user.phone} </p>
                <p>Celular: {user.cell}</p>
              </CardItens>
            </Card>
          ))}
        </ul>
      </Main>
    </Container>
  );
}