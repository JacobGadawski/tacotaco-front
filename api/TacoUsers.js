export default class TacoUsersClient {
    constructor( axios ){
        this.httpClient = axios
    }
    async list(roles, entries, page){
        try {
            return await this.httpClient.$get(`/users-list?roles=${roles}&max_entries=${entries}&page=${page}`)
        } catch (error) {
            throw error
        }
    }
    async listActive(){
        try {
            return await this.httpClient.$get(`/users-list?roles=student&only_active=1`)
        } catch (error) {
            throw error
        }
    }
}