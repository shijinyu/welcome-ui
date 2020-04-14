import styled, { th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Breadcrumb = styled(Box)`
  ${th('breadcrumbs.list')};
`

export const List = styled.ol`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`