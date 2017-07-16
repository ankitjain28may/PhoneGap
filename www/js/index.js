
// Create Database
var dbobj;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Device Ready");
 if(device.platform=="Android"){
            dbobj = window.sqlitePlugin.openDatabase({name: "Database"});
 }
 else{
    dbobj = window.openDatabase("Database", "1.0", "Database", 65536);
  //dbobj = window.openDatabase("databasename", "4", "Cordova Demo",'');
 }
  dbobj.transaction(createSchema, errorDB, successDB);
}


// Create Tables
function createSchema(tx)
{
  tx.executeSql('DROP TABLE IF EXISTS name_list');
  tx.executeSql('CREATE TABLE IF NOT EXISTS name_list(nID INTEGER PRIMARY KEY AUTOINCREMENT,sName TEXT)');
  tx.executeSql('INSERT INTO name_list (sName) VALUES ("First row")');
  tx.executeSql('INSERT INTO name_list (sName) VALUES ("Second row")');
}

function errorDB()
{
    alert("Error");
}

function successDB()
{
    alert("successful");
}

// Insert Records
$("#submit").click(function() {
    console.log("Clicked");
  dbobj.transaction(insertRecord, errorDB, successDB);
  dbobj.transaction(selectRecords, errorDB, successDB);
})

function insertRecord(tx)
{
    tx.executeSql('INSERT INTO name_list (sName) VALUES("Bhumi Shah")',[],SuccessInsert,errorInsert);
}

function SuccessInsert(tx,result){
          alert("Last inserted ID = " + result.insertId);
}

function errorInsert(error){
    alert("Error processing SQL: "+error.code);
}

// Fetch

function selectRecords(tx)
{
    tx.executeSql('SELECT * FROM name_list', [], successResults, errorInQuery);
}

function successResults(tx,results){
  //    alert(JSON.stringify(results));
  var sData = jquery.ParseJSON(results);
  console.log(sData);
  var nLength = results.rows.length;
  console.log(nLength);
  $("#name").val(nLength);
  // for(var c=0;c<=nLength;c++){
    // execute or place your desired statement
  // }
}

function errorInQuery(error){
    alert("Error processing SQL: "+error.code);
}