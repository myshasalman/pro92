function nextpg()
{
    var p1= document.getElementById("pl1").value;
    var p2= document.getElementById("pl2").value;
    localStorage.setItem("player1name", p1);
    localStorage.setItem("player2name", p2);
    window.location="quiz_page.html";
}