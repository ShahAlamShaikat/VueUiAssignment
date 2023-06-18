class appStorage{

    //first set item on local storage
    //********************************

    storeToken(access_token){
        localStorage.setItem('token',access_token)
    }

    storeUserId(id){
        localStorage.setItem('id',id)
    }


    storeUserName(name){
        localStorage.setItem('name',name)
    }
    storeUserPhoto(photo){
        localStorage.setItem('photo',photo)
    }
    storeUserEmail(email){
        localStorage.setItem('email',email)
    }
    storeUserMemberId(member_id) {
        localStorage.setItem('member_id', member_id)
    }

    storeUserIsEmailVerified(is_email_verified){
        localStorage.setItem('is_email_verified',is_email_verified)
    }


// store item to storage
    store(access_token, name, id, photo, member_id, is_email_verified, email) {
        this.storeToken(access_token)
        this.storeUserId(id)
        this.storeUserName(name)
        this.storeUserEmail(email)
        this.storeUserPhoto(photo)
        this.storeUserMemberId(member_id)
        this.storeUserIsEmailVerified(is_email_verified)
    }

//if wants to clear item
    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('photo')
        localStorage.removeItem('member_id')
        localStorage.removeItem('is_email_verified')
    }

//get item

    getToken(){
        localStorage.getItem('token')

    }
    getUser(){
        localStorage.getItem('id')
    }

}

export default appStorage = new appStorage();
