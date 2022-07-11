import {createApp} from 'vue'
import App from './App.vue'
import {qiankunWindow, renderWithQiankun, QiankunProps} from "vite-plugin-qiankun/es/helper";

let instance: any = null;

function render(props: QiankunProps) {
    const container = props.container?.querySelector('#app')
    instance = createApp(App).mount(container || '#app')
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
    createApp(App).mount('#app')
}
