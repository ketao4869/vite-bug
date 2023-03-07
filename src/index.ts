import { App } from 'vue'

import CrudEl from './CrudEl/index.vue'
import Comp from './Components/index'

const install = (app: App, options?: any): void => {
    app.component(CrudEl.name, CrudEl)

    Comp.forEach((com) => {
        app.component(com.name, com)
    })

    if (options) console.log(options)
}

export default install
