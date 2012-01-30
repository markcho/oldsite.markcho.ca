function Main() {

  var currentPanel = null;

  function nav_Home() {
    changePanel($("#homePanel"));
  }

  function nav_AboutMe() {
    changePanel($("#aboutMePanel"));
  }

  function nav_GitHub() {
    launchLink("https://www.github.com/markcho");
  }

  function nav_Facebook() {
    launchLink("http://www.facebook.com/markcho");
  }

  function nav_LinkedIn() {
    launchLink("http://www.linkedin.com/pub/mark-cho/2b/b11/6b7");
  }

  function nav_Resume() {
    launchLink("/resume");
  }

  function nav_Contact() {
    changePanel($("#contactPanel"));
  }

  function changePanel(panel) {
    currentPanel.hide("slide", { direction: "left" }, 400,
      function() { panel.show("slide", { direction: "left" }, 400); });
    currentPanel = panel;
  }

  function launchLink(link) {
    var loadingPanel = $("#loadingPanel");
    currentPanel.hide("slide", { direction: "left" }, 400,
      function() { loadingPanel.show("slide", { direction: "left" }, 400,
        function() { window.location.href=link; }); });
    currentPanel = loadingPanel;
  }

  function init() {
    $(function() { $("button").button(); });

    $("#homePanel").hide();
    $("#aboutMePanel").hide();
    $("#contactPanel").hide();
    $("#loadingPanel").hide();

    $("#nav_Home").click(nav_Home);
    $("#nav_AboutMe").click(nav_AboutMe);
    $("#nav_GitHub").click(nav_GitHub);
    $("#nav_Facebook").click(nav_Facebook);
    $("#nav_LinkedIn").click(nav_LinkedIn);
    $("#nav_Resume").click(nav_Resume);
    $("#nav_Contact").click(nav_Contact);

    currentPanel = $("#homePanel");
    currentPanel.show("slide", { direction: "left" }, 1000);
  }

  init();
}

$(document).ready(Main);
