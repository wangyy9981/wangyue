// 用两个栈来实现一个队列，完成 n 次在队列尾部插入整数(push)和在队列头部删除整数(pop)的功能。 
// 队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。
// 输入：
// ["PSH1","PSH2","POP","POP"]
// 返回值：
// 1,2
// 说明：
// "PSH1":代表将1插入队列尾部
// "PSH2":代表将2插入队列尾部
// "POP“:代表删除一个元素，先进先出=>返回1
// "POP“:代表删除一个元素，先进先出=>返回2
let stack_push=[];
let stack_pop=[];
 
function push(node)
{
    stack_push.push(node);
}
function pop()
{
    if(stack_pop.length==0){
        if(stack_push.length==0){
            return null;
        }
        while(stack_push.length>0){
            stack_pop.push(stack_push.pop());
        }
 
    }
    return stack_pop.pop();
}
