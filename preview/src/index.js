  const $ = require("jquery");
  import ShortcutPreview from 'shortcut-preview';
  const {parse} = require("scpl");
  const React = require("react");
  const ReactDOM = require("react-dom");
  
  // render shortcut
  const code = document.getElementById("scpl-code").value;
  const {shortcutjson, shortcutplist} = parse(code, {make: ["shortcutjson", "shortcutplist"]});
  var showpreview = document.getElementById("preview").value;

  // render preview
  if(showpreview === "1") {
    let el = document.getElementById("scpl-render");
    ReactDOM.render(React.createElement(ShortcutPreview, {data: shortcutjson}), el);
  }

  // send plist
  var blob = new Blob([shortcutplist], { type: "application/x-octet-stream" });
  var url = (window.URL || window.webkitURL).createObjectURL(blob);
  var filename = document.getElementById("scpl-name").value;
  var data = new FormData();
  data.append('file', blob);
  data.append('name', filename);
  $.ajax({
    url: "../../create-shortcut.php",
    type: "POST",
    data: data,
    contentType: false,
    processData: false,
    success: function (response) {
      if(showpreview !== "1") {
        window.location.href = response;
        setTimeout(function(){ window.close(); }, 5000);
      }
    },
    error: function (data) {
      console.log(data);
    }
  });
