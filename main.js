/*
GLM: German Logic Masters
*/

let header=[];
let footer=[];
header[0]="<ul>\n  <a href=\""
header[1]="\"><img:";
header[2]=" style=\"width:60%;\"/></a>";
footer[0]="</ul>\n<br/>\n<a href=\"";
footer[1]="\" target=\"_blank\" style=\"\n\
  font-family: Brush Script MT, cursive; \n\
  font-style: oblique; \n\
  text-decoration:none; \n\
  background-color: LightSteelBlue; \n\
  color: MidnightBlue; \n\
  border: 1px solid DarkGrey; \n\
  padding: 0.4em 1em; \n\
  margin: 1em; \n\
  font-size: larger; \n\
  font-weight: bold; \n\
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6); \n\
  border-radius: 1.2em;\
\">Play</a>\n<br/>\n<br/>This html has been generated by <a href=\"https://github.com/martinbaselier/sudoku-rule-writer\">rule writer</a>";


function init() {
  let col=$("<div/>")
  let bg=$("<div/>")
  col.attr("class","col-4")
  bg.attr("class","btn-group-vertical")
  col.append(bg)
  $("#interface").append(col)
  $("#preview").html(header[0]+header[1]+header[2])
  for (scope of ruleset.scopes) {
/*
add scopes to different page parts.
The rules are split in sections (scopes). So all similar buttons and rules are mapped together (in alphabetical order of the "title")
*/
    let sp=$("<div/>")
    let sy=$("<span/>")
    let gl=$("<span/>")
    let pv=$("<span/>")
    let bc=$("<div/>")
    sp.attr("id","sudokupad"+scope)
    sy.attr("id","symbols"+scope).html(" ")
    gl.attr("id","germanlogic"+scope)
    pv.attr("id","preview"+scope)
    bc.attr("id",scope).attr("class","col d-none")

    // Apply
    $("#btc").append(bc)
    $("#sudokupad").append(sp)
    $("#symbols").append(sy)
    $("#germanlogic").append(gl)
    $("#preview").append(pv)
}
$("#preview").append(footer[0]+footer[1])


  for (rule of ruleset.rules) {
/*
adds all rules to the html and hide them standardly.
*/

    let btc=$("<div/>") //button container -> column.
    let ip=$("<input/>")  //checkbox (for the buttons)
    let bt=$("<label/>")  //visual aspect of button
    let sym=$("<span/>")  //symbol (at the top there's a list of symbols)
    let badge=$("<span/>")
    let checked=" d-none" //used to autohide everything; will be emptied when checked has a value

    //these are only used when there are multiple options for a button;
    let btGroup=$("<div/>") //outer group for button and dropdown
    let btVarGrp=$("<div/>")//group in button to choose alternatives;
    let toggleDropdown=$("<button/>")//opens dropdown menu
    let menuItems=$("<div/>")//alternative options
    let btId="dd"+rule.id//id for dropdown

    //if (rule.checked=="") {checked=""}

    ip.attr("id",rule.id).attr("class","btn-check").attr("type","checkbox").attr("checked",rule.checked).change(buttonPress).attr("aria-label","Basic checkbox toggle button group")
    ip.attr("data-variation","0")
    bt.attr("for",rule.id).text(rule.symbol+" "+rule.title).attr("class","btn btn-"+ruleset.classes[rule.scope]+" text-start col")
    //console.log(rule.scope+":"+ruleset.scopes[rule.scope])
    btc.attr("class","col-3 py-1 px-1 d-grid gap-1")

    menuItems.attr("class","dropdown-menu").attr("aria-labelledby",btId)
    badge.attr("class","badge bg-"+ruleset.classes[rule.scope]+" rounded-pill")
    if (rule.id==="sudoku") {
      badge.attr("class","text-dark "+badge.attr("class"))
      bt.append($("<br/>"))
    }

    sym.attr("class",rule.id+checked).html(rule.symbol)
    for  (let ruleVariant=0;ruleVariant<rule.descriptions.length;ruleVariant++) {
      let txt=$("<div/>")//sudokupad text
      let gl=$("<code/>")//html-code for German Logic Masters
      let pv=$(rule.descriptions[ruleVariant].html)//preview of the html
      let menuItem=$("<a/>")


      gl.attr("class",rule.id+ruleVariant+" text-dark"+checked).text("  "+rule.descriptions[ruleVariant].html)
      txt.attr("class",rule.id+ruleVariant+" card-text"+checked).html(rule.symbol+"&Tab;"+rule.descriptions[ruleVariant].text)
      menuItem.attr("class","dropdown-item").attr("href","#").attr("data-jzz-gui-player","true").text(rule.descriptions[ruleVariant].title).click(pickVariaton)
      menuItem.attr("data-variantnr",ruleVariant)
      menuItems.append(menuItem)

      if (rule.id==="sudoku") {
        let gl1=$("<code/>")
        let gl2=$("<code/>")
        pv=$(rule.descriptions[ruleVariant].html+" <span class=\"digits\"></span> "+rule.descriptions[ruleVariant].html2)
        gl1.attr("class",rule.id+ruleVariant+" text-dark digits"+checked)
        gl2.attr("class",rule.id+ruleVariant+" text-dark"+checked).text(" "+rule.descriptions[ruleVariant].html2)
        gl.text(gl.text()+" ").append(gl1).append(gl2)
      }

      gl.append($("<br/>"))
      pv.attr("class",rule.id+ruleVariant+checked)

      $("#sudokupad"+rule.scope).append(txt)
      $("#germanlogic"+rule.scope).append(gl)
      $("#preview"+rule.scope).append(pv)
    }
    if (rule.descriptions.length>1) {
      //if there is more than one variaton the buttons change
      badge.text(rule.descriptions[0].title)
      bt.append(badge)
      btGroup.attr("class","btn-group").attr("role","group")
      btVarGrp.attr("class","btn-group").attr("role","group")
      toggleDropdown.attr("id",btId).attr("type","button").attr("class","btn btn-"+ruleset.classes[rule.scope]+" btn-sm dropdown-toggle")
      toggleDropdown.attr("data-toggle","dropdown").attr("aria-haspopup","true").attr("aria-expanded","false").attr("title","click and pick a variation")

      btVarGrp.append(toggleDropdown).append(menuItems)
      btGroup.append(ip).append(bt).append(btVarGrp)
      btc.append(btGroup)
    } else {
      bt.addClass("")
      btc.append(ip).append(bt)
    }

    $("#"+rule.scope).before(btc)

    //$("#symbols"+rule.scope).append(sym)
  }
  $("#sudoku").click()
  update()
}


function buttonPress(){
 let id=$(this).attr("id")
 let variant=$(this).attr("data-variation")
 //console.log(id)
 // if ($("#"+id).attr("checked")==true) {$("#txt"+id).removeClass("d-none")}
 if ($(this).is(":checked")) {
   $("."+id+variant).removeClass("d-none")
   //$("."+id).removeClass("d-none")
 }
 else {
   $("."+id+variant).addClass("d-none")
   //$("."+id).addClass("d-none")
 }
}

function pickVariaton() {

  //change badge text:
  let group=$(this).parent().parent().parent()
  let badge=group.children("label").children("span")
  let button=group.children("input")
  let oldVar=button.attr("data-variation")
  let newVar=$(this).attr("data-variantnr")

  badge.text($(this).text())

  if (button.is(":checked")) {
    let id=button.attr("id")
    $("."+id+oldVar).addClass("d-none")
    $("."+id+newVar).removeClass("d-none")
  }
  button.attr("data-variation",newVar)

}


function update(){//updates header and footer
  $("#header").text(header[0]+$("#link").val()+header[1]+$("#image").val()+header[2])
  $("#footer").text(footer[0]+$("#link").val()+footer[1])
  $(".digits").text($("#digits").val())
}

function copyText(id) {//copy rules for sudokupad
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  //console.log($("#sudokupad").innerText)
}
