function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function choice(move) {
  let result = ""
  if (move == 1) {
    result = "| Jan β"
  } else if (move == 2) {
    result = "| Ken π"
  } else if (move == 3) {
    result = "| Pon βοΈ"
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

  player = prompt("Choose: 1 = β  ||  2 = π  ||  3 = βοΈ")
  alert("π» PC choose: =>" + choice(pc))
  alert("π You choose: =>" + choice(player))

  if (pc == player) {
    draw++
    alert("DRAW π")
  } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {
    win++
    alert("WIN π")
  } else {
    lose++
    alert("LOSE π")
  }
}

alert("ππWIN " + win + " | π»π­LOSE " + lose + " | ππ€ΌββοΈπ»DRAW " + draw)