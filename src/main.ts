import {createApp} from 'vue'
import App from './App.vue'
import {qiankunWindow, renderWithQiankun, QiankunProps} from "vite-plugin-qiankun/es/helper";

let instance = null;

function render(props = {}) {
    const {container} = props;
    console.log(container)
    instance = createApp(App)
        // .mount('#app')
        .mount(container ? container.querySelector('#app') : document.getElementById("app"))
}


renderWithQiankun({
    bootstrap(): void | Promise<void> {
        return undefined;
    },
    update(props: QiankunProps): void | Promise<void> {
        return undefined;
    },
    mount(props) {
        render(props)
    },
    unmount(props: any) {
        if (instance) {
            instance.unmount()
            instance._container.innerHTML = '';
            instance = null;
        }
    }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}
