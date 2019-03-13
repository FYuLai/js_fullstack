// 玩家1 玩家2 。。。。
// object  类
// json object   难以玩成此job
// 玩家类
// 大写首字母的函数   构造函数
// 函数可以用来构建类？
// 如果一个函数首字母大写约束，区别与普通函数
// 运行的方式 new ,构造函数
function Player(name){
    this.name=name;
}
// 将类实例化  类抽象的概念 对象可以new 出来
var player1=new Player("皮蛋");
//console.log(player1.name);
var player2=new Player("小乖");
console.log(player2.name);