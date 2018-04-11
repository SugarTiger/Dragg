function Dragg(obj) {
    this.maxW = obj.maxW;
    this.maxH = obj.maxH;
    this.$elm = obj.$elm;
    this.complete = obj.complete || function (result) {
        result.$elm.css({
            top: result.y,
            left: result.x
        })
    }
    this.setDown();
    this.offMove();
}
Dragg.prototype.setDown = function () {
    var that = this;
    this.$elm.mousedown(function (ev) {
        var x = ev.layerX;
        var y = ev.layerY;
        var maxH, maxW;
        if (that.maxW) {
            maxW = that.maxW - $(this).width();
        } else if (that.maxH) {
            maxH = that.maxH - $(this).width();
        }
        that.setMove(x, y, $(this), maxW, maxH);
    })
}
Dragg.prototype.setMove = function (x, y, elm, maxW, maxH) {
    var that = this;
    $(window).mousemove(function (e) {
        var top = e.pageY - y;
        var left = e.pageX - x;
        if (top < 0) {
            top = 0;
        } else if (maxH && top > maxH) {
            top = maxH;
        }
        if (left < 0) {
            left = 0;
        } else if (maxW && left > maxW) {
            left = maxW;
        }
        that.complete({
            x: left,
            y: top,
            $elm: elm
        })
    })
}
Dragg.prototype.offMove = function () {
    $(window).mouseup(function (e) {
        $(window).unbind('mousemove')
    })
}