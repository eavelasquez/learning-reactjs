import 'todomvc-app-css/index.css'
import 'todomvc-common'
import 'todomvc-common/base.css'
import { render } from 'preact'

import './index.css'
import { App } from './app'

render(<App />, document.getElementById('app') as HTMLElement)
