import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'


import { IconeFlag } from '../IconeFlag/IconeFlag'
import iconeFlag from '../../img/flag.svg'
import iconeFlagBlack from '../../img/flagBlack.svg'

import { IconeShare } from '../IconeShare/IconeShare'
import iconeShare from '../../img/iconeShare.svg'


import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false

  }

  onClickCurtida = () => {
    const valorAtual = this.state.numeroCurtidas
    const somaCurtidas = valorAtual + 1
    this.setState({ numeroCurtidas: somaCurtidas })
    if (somaCurtidas > 1) {
      this.setState({ numeroCurtidas: this.setState.numeroCurtidas = 0 })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickShare = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickFlag = () => {
    this.setState({
      salvo: true
    })
  }

  render() {
    let iconeCurtida

    if (this.state.numeroCurtidas >= 1) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let iconeSave

    if (this.state.salvo === false) {
      iconeSave = iconeFlag
    } else {
      iconeSave = iconeFlagBlack
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeShare 
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />

        <IconeFlag 
          icone={iconeSave}
          onClickIcone={this.onClickFlag}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post 