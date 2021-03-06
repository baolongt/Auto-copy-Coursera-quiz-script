let count = 1;
let s = "";
const countNum = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M"
};
for (let i of document.getElementsByClassName("rc-FormPartsQuestion__row")) {
  if (i.id === "") {
    var CA = i.querySelector(".rc-FormPartCA");
    if (CA.querySelector(".rc-TextInputBox") !== null) {
      s +=
        "\t========================================================\n" +
        "\t===     THIS PART IS INPUT, NOT A CHOICE QUESTION   ====\n" +
        "\t========================================================\n";
    } else {
      let options = 1;
      for (let j of CA.querySelectorAll(".rc-CML")) {
        let k = j.querySelector(".rc-CodeBlock");
        if (k !== null) {
          s += "\t" + options + ".";
          for (let l of k.querySelectorAll(".ace_line_group")) {
            s += "\t" + l.textContent + "\n";
          }
          options++;
        } else {
          if (j.parentElement.className !== "rc-GradeFeedback__feedback") {
            s += countNum[options] + ". " + j.textContent + "\n";
            options++;
          }
        }
      }
    }
  } else {
    let j = i.querySelector(".rc-CML");
    if (j.querySelector(".rc-CodeBlock")) {
      s += count + ".";
      for (let k of j.querySelectorAll("p, .ace_line_group")) {
        s += k.textContent + "\n";
      }
    } else {
      s += "\n" + count + "." + i.querySelector(".rc-CML").textContent + "\n";
    }
    count++;
  }
}
console.log(s);
var copyPath = document.createElement("textarea");
document.body.appendChild(copyPath);
copyPath.value = s;
copyPath.select();
document.execCommand("copy");
document.body.removeChild(copyPath);
