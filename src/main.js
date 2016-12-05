/***
 * Main functionality
 *
 */

var data;

$(document).ready(function() {
  //init masonry
  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: 200
  });

  //event handler for button add
});

//saving settings to local store
window.onunload = function() {
    localStorage.setItem("data", JSON.stringify(data));
};

//loading settings from local storage
window.onload = function() {
    data = JSON.parse(localStorage.getItem("data"));
    if(data == null) {
      data = [];
    }
};

//angular setting
var toolTipsApp = angular.module('tooltips', []);

//create new tip
function Tip(value) {
  return {text: value};
};

toolTipsApp.controller('contentCtrl', function ($scope) {
  $scope.tips = data;

  $scope.update = function() {
    alert($("#text").val());
    data.push(new Tip($("#text").val()));
  };
});
