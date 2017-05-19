import styled from 'styled-components'

import mapPropsAsCss from 'falcon/utils/mapPropsAsCss'

const Container = styled.div`
  position: static;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  ${mapPropsAsCss}
`

Container.displayName = 'Container'

export default Container
