function initiateDownload(linkId, fileUrl, fileName) {
    var link = document.getElementById(linkId);

    link.addEventListener("click", function(e) {
      e.preventDefault();

      var xhr = new XMLHttpRequest();
      xhr.open("GET", fileUrl, true);
      xhr.responseType = "blob";

      xhr.onload = function() {
        var blob = xhr.response;
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.click();
      };

      xhr.send();
    });
  }