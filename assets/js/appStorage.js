class appStorage{

    storeToken(access_token){
        localStorage.setItem('token',access_token)
    }

    storeUserId(id){
        localStorage.setItem('id',id)
    }


    storeUserName(name){
        localStorage.setItem('name',name)
    }

    storeUserEmail(email){
        localStorage.setItem('email',email)
    }

    store(access_token, name, id, email) {
        this.storeToken(access_token)
        this.storeUserName(name)
        this.storeUserId(id)
        this.storeUserEmail(email)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('id')
        localStorage.removeItem('email')
    }

    getToken(){
        localStorage.getItem('token')

    }
    getUser(){
        localStorage.getItem('id')
    }

}

export default appStorage = new appStorage();
