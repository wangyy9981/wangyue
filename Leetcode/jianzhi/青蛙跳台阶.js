// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor(number)
{
    // write code here
    let res=[]
    res[1]=1
    res[2]=2
    if(number>2){
        for(let i=3;i<=number;i++){
            res[i]=res[i-1]+res[i-2]
        }
    }
    return res[number]
}
console.log(jumpFloor(3));//21