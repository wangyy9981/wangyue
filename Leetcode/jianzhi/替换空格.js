// 请实现一个函数，将一个字符串s中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
function replaceSpace( s ) {
  // write code here
  let res=""
  if(s==="") return ""
  for(let i=0;i<s.length;i++){
    if(s.charAt(i)===" "){
      res+="%20"
    }else{
      res+=s.charAt(i)
    }
  }
  return res
}
console.log(replaceSpace("We Are Happy"));