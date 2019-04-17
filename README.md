# PetShop Example using HyperledgerBurrow
This is an example project that is running EVM. A solidy contract has been written for hyperledger burrow.

The run the ethereum Petshop example on Hyplerger borrow. Follow the below documentation.

## Reqirements.
* Git
* Nodejs

## Installations
To install git

```$ sudo apt install git>``` 

then to install nodejs

```$ sudp apt install curl```

```$ curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -```

```$ sudo apt install nodejs```

Now that you have Git , nodejs and npm install. We need to clone the petshop Hyperledger burrow directory to the local machne.
```$ git clone https://github.com/DevProvider/PetShop-HyperledgerBurrow.git```
```$ cd PetShop-HyperledgerBurrow```

We can install snak now.

```$ npm install -g snak```

If you get errors or warnings during installing Snak. try 

```$ sudo npm install --unsafe-perm --verbose -g snak```

after snak is installed.

Now lets start setting up the blockchain.

## setup

Open terminal in your Petshop-HyperledgerBurrow Directory and type.

```./monax-keys server```

Let this running in a terminal. 

open another terminal and import all the accounts keys to monax server.

go to etshop-HyperledgerBurrow Directory and type 

```$ snak import_kets account_list.json```

After the keys are imported. You can now run Hyperledger burrow.

```$ snak run_burrow```


## Compiling and deployng Smart contracts.

in the same directory. type 

```$ snak compile```

To compile the adoption contract written in solidity,

Now make sure that burrow is runnning in another terminal and migrate the smart contracts to burrow. 

```$ snak migrate```

The blockchain will give you the address of your smart contract and that means that its up and running.

If you want to test your smart contarct. You can do it by calling the smart contract functions. 

There is a method in our smart contracts that gets the address of all the adopters on the blockchain. The method name is getAdopters. 

```$ snak call Adoption getAdopters```

This is a default call that will give you all the address in the blockchain.

## Handle an Error

if By any change when you call $ snak call Adoption getAdopters and it return with an error saying TypeError: cannot read the propoerty 'toUpperCase' of undefined.

then open a new terminal.

go to the file **dev_pipe** that your error is showing you.

My file lies in 

```$ cd user/lib/node_modules/snak/node_modules/burrow-contracts/lib/pipes/```

One in this directory . Open the file **dev_pipes.js**

```$ gedit dev_pipes.js``` 

Go to the line 124 and change the **data.return.toUpperCase()** to **data.Return.toUpperCase()**

Just change the **R** to capital and it will fix the error. type 

```$ snak call Adoption getAdopters``` 

and you should get the Adopters.

**Make sure to run all snak commands in the Petshop-HyperledgerBurrow' Directory.**
