/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
NFTs=[];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (first_Name,last_Name,_profession,_salary) {
  nft={
    "firstName": first_Name,
    "lastName": last_Name,
    "profession":_profession,
    "salary":_salary
  }
  console.log("minted"+first_Name);
  NFTs.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0;i<NFTs.length;i++){
    console.log("First_Name: "+NFTs[i].firstName);
    console.log("Last_Name: "+NFTs[i].lastName);
    console.log("Profession: "+NFTs[i].profession);
    console.log("Salary: $"+NFTs[i].salary);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Length of NFT\'s:"+NFTs.length);
}

// call your functions below this line
mintNFT("Lakshay","Bansal","Student",100);
mintNFT("Abhishek","Sharma","Engineer",15000);
mintNFT("Robert","James","Actor",250000);
mintNFT("Tanmay","Saxena","Student",500);
listNFTs();
getTotalSupply();
