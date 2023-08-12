const reverseString = (s)=>{
    return s.split(' ').map(word => word.trim()).filter(word => word !== '').reverse().join(' ');
}