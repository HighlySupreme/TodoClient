import TInputRow from '../components/TInputRow.vue'
import TNavigationBar from '../components/TNavigationBar.vue'
export default ({ app }) => {
    app.component('t-navigation-bar',  TNavigationBar)
    app.component('t-input-row',  TInputRow)
}
