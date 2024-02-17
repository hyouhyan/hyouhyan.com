var headerHeight = $('header').outerHeight();

$(function () {
	const hum = $('#hamburger');
	const nav = $('.main-nav');
	const sns = $('.right-top');
	const snav = $('.nav');
	hum.on('click', function () {
		nav.toggleClass('toggle');
		hum.toggleClass('toggle');
		sns.toggleClass('toggle');
	});
	snav.on('click', function () {
		nav.toggleClass('toggle');
		hum.toggleClass('toggle');
		sns.toggleClass('toggle');
	});
});

$('a[href^="#"]').click(
	function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;

		$('body,html').stop().animate({ scrollTop: position }, 300);

		return false;
	}
);

window.onload = function () {
	var elements = document.querySelectorAll(".box")
	elements.forEach((element) => {
		element.style.display = "block";
	})
	document.getElementById("scroll-down").style.display = "block";

	$(function () {

		/**
		 * 現在スクロール位置によるグローバルナビのアクティブ表示
		 */
		// PC画面でのみ実行
		if (window.matchMedia('(min-width: 768px)').matches) {
			var scrollMenu = function () {
				// 配列宣言
				// ここにスクロールで点灯させる箇所のidを記述する
				// 数値は全て0でOK
				var array = {
					'#home': 0,
					'#about': 0,
					'#skill': 0,
					'#work': 0,
					'#link': 0
				};

				var $globalNavi = new Array();

				// 各要素のスクロール値を保存
				for (var key in array) {
					if ($(key).offset()) {
						array[key] = $(key).offset().top - window.innerHeight / 2; // 画面中央に来た時に反応させる
						$globalNavi[key] = $('.main-nav ul li a[href="' + key + '"]');
					}
				}

				// スクロールイベントで判定
				$(window).scroll(function () {
					for (var key in array) {
						if ($(window).scrollTop() > array[key] - 50) {
							$('.main-nav ul li a').each(function () {
								$(this).removeClass('active-nav');
							});
							$globalNavi[key].addClass('active-nav');
						}
					}

					// aboutにactiveがついたら
					if ($(window).scrollTop() > array["#about"] - 50) {
						// .right-topを非表示
						$('.right-top').css('visibility', 'hidden');
						$('.right-top').css('opacity', 0);

						// skillにactiveがついたら
						if($(window).scrollTop() > array["#skill"] - 50){
							// headerのwidthをautoにする
							$('header').css('width', 'auto');
						}

					} else if ($(window).scrollTop() > array["#home"] - 50) { // homeにactiveがついたら
						// .right-topを表示
						$('.right-top').css('visibility', 'visible');
						$('.right-top').css('opacity', 1);
						// headerのwidthを100%にする
						$('header').css('width', '100%');
					}

				});
			}

			// 実行
			scrollMenu();
		}
	});
}

var elements = document.querySelectorAll(".box")
elements.forEach((element) => {
	element.style.display = "none";
})
document.getElementById("scroll-down").style.display = "none";
