function mine() {
  var start = new Date().getTime();

console.log(eth.getBlock("pending").transactions.length);

  //}

  status = 1;
  while(status){
   
    if (txpool.status.pending > 0 && status==1) {
      miner.start();
      status = status+1;
    } else if(txpool.status.pending == 0) {
      miner.stop();
      status=0
      console.log("Transaction(s) successful!!!");


  var end = new Date().getTime();
  var time = end - start;
  a = eth.blockNumber
  console.log(time, a)

      

    }
  }
}
