import foo from './foo.js'
import { version } from '../package.json' // tree shaking
export default function () {
  console.log(foo)
  console.log('version ' + version)
}
