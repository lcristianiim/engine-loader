var div = document.createElement("div");
var node = document.createTextNode('This will be the loader');

exports.init = function (targetDOM) {
    var self = this;

    div.appendChild(node);

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "green";
    div.style.position = "absolute";
    div.style.top = "0";

    div.className = self._config.loaderClassName;

    document.getElementsByClassName(self._config.targetDOM)[0].appendChild(div);

}
exports.remove = function () {
    var self = this;
    document.getElementsByClassName(self._config.loaderClassName)[0].remove();

}
