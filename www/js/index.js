/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//



function onDeviceReady() {
    console.log("Device Ready");
    var db = window.openDatabase("shortName", "1.5", "displayName", 65536)
    db.transaction(populateDB, errorCB, successCB);
}

function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS DEMO');
     tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}

function queryDB(tx) {
    $("#name").val("working");
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    $("#name").val("executing");
}

    // Query the success callback
    //
function querySuccess(tx, results) {
  $("#test").val(results.rows.length);
  console.log("Returned rows = " + results.rows.length);

  // this will be true since it was a select statement and so rowsAffected was 0
  if (!results.rowsAffected) {
    console.log('No rows affected!');
    return false;
  }
  // for an insert statement, this property will return the ID of the last inserted row
  console.log("Last inserted row ID = " + results.insertId);
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //


$(".submit").click(function() {
    var name = $("#name").val();
        console.log("DB created");
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
})