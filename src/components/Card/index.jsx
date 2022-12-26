import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src=""/>
      <Content>
        <UserInfo>
          <UserPicture src=""/>
         <div>
          <h4>Júlio Rodrigues</h4>
          <p>Há 15 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto bootcamp DIO </h4>
          <p>Projeto feito no curso de react no bootcamp da dio Orange Tech...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #React</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }