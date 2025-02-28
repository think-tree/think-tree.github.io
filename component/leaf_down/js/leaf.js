var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var leaves = [];
var numLeaves = 5;
var animationId;

// 创建叶子对象
function createLeaf() {
    this.x = Math.random() * canvas.width;
    this.y = -10;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 3 + 1;
    this.image = new Image();
    this.image.src = '../img/leaf.png';  // 设置背景图片

    this.draw = function() {
        ctx.drawImage(this.image, this.x - 50, this.y - 50, 100, 100); // 绘制图片并居中
    }

    this.update = function() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > canvas.height + 10) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }
}

// 初始化叶子
function init() {
    leaves = [];
    for (var i = 0; i < numLeaves; i++) {
        leaves.push(new createLeaf());
    }
}

// 动画循环
function loop() {
    animationId = requestAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < numLeaves; i++) {
        leaves[i].draw();
        leaves[i].update();
    }
}

// 执行初始化和动画循环
function startAnimation() {
    init();
    loop();
}

function stopAnimation() {
    cancelAnimationFrame(animationId);  // 停止动画
}

// 监听鼠标进入和离开事件
Window.addEventListener('mouseenter', startAnimation);
Window.addEventListener('mouseleave', stopAnimation);

// canvas.addEventListener('mouseenter', startAnimation);
// canvas.addEventListener('mouseleave', stopAnimation);

// 页面加载后
startAnimation();