<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <title>Show Your IP Address</title>
    <meta name="description" content="IPアドレスやブラウザ情報など、あなたの情報を表示します。">
    <meta name="author" content="Hyouhyan">
    <meta name="format-detection" content="telephone=no">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--この辺og系-->
    <meta property="og:title" content="Show Your IP Address">
    <meta property="og:description" content="あなたのIPアドレスを表示します。">
    <meta property="og:site_name" content="WebApp by Hyhy">
    <meta property="og:locale" content="ja_JP">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="/css/forall.css">
</head>

<body class="bg-light">
    <h1 class="text-center text-info my-4">Show Your IP Address</h1>

    <div class="text-center my-4">
        <div class="fs-2" id="ip-address">
        <?php
            echo $_SERVER["REMOTE_ADDR"] ;
        ?>
        </div>
        <div class="fs-6" id="host-name">
        <?php
            echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
        ?>
        </div>
    </div>

    <script src="/js/footer.js"></script>
    <script src="https://ipinfo.io?callback=callback"></script>
</body>

</html>
