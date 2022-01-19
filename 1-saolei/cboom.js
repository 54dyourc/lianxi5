/**
 * 扫雷游戏
 * (1)当点击开始游戏后会自动生成15* 15的小格子  炸弹数为20
 * (2)当点击某个小格子的时候：
 * ----如果不是雷，会显示周围8个格子的雷数量
 * ----如果是雷，就gameover
 */

//当点击开始的时候，雷盘出现
bindEvent();
function bindEvent() {
    startBtn.onclick = function () {
        initBox.style.display = "none";
        init();
        box.style.display = "block";

    }
    //鼠标点击事件
    box.onmousedown = function (event) {
        var event = event || window.event;//事件
        if (box.style.display == 'block') {
            if (event.which == 1) {// 左键
                leftClick(event.target);
            }
        }
    }
}
function init() {
    minesNum = 20; //雷的总数
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            var boom = document.createElement('div');
            boom.className = 'block'; //每个小格的共同样式
            boom.setAttribute('id', i + '-' + j);//每个小格的值样式
            box.appendChild(boom);
            mineMap.push({ mine: false });//每一个小格都添加一个对象，标记是否有雷
        }
    }
    block = document.querySelectorAll('.block'); //获得225个小格子的dom元素
    while (minesNum) { //添加20个雷
        var mineIndex = Math.floor(Math.random() * 225);//随机生成一个（0 - 225）的数
        if (mineMap[mineIndex].mine === false) {
            block[mineIndex].classList.add('isMine'); //在随机生成的位置添加一个雷
            mineMap[mineIndex].mine = true;
            minesNum--;                              //剩余雷数减一
        }
    }
}
//左键事件
function leftClick(dom) {
    if (dom && dom.classList.contains('isMine')) { //classList.contains(class),判断指定的类名是否存在，如果点到雷
        console.log('gameover');  // 游戏结束
        for(i=0;i<20;i++){
            document.querySelectorAll(".isMine")[i].style.backgroundColor='#fd6c01';
            document.querySelectorAll(".isMine")[i].innerHTML="☠";
        }
        
    } else {
        var n = 0; // 周围雷的个数
        var posArr = dom.getAttribute('id').split('-'); //将字符串拆成数组
        var posX = Number(posArr[0]);
        var posY = Number(posArr[1]);

        dom.classList.add('number'); //添加一个number样式

        // 遍历周围8个格子（如果是格子的话）
        for (var i = posX - 1; i <= posX + 1; i++) {
            for (var j = posY - 1; j <= posY + 1; j++) {
                var aroundBox = document.getElementById(i + '-' + j);
                if (aroundBox && aroundBox.classList.contains('isMine')) { //如果是带有雷的class
                    n++;
                }
            }
        }
        dom && (dom.innerHTML = n);//如果是格子的话，格子内的内容是n
    }
}
