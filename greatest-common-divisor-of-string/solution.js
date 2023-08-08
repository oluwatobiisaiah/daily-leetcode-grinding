const gcd = (a,b)=>{
if(b==0) return a;
return gcd(b,a%b);
}

const gcdOfStrings = (str1, str2) => {
    return str1 + str2 ==str2 +str1 ?str1.substr(0,gcd(str1.length,str2.length)):"";
}