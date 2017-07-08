function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

$(document).ready(function () {
  $.getJSON("https://api.github.com/users/Dirken/repos", { sort: 'updated' }, callback)
})

function callback (data, status, xhr) {
  var repos = $('#repos');
  for (var i = 0; i < 3; ++i) {
    var rowi = "row" + i
    repos.append(
      "<div id= '" + rowi + "'  class='row'>"
    )
    for (var j = 0; j < 3; ++j) {
      var repo = data[i*3 + j]
      printRepo(rowi, repo)
    }
    repos.append(
      "</div>"
    );
  }
}

function printRepo (id, repo) {
  $('#' + id).append(
    "<a class='col-md-3 item-repo' href='" + repo.html_url + "'>" +
      "<p style='text-transform: uppercase; color: #28d1d1; font-weight: bold;'>" + repo.name + "</p>" + "<p style='color:black'>" +repo.description +"</p><br>"+
    "</a>"
  );
}