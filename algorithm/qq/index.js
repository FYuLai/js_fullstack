//数组是最廉价的数据结构

let enc_qq=[6,3,1,7,9,8,5,2,4]
qq=[];
head =0; //队首指针，要移除的元素位置
tail=9;  //队尾指针  要加入的元素位置
// 第一个数移除

while(head<tail)
{qq.push(enc_qq[head]);
head++;
enc_qq[tail]=enc_qq[head]
tail++;
head++;
}
console.log( typeof qq);
// enc.shift();
//字符串是字符集合
// console.log(enc_qq.length,enc_qq[0]);
// enc_qq.shift();
// console.log(enc_qq);
// enc_qq.unshift(0);
// enc_qq.pop();
// console.log()
// console.log(enc_qq);
// enc_qq.push(0)
// console.log(enc_qq);

