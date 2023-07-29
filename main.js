const list = ["凶", "大凶", "末吉"];
const button = document.getElementById("button");

button.onclick = function () {
  var random = Math.floor(Math.random() * list.length);
  document.getElementById("result").textContent = list[random];
};
