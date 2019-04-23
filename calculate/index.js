// ali 14.6  2.6
// meituan  16  4
// 51信用卡 17 5
// S   5
// A   3
// B   2
// C   1
// D   
// level  key 计算函数
let stratigies = {
    'S' :function(salary) {
        return salary * 5;
    },
    'A' :function(salary) {
        return  salary * 3;
    },
    'B' :function(salary) {
        return  saalry * 2;
    },
    'C' :function(salary) {

    }
}
function calculate(level,salary){
    return stratigies[level](salary);
}
// switch(level){
// case "S":
// return salary * 5;
// // console.log(salary);
// break;
// case "A":
// return salary * 3;
// break;
// case "B":
// return salary * 2;
// break;
// default:
// return  666;

// }
// }
// console.log(calculate("x",1000))
