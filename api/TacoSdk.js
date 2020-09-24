import TacoUsers from './TacoUsers'
import TacoClassrooms from './TacoClassrooms'

export default class TacoClient {
    constructor( axios ){
        this.httpClient = axios
        this.users = new TacoUsers( axios )
        this.classrooms = new TacoClassrooms( axios )
    }
    async login( data ){
        try {
            return await this.httpClient.$post( '/auth/login', data )
        } catch (error) {
            throw error
        }
    }
    async leadersboard(){
        try {
            return await this.httpClient.$get( '/leaderboard' )
        } catch (error) {
            throw error
        }
    }
}