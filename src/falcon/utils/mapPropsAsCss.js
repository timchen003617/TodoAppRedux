/* map _props to CSS
 *
 * pass _cssProp (_camelCase, e.g. _fontSize='12px') to Component, this will translate
 * to css-prop (kebab-case, e.g. font-size: 12px;) and merge to styled components CSS
 */
import {
  kebabCase,
  filter,
  startsWith,
  keys,
  join
} from 'lodash'
import map from 'lodash/fp/map'

const startsWith_ = k => startsWith(k, '_')
const toCssObj = props => k => `${kebabCase(k)}:${props[k]}`

export default props => join(map(toCssObj(props))(filter(keys(props), startsWith_)), ';') + ';'
