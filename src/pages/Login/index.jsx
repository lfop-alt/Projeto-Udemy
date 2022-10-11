import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './syled';

import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  // useEffect é para eu execulta ele somente 1 vez e posso colocar um
  // parametro dentro dos concheites para definir que toda vez que a variavel
  // muda ele roda esse useEffect
  // React.useEffect(() => {
  // async function getData() {
  //   const response = await axios.get('/alunos');
  //   const { data } = response;
  // }
  // }, []);
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
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
