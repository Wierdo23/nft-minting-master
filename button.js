let account =null;
    let accessToken =null;
    const connect = async () =>{
        if(window.ethereum){
            await window.ethereum.send('eth_requestAccounts')
            window.w3 = new Web3(window.ethereum)
            var accounts = await w3.eth.getAccounts()
            account = account[0];

            await authenticate()
        }

    }
    const authenticate =async () => {
        let res = await fetch(`/nounce?address=${account}`)
        let resBody = await res.json()
        console.log(resBody)
    }
    