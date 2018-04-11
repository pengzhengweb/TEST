var btnStart = $('.start');
var imgArea = $('.imgArea');
var imgOrigArr;
var imgRanArr;
var imgW = parseInt(imgArea.css('width'));
var imgH = parseInt(imgArea.css('height'));
var cellW = imgW / 3;
var cellH = imgH / 3;
var imgCell;
var hasStart = false;
init();
function init() {
    imgSplit();
    gameState();
}
//图片碎片
function imgSplit() {
    imgOrigArr = [];
//  imgArea.html('');
    var cell = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            imgOrigArr.push(i * 3 + j);
//          console.log(imgOrigArr);
            cell = $('<div class="imgCell"></div>');
            cell.css({
                'width': cellW + 'px',
                'height': cellH + 'px',
                'left': j * cellW + 'px',
                'top': i * cellH + 'px',
                'background': 'url("pic.jpg")',
                'backgroundPosition': (-j) * cellW + 'px ' + (-i) * cellH + 'px'
            });
            imgArea.append(cell);
        }
    }
    imgCell = $('.imgCell')
}
//控制游戏状态
function gameState() {
    btnStart.on('click', function () {
        if (!hasStart) {
            $(this).text('复原');
            hasStart = true;
            randomArr();
            cellOrder(imgRanArr);
            imgCell.css({
                'cursor': 'pointer',
            }).on('mouseover', function () {
                $(this).addClass('hover');
            }).on('mouseout', function () {
                $(this).removeClass('hover');
            }).on('mousedown', function (e) {
                $(this).css('cursor', 'move');
                var cellI1 = $(this).index();
                var cellX = e.pageX - imgCell.eq(cellI1).offset().left;
                var cellY = e.pageY - imgCell.eq(cellI1).offset().top;
                $(document).on('mousemove', function (e2) {
                    imgCell.eq(cellI1).css({
                        'z-index': 40,
                        'left': (e2.pageX - cellX - imgArea.offset().left) + 'px',
                        'top': (e2.pageY - cellY - imgArea.offset().top) + 'px',
                    })
                }).on('mouseup', function (e3) {

                    var cellI2 = changeIndex(e3.pageX - imgArea.offset().left, e3.pageY - imgArea.offset().top, cellI1);
                    if (cellI1 == cellI2) {
                        cellReturn(cellI1);
                    } else {
                        cellChange(cellI1, cellI2);
                    }
                    $(document).off('mousemove').off('mouseup');
                    $(this).css('cursor', 'pointer')
                })
            })
        }else{
            $(this).text('开始');
            hasStart = false;
            cellOrder(imgOrigArr);
    imgCell.css('cursor', 'default').off('mouseover').off('mousedown').off('mouseup');
            
        }

    })
}
//.打乱数组
function randomArr() {
    imgRanArr = [];
    var len = imgOrigArr.length;
    var order;
    for (var i = 0; i < len; i++) {
        order = Math.floor(Math.random() * len);
        if (imgRanArr.length > 0) {
            while (jQuery.inArray(order, imgRanArr) > -1) {
                order = Math.floor(Math.random() * len);
            }
        }
        imgRanArr.push(order);
    }
    return;
}
//根据数组中每张碎片的顺序  确定碎片位置
function cellOrder(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgCell.eq(i).animate({
            'left': arr[i] % 3 * cellW + 'px',
            'top': Math.floor(arr[i] / 3) * cellH + 'px'
        }, 400)
    }
}

//交换两张图片数组中索引
function changeIndex(x, y, index) {
    if (x < 0 || x > imgW || y < 0 || y > imgH) {
        return index;
    }
    var row = Math.floor(y / cellH);
    var col = Math.floor(x / cellW);
    var loc = row * 3 + col;
    var i = 0, len = imgOrigArr.length;
    while ((i < len) && imgRanArr[i] !== loc) {
        i++;
    }
    return i;
}
//返回当前移动碎片
function cellReturn(index) {
    var row = Math.floor(imgRanArr[index] / 3);
    var col = imgRanArr[index] % 3;
    imgCell.eq(index).animate({
        'top': row * cellH + 'px',
        'left': col * cellW + 'px'
    }, 400, function () {
        $(this).css('z-index', '10')
    })
}
//交换两张碎片位置
function cellChange(from, to) {
    var rowF = Math.floor(imgRanArr[from] / 3);
    var colF = imgRanArr[from] % 3;
    var rowT = Math.floor(imgRanArr[to] / 3);
    var colT = imgRanArr[to] % 3;
    var temp = imgRanArr[from];
    imgCell.eq(from).animate({
        'top': rowT * cellH + 'px',
        'left': colT * cellW + 'px'
    }, 400, function () {
        $(this).css('z-index', '10')
    });
    imgCell.eq(to).animate({
        'top': rowF * cellH + 'px',
        'left': colF * cellW + 'px'
    }, 400, function () {
        $(this).css('z-index', '10');
        imgRanArr[from] = imgRanArr[to];
        imgRanArr[to] = temp;
        if (checkPass(imgOrigArr, imgRanArr)) {
            success();
        }
    });
}

function checkPass(origArr, randArr) {
    if (origArr.toString() == randArr.toString()) {
        return true;
    } else {
        return false;
    }
}
function success() {
    for (var i = 0; i < imgOrigArr.length; i++) {
        if (imgCell.eq(i).has('hover')) {
            imgCell.eq(i).removeClass('hover');
        }
    }
    imgCell.css('cursor', 'default').off('mouseover').off('mousedown').off('mouseup');
    hasStart = false;
    alert('right!')
}