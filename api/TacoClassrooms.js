export default class Classrooms{
    constructor( axios ){
        this.httpClient = axios
    }
    async list(){
        try {
            return this.httpClient.$get( '/classroom' )
        } catch (error) {
            throw error
        }
    }
    async byId( id ){
        try {
            return this.httpClient.$get( `/classroom/${id}` )
        } catch (error) {
            throw error
        }
    }
}