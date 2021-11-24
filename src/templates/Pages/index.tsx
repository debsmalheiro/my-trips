import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'

import { CloseOutline } from '@styled-icons/evaicons-outline'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>Texto</p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
