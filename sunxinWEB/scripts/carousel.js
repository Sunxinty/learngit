//轮播方法
var carousel = function (attr,isAuto) {
    var ul = $(attr).find("ul");
    var li = ul.find("li");
    var attrWidth = $(attr).width();
    var clone = li.eq(0).clone();
    var num = 0;
    var index = 0;
    var ol = $(attr).parent().find("ol");
    var dot = ol.find("li");

    ul.append(clone);
    li = ul.find("li");
    li.css("width", attrWidth + "px");
    num = li.length;

    //左右按钮事件
    $(attr).parent().find(".rightBtn").click(function () {
        rightBtn();
    });
    $(attr).parent().find(".leftBtn").click(function () {
        leftBtn();
    });

    //自动轮播
    if (!ul.is(":animated") && isAuto) {
        var int = setInterval(rightBtn, 5000);
    }

    function rightBtn() {
        if (!ul.is(":animated")) {
            index++;
            ul.animate({ left: -attrWidth * index + "px" }, 500, function () {
                if (index == (num - 1)) {
                    ul.css("left", 0);
                    index = 0;
                    dot.removeClass("active");
                    dot.eq(index).addClass("active");
                }
            });
            return index;
        }
    }

    function leftBtn() {
        if (!ul.is(":animated")) {
            if (index > 0) {
                index--;
                ul.animate({ left: -attrWidth * index + "px" }, 500)
            } else {
                index = num - 1;
                ul.css("left", -attrWidth * index + "px").animate({ left: -attrWidth * (index - 1) + "px" }, 500);
                index--;
            }
        }
    }

    //圆点控制事件
    dot.each(function(item,elem){
        if (!ul.is(":animated")) {
            dot.eq(item).click(function(){
                index = item;
                dot.removeClass("active");
                dot.eq(index).addClass("active");
                ul.animate({ left: -attrWidth * index + "px" }, 500);
            });
            return index;
        }
    });
}