# PetShop Example using HyperledgerBurrow
This is an example project that is running EVM. A solidy contract has been written for hyperledger burrow.

The run the ethereum Petshop example on Hyplerger borrow. Follow the below documentation.

**Make sure to run all snak commands in the Petshop-HyperledgerBurrow' Directory.**

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

if By any change when you call **$ snak call Adoption getAdopters** and it return with an error saying **TypeError: cannot read the propoerty 'toUpperCase' of undefined.**

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


# Running the Blockchain with Fronend GUI.

Assuming you have done all the aprove steps. To run the application and interact with the blockchain using your frontend petstore application. 
Follow the steps. 
* Go to the Petshop-Hyperledger burrow directory
* Open terminal and type ```$ snak run_burrow```
* Open another teminal and type ```$ npm start```

Go to ```http://localhost:3000```

Enjoy the application.

![Petshop GUI](/petshop.png)

## Empty the blockchain.
Inorder to empty the blockchain you have to compile and migrate your smart contract again to the blockchain.

```$ snak compile```

```$ snak migrate```

## Interacting with Blockchain using Snak.

You can interact with your Hyperledger Burrow blockchain using snak by using the following commands. 

```List of all commands:

    -V, --version                                                output the version number
    -h, --help                                                   output usage information

  Commands:

    init|int                                                     
    Initialize project, makes folders and files which are needed for starting a dapp project.
    
    
    compile|cmp                                                  
    Compile all contracts in contracts folder and makes artifacts in the build folder  
    you need to initialize a project before using this command.
    
    
    migrate|mgt [accountname]                                    
    deploy contract on the Burrow  
    you need to initialize a project before using this command.
    
    
    list_accounts|acnt                                           
    Load all accounts  
    you need to initialize a project before using this command.
    
    
    default_accounts|acnt                                        
    List all predefined accounts  
    No need to initialize a project before using this command.
    
    
    create_account|crtac <pass_phrase>                           
    Creates unsafe account included private key, public key and address and displays on the terminal,   
    No need to initialize a project before using this command.
    
    
    balance|blnc <address>                                       
    Get balance of a specefic account  
    No need to initialize a project before using this command.
    
    
    transact|tx <priv_key> <data> <address> <fee> <gas_limit>    
    Do regular transaction to a contract, you need pass the private key of sender and address of contract  
    you need to initialize a project before using this command.
    
    
    send|snd <priv_key> <address> <fee>                          
    Do regular transaction, you need pass the private key of sender and address of reciever  
    you need to initialize a project before using this command.
    
    
    random_transact|rtx <count>                                  
    Doing random Transaction,   
    you need to initialize a project before using this command  
    you should put a list of accounts(name = account_list.json) in accounts folder first!.
    
    
    install_burrow|insl                                          
    install burrow blockchain, and copy the files to the home directory (.burrow),   
    No need to initialize project for this command.
    
    
    uninstall_burrow|unsl                                        
    uninstall burrow blockchain, and back up the files to the home directory (burrow-backup),   
    No need to initialize project for this command.
    
    
    run_burrow|rnbrw                                             
    run burrow blockchain,you need install burrow first!,   
    No need to initialize project for this command.
    
    
    *
    call|calf <contract_name> <function_name> <parameters_list>  
    Calls the function of specefic contract, you need to pass the list of parameters like this var1,var2,...,varK ,comma    separated.  
    You need to initialize a project before using this command.
    
    
    run_monax_keys|rks [ip_address]                              
    Runs the Monax key server on port 4776,   
    No need to initialize a project before using this command.
    
    
    import_keys|imks <file_name>                                 
    Import keys in the monax key server  
    No need to initialize a project before using this command.
    
    
    chain_id|chid                                                
    Get chain id of the blockchain  
    You need to initialize a project before using this command.
    
    
    genesis_hash|genhash                                         
    Get Genesis Hash of the blockchain  
    You need to initialize a project before using this command.
    
    
    latest_block_height|lbckh                                    
    Get Latest Block Hash of the blockchain  
    You need to initialize a project before using this command.
    
    
    info|inf                                                     
    Get Info of the blockchain  
    You need to initialize a project before using this command.
    
    
    latest_block|lbck                                            
    Get Latest Block of the blockchain  
    You need to initialize a project before using this command.
    
    
    config|conf                                                  
    Get the current config of the snak  
    If you haven't created any project burrow url will be http://127.0.0.1:1337/rpc by default  
    You may need to initialize a project before using this command.```
