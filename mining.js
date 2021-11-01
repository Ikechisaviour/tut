//eth.sendTransaction({from: eth.coinbase, to: "0x00868adc8842d5386543cd488b7b4454b93c2740", value: web3.toWei(, "ether")})

function checkWork() {

  //personal.unlockAccount(eth.coinbase)
  //personal.unlockAccount(eth.coinbase, "gabogy");  
  var a = "0x7504f95f83f573cf08db7284a9acae22fc9b49a9";
  var b = eth.sendTransaction({from: eth.coinbase, to: a, value: web3.toWei(0.01, "ether")});
  //eth.sendTransaction({from: eth.coinbase, to: a, value: web3.toWei(0.01, "ether")})
  //eth.sendTransaction({from: eth.coinbase, to: a, value: web3.toWei(0.01, "ether")})
  var c = b*5;
  c 
  
  status = 1;
  while(status){
    if (txpool.status.pending > 0 && status==1) {
      miner.start();
      status = status+1;

    } else if(txpool.status.pending == 0) {
      miner.stop();
      status=0
      console.log("Transaction(s) successful")

    }
  }
}
