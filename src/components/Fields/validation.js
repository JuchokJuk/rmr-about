export function checkEmail(email){
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export function phoneValidation(phone){
    if(phone.includes('+7')){
        if(phone.length < 18){
            return "Не хватает цифр"
        }else{
            return true
        }
    }else{
        if(phone.length < 7){
            return "Не хватает цифр"
        }else{
            return true
        }
    }
}