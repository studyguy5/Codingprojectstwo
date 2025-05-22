
function onloadfunction(){
    loadData("/Name");      // here we get only the the deepest object {key : value}
    loadData("/next");        // here we get into another head categroy and deeper, we basicly set the path here
    loadData();             // here we get the complete file structure loadData(); or loadData("")
    console.log('test');
    //postData1("");
    postData2("/");

    // Nur posten, wenn gewünscht
    if (!sessionStorage.getItem("alreadyPosted")) {
        postData2();
        sessionStorage.setItem("alreadyPosted", "true");
    }
    // here an if-statement to prevent post data every time a reload happens
    //it checks the status of sessionStorage, if already posted = true, it will not post again
}

// but this works only if we set the parameter down in line 13 with "path="" " and the path on fetch
// it also works if the onlead function is empty and the path is set in the async function down as parameter

 const baseUrl = "https://fir-storage-cfb50-default-rtdb.europe-west1.firebasedatabase.app/";
 
 async function loadData(path=""){          // this is for line 3, 11 to get only type fruit, not the complete json, more information in the bottom
    let pullData = await fetch(baseUrl + path + ".json");   // if we delete path here we get the whole structure
    resultinjson = await pullData.json();
    console.log(resultinjson);
    
 }


 // important !! -> if not defined, the fetch is always a get (get data from url)

 // this is the way to catch the object in the deep, the normal order is name-> type: fruit,
 // in order to get to type instantly -> we add path both times we load the function, at the top we add /Name "in other words go one deeper"
 // if we add "/Name" as parameter in line 10, we get the same result as in line 

 async function postData(path="", data={}){
    let response = await fetch(baseUrl + path + ".json", {
        method: "POST",
        header: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
 };

 //here in the postData function we post some data to the database on googl's firebase service
 // the object is inserted as parameter

 async function postData1(path="", data={}){
    const IchpackeInmeinenRucksack = {"Essen": "Brot Käse Milch Fleisch"};

    let response = await fetch(baseUrl + path + ".json", {
        method: "POST",
        header: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(IchpackeInmeinenRucksack)
    });
    return responseToJson = await response.json();
 };

 // it is possible to set the array, object or list within the post function, but its not that flexible
 //the better way is to set up an array, object outside the function to be agile and flexible with changing data
 // in best case you put the data and the tool(the function) separate, so both are able to work the best way independent

 let user = {
  name: "Lena",
  age: 22
};

//postData("/users", user); // ✅ Übergib das Objekt

// here is a example of how it could work, mention only the name in the paramenter (here a short form of the function to understand)
// optional the deeper way as a string, the same as on top here visible

async function deleteData(path=""){
    let response = await fetch(baseUrl + path + ".json", {
        method: "DELETE",
        
    });
    return responseToJson = await response.json();
 };

 // here we delete Data, set the right path here or in the onload function to delete only things you want to delete
 // example "/Name/special post-url", example2 "/Name" to delete all elements of Name

 async function postData2(path="", data={}){
    const data2 = {};

    let response = await fetch(baseUrl + path + ".json", {
        method: "PUT",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
        
    });
    return responseToJson = await response.json();
 };

 // put replaces the path with a new element/value, you have to set the value, if the value is empty, the new element in firebase will also be empty
 // don't use Arrays - instead use objects, list's or every value of an Array seperate (guidline for firebase, maybe some other storage is better with arrays)