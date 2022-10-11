function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function choice(move) {
  let result = ""
  if (move == 1) {
    result = "| Jan ✊"
  } else if (move == 2) {
    result = "| Ken 📄"
  } else if (move == 3) {
    result = "| Pon ✂️"
  } else {
    result = "choose correctly"
  }
  return result
}

// 1 es piedra, 2 es papel, 3 es tijera
let player = 0
let pc = 0
let win = 0
let lose = 0
let draw = 0

while (win < 3 && lose < 3) {
  pc = aleatorio(1, 3)
  // let min = 1
  // let max = 3
  // let pc = Math.floor(Math.random() * (max - min + 1) + min)

  player = prompt("Choose: 1 = ✊  ||  2 = 📄  ||  3 = ✂️")
  alert("💻 PC choose: =>" + choice(pc))
  alert("😎 You choose: =>" + choice(player))

  if (pc == player) {
    draw++
    alert("DRAW 🙉")
  } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {
    win++
    alert("WIN 😆")
  } else {
    lose++
    alert("LOSE 😓")
  }
}

alert("😎🏆WIN " + win + " | 💻😭LOSE " + lose + " | 😎🤼‍♂️💻DRAW " + draw)