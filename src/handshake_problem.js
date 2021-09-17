// https://www.codewars.com/kata/handshake-problem

const getParticipants = (handshakes) => {
  let farmers = 1;
  while (farmers * ((farmers - 1) / 2) < handshakes) {
    farmers += 1;
  }
  return farmers;
};

console.log(getParticipants(45)); // 10
