document.addEventListener("DOMContentLoaded", function() {
    // 全ての.floorLink要素を取得
    var floorLinks = document.querySelectorAll(".floorLink");

    // 全ての.floor要素を取得
    var floorMaps = document.querySelectorAll(".floor");

    // 各.floorLink要素にクリックイベントリスナーを追加
    floorLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // デフォルトのイベントを無効にする
            event.preventDefault();

            // クリックされたリンクのdata-target属性の値を取得
            var targetFloor = this.getAttribute("data-target");

            // 全ての.floorMap要素のクラスから"none"を除去
            floorMaps.forEach(function(map) {
                map.classList.remove("none");
            });

            // 対応する.floorMap要素を表示するために他の要素から"none"を追加
            floorMaps.forEach(function(map) {
                if (!map.classList.contains(targetFloor)) {
                    map.classList.add("none");
                }
            });
        });
    });
});
