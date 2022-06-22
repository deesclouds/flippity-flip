document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const sideOfCoin = document.querySelector("#sideOfCoin").value;
  const res = await fetch(`/api?coin=${sideOfCoin}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#flipResult").textContent = data.name
}