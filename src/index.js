module.exports = function reverse (n) {
    let result = '';

    let string = n.toString();
  
    for(let i = string.length - 1; i >= 0; i--){
        if(string[i] !== "-"){
            result += string[i];
        }
    }
  
    return Number(result);
}
