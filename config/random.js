const random = () =>{
    let password = '';
    for(let i=0;i<6;i++){
        password = password + Math.floor(Math.random() * 10);
    }
    return password;
}

module.exports = {random}