import React from 'react';
import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './syled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Oiie </small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur
        in vero at fuga, quidem alias doloribus quis veniam eum, facere delectus
        totam porro mollitia illo dolorem unde? Mollitia, repellendus.
      </Paragrafo>
      <button type="submit">Enviar</button>
    </Container>
  );
}
