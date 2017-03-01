/**
 * Created by liqiwen on 17/2/28.
 */

;
$(function () {
    window.myDB = {
        name: 'dbTest',
        version: 1,
        data: null
    };
    const customerData = [
        { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
        { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
    ];
    function creatDatabase (dbName, dbVersion) {
        var dbRequest = window.indexedDB.open(dbName, dbVersion);
        dbRequest.onerror = function (e) {
            console.log('database error: ', e);
        };
        dbRequest.onsuccess = function (e) {
            console.log('database success!', e);
            window.myDB.data = dbRequest.result
        };
        dbRequest.onupgradeneeded = function (e) {
            console.log('database version changed to: ' + dbVersion, e);
            var db = e.target.result;
            var objectStore = db.createObjectStore('customers', {keyPath: 'ssn'});
            objectStore.createIndex('name', 'name', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.add(customerData[i]);
        };
    }
    function deleteDatabase (dbName) {
        var deleteDbRequest = indexedDB.deleteDatabase(dbName);
        deleteDbRequest.onsuccess = function (e) {
            console.log('delete database success!', e);
        };
        deleteDbRequest.onerror = function (e) {
            console.log('database delete error!', e);
        };
    }
    creatDatabase(window.myDB.name, window.myDB.version);
});