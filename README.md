css后处理测试用
===========

使用方法
-----------

###安装
需要安装node.js
在文件目录下执行
```
npm install 
```

###使用
安装完成之后执行
```
grunt
```
会编译`/css`文件夹下的`input.css`输出到`output.css`
执行
```
grunt css
```
会编译且监听`input.css`的保存变化并且实时输出到`output.css`

###更改
设置更改`Gruntfile.js`
####设置输出输入路径
```
postcss: {
	options: {
		processors: [
			autoprefixer({
				browsers: ['> 1%', 'last 2 versions']
			}).postcss
		]
	},
	dist: {
		src: 'css/input.css',
		dest: 'css/output.css'
	}
},
```
src为源文件路径
dest为输出文件路径
browsers为浏览器兼容配置具体见[autoprefixer](https://github.com/postcss/autoprefixer)
```
	watch: {
		options: {
			livereload: false
		},
		dist: {
			files: [
				'css/input.css'
			],
			tasks: ['postcss']
		}
	},
```
files为监听保存文件路径（通常同上面源文件路径）