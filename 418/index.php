<!doctype html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<title>This is ERROR 418</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<link rel="stylesheet" href="/css/forall.css">
</head>

<style>
h1 {
	/*文字色*/
	color: #6594e0;
	/*線の種類（点線）2px 線色*/
	border-bottom: dashed 2px #6594e0;
}
</style>

<body>
	<?php http_response_code(418); ?>
	<div style="text-align:center">
		<h1>418 I'm a teapot<br></h1>
		<p>君はティーポットにコーヒーを淹れようとしました。<br>
			しかし我々はそれを拒否しました。<br><br>
			なんでティーポットにコーヒーを淹れようと思ったんですか？
		</p>
		
	</div>

	<br>

	<a href="/">Home</a>
    
</body>

</html>
