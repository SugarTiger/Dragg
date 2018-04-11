## Dragg 基于jQueryV1.4.2实现元素可拖拽
### 调用
```
new Dragg({
    $elm: $("#move"),  // Jq选择器的实例（必选）
    maxW: 1000,  // X轴可拖动的最大像素（可选）
    maxH: 8000,  // Y轴可拖动的最大像素（可选）
    complete: function (data) {}// 拖动中执行的函数（可选）
});
```

