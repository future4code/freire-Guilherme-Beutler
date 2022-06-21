import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './img/perfil.jpg';
import logoempresa from './img/logoempresa.jpg';
import styled from 'styled-components';

const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`
const PageSection = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const PageSectionH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <StyleApp>
      <PageSection>
        <PageSectionH2>Dados pessoais</PageSectionH2>
        <CardGrande
          imagem={perfil}
          nome="Guilherme Beutler"
          descricao="Oi, sou estudante de programação na Labenu. Gosto de viajar, fazer trilhas, acampar e ter novas experiências."
        />
        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png"
          texto="Ver mais"
        />
      </PageSection>
      <div className='section-email'>
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/331/331389.png"
          email="Email: guilherme.beutler@outlook.com"
        />
      </div>
      <div className='section-adress'>
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png?w=826&t=st=1654627874~exp=1654628474~hmac=a79ac9440478c56ff20341mRvDoKhTb1KqfkQspoT9yypM9QzAxV7d341acebc4e"
          adress="Endereço: Eyre Square, Galway, Irlanda"
        />
      </div>
      <PageSection>
        <PageSectionH2>Experiências profissionais</PageSectionH2>
        <CardGrande
          imagem={logoempresa}
          nome="MJ Mecânica Diesel"
          descricao="Socio proprietário de empresa focada em mecânica pesada."
        />
        <CardGrande
          imagem="https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/e2/47/4b/e2474be9-ca85-d0de-0b26-757f062c91fd/AppIcon-1x_U007emarketing-85-220-0-5.png/230x0w.webp"
          nome="BRF S/A"
          descricao="Trabalhei nas areas de: cadastro, gestão de frota e suprimentos."
        />
      </PageSection>
      <div className="page-section-container">
        <PageSectionH2>Minhas redes sociais</PageSectionH2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />
        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </StyleApp>
  );
}

export default App;
