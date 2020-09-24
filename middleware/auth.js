export default function ( { store, redirect } ){
    console.log( store )
    if( store.getters["user/authenticated"] ){
        console.log( 'authenticated' )
    }else{
        console.log( 'not authenticated' )
        redirect({ name: 'login' })
    }
}