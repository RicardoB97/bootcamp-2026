function twoSum(nums, target) {
  //tu codigo aqui
  const map = {};
  for(let i=0;i<nums.length;i++){

    const num = nums[i];
    const complemento = target - num;

    if(map[complemento]!== undefined){
        return [map[complemento],i];

    }
    map[num] = i;
  }


}



function reverseString(str) {
  // tu código aquí
  let resultado = "";

  for(let i = str.length -1; i >= 0; i--){
    resultado += str[i];
  }
  return resultado;
}

function isPalindrome(str) {
  // tu código aquí

  
    if (str===reverseString(str)) {
      return true;
    } else {
      return false;
    }
  
}



// pruebas
console.log(twoSum([2,7,11,15], 9)); // debe dar [0,1]
console.log(reverseString("hola"));
console.log(isPalindrome("ana"));  // true
console.log(isPalindrome("hola")); // false