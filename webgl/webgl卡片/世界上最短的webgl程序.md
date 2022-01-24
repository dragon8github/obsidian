[[wegl卡片]]

```javascript
function main() {
	var canvas = document.getElementById('webgl')

	var gl = getWebGLContext(canvas)
	if (!gl) {
        console.log('Failed to get the rendering context for WebGL')
        return
    }

	// 设置背景色填充色为黑色，4个参数分别是rgba，值范围是 0 ~ 1
	// （如果你习惯 0 ~ 255 的写法，值需要把值/255即可）
	gl.clearColor(0.0, 0.0, 0.0, 1.0)


	// 用之前指定的黑色背景色清空绘图区域的颜色缓冲区（color buffer）
	// （注意，并不是清空绘图区域 canvas）
	gl.clear(gl.COLOR_BUFFER_BIT)
}
```