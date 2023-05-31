import React from 'react'
import { useTranslation } from 'contexts/Localization'

import {
  InfoSect1,
  InfoCon,
  InfoText,
  Container,
  Main,
  FirstHeader,
  FirstHeaderCon,
  Sect,
  Sect1,
  Sect1a,
  Sect1b,
  Sect1c,
  Sect1d,
  Sect2a,
  Sect2b,
  Sect2c,
  Sect2d,
  Text1,
  Text2,
  Text3,
  Text4,
  Main2,
  Footer,
  LearnMoreBtn,
} from './styles'

interface InfoProps {
  content: string
}

const Info: React.FC<InfoProps> = ({ content }) => {
  return (
    <InfoCon>
      <InfoText>{content}</InfoText>
    </InfoCon>
  )
}

export const GnanaDisclaimers: React.FC = () => {
  const { t } = useTranslation()

  return (
    null
  )
}

export default GnanaDisclaimers
