import TacoClient from '../api/TacoSdk'

export default ( { $axios }, inject ) => {
    inject('tacoClient', new TacoClient( $axios ))
}