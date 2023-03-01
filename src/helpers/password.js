function strengthChecker(pass){
  //Minimo 8 caracteres 1 minuscula 1 mayuscula 1 caracter especial y un numero
  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
      
  if(strongPassword.test(pass)){
    return true
  }
    
  return false
}
  
export default strengthChecker