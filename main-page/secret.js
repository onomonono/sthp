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
        "bgColor": "",
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
        "accelerationSpeed": 0.15,
        "accelerationDirection": 167.2,
        "startScale": 0.15,
        "startScaleVariance": 0.1,
        "finishScale": 0.18,
        "finishScaleVariance": 0.1,
        "lifeSpan": 50,
        "lifeSpanVariance": 100,
        "startAlpha": 1,
        "startAlphaVariance": 0,
        "finishAlpha": 0.52,
        "finishAlphaVariance": 0.5,
        "shapeIdList": [
            "heart",
        ],
        "startColor": {
            "hue": 250,
            "hueVariance": 130,
            "saturation": 100,
            "saturationVariance": 0,
            "luminance": 90,
            "luminanceVariance": 30
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

// シークバーが動く設定
$(function(){
    $('.genre1').hover(
        function (){
            $('.seekbar').attr("src",'../img/2bar-18.png');
        });
});
$(function(){
    $('.genre2').hover(
        function (){
            $('.seekbar').attr("src",'../img/2bar-log.png');
        });
});
$(function(){
    $('.genre3').hover(
        function (){
            $('.seekbar').attr("src",'../img/2bar-18g.png');
        });
});
$(function(){
    $('.genre4').hover(
        function (){
            $('.seekbar').attr("src",'../img/2bar-deep.png');
        });
});
