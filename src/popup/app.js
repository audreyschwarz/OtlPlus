angular.module('OtlPlus', ['OtlPlusServices', 'OtlPlusControllers']);

// disregard below

$("#insert").on("click", function(e) {
  chrome.tabs.query({active: true, currentWindow: true},
  function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: 'done'},
    function(response) {
      console.log(response);
    });
  });
});
