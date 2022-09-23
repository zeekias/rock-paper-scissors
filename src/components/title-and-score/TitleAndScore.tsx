import React from 'react'
import Score from '../score/Score'
import { ContainerTitleAndScore } from './styles'

export default function TitleAndScore() {
  return (
    <ContainerTitleAndScore>
        <h1> ROCK<br/> PAPER<br/> SCISSORS </h1>
        <Score />
    </ContainerTitleAndScore>
  )
}
