// alert('動作OKらしいよ');



// ▼パーティクルエフェクト
var particleSystem = null;
var stage = null;

//  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
window.addEventListener("load", function () {

    // Stageオブジェクトを作成します。表示リストのルートになります。
    stage = new createjs.Stage("myCanvas");

    // パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);
        
    // Particle Developから保存したパラメーターを反映します。
    particleSystem.importFromJson(
    // JSONテキストのコピー＆ペースト ここから-- 
    {
        "bgColor": "#414cdf",
        "width": 688,
        "height": 469,
        "emitFrequency": 11,
        "startX": 344,
        "startXVariance": 751,
        "startY": 235,
        "startYVariance": 608,
        "initialDirection": 250,
        "initialDirectionVariance": 10,
        "initialSpeed": 0,
        "initialSpeedVariance": 2.4,
        "friction": 0.101,
        "accelerationSpeed": 0.251,
        "accelerationDirection": 167.2,
        "startScale": 0.22,
        "startScaleVariance": 0.22,
        "finishScale": 0.18,
        "finishScaleVariance": 0.68,
        "lifeSpan": 50,
        "lifeSpanVariance": 100,
        "startAlpha": 1,
        "startAlphaVariance": 0,
        "finishAlpha": 0.52,
        "finishAlphaVariance": 0.5,
        "shapeIdList": [
            "kirakira2",
            "kirakira"
        ],
        "startColor": {
            "hue": 105,
            "hueVariance": 180,
            "saturation": 100,
            "saturationVariance": 0,
            "luminance": 90,
            "luminanceVariance": 52
        },
        "blendMode": true,
        "alphaCurveType": "1",
        "VERSION": "1.0.0"
    }
        // JSONテキストのコピー＆ペースト ここまで--
    );

    // フレームレートの設定
    createjs.Ticker.framerate = 60;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.on("tick", handleTick);
});

function handleTick() {
    // パーティクルの発生・更新
    particleSystem.update();
  
    // 描画を更新する
    stage.update();
  }


// ▼パーティクルをレスポンシブサイズ変更する  
function switchByWidth(){
    if (window.matchMedia('(max-width: 540px)').matches) {
        //スマホ処理
        var resize = document.getElementById('myCanvas');
        resize.width = 300 ;
    } else if (window.matchMedia('(max-width:912px)').matches) {
        var resize2 = document.getElementById('myCanvas');
        resize2.width = 500 ;
    } else if (window.matchMedia('(min-width:912px)').matches) {
        //PC処理
        ;
}}

//ロードとリサイズの両方で同じ処理を付与する
window.onload = switchByWidth;
window.onresize = switchByWidth;




// ▼ロゴをスクロールで上に隠す
$(function(){
const logo = $('#logo');
//ロゴを変数「logo」に格納

$(window).on('scroll', function(){
//画面をスクロールした時に〜。スクロールイベントを取得

    const scroll = $(window).scrollTop();
    //スクロール量を変数「scroll」に格納

    let pastPos = 0;
    //今までのスクロール量。初期値は0

    const start = 100;
    //クラスの付け外しが行われるポイント。一番上から100スクロールしたら、実行される
    
    if(scroll >= pastPos && scroll >= start){ 
    // もし('スクロール量が現在の位置を上回ったら' 尚且つ 'スクロール量が300を超えていたら')

    logo.addClass('hide');
    //ロゴに「hide」というクラスを付与する

    } else {
    //()内の条件に当てはまらなければ

    logo.removeClass('hide');
    //ロゴの「hide」というクラスを削除する
    }

    pastPos = scroll;
    //今までのスクロール量に現在のスクロール量を代入する。
});

});
  

// ▼ハンバーガーメニュー
$(function () {
    $('.hamburger').on('click', function () {
        $('.hamburger, .menu').toggleClass('show');
    });
});
