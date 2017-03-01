/**
 * Created by liqiwen on 17/2/28.
 */

;
$(function () {
    window.myDB = {
        name: 'test',
        version: '2.0',
        data: null
    };
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