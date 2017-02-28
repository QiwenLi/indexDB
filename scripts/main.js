/**
 * Created by liqiwen on 17/2/28.
 */

;
$(function () {
    var myDB = {
        name: 'test',
        version: '1.0',
        data: null
    };
    function creatDatabase (dname, dversion) {
        var request = window.indexedDB.open(dname, dversion);
        request.onerror = function (e) {
            console.log('database error: ', e);
        };
        request.onsuccess = function () {
            console.log('database success!');
            myDB.data = request.result
        };
        request.onupgradeneeded = function () {
            console.log('database version changed to: ' + dversion);
        };
    }
    creatDatabase(myDB.name, myDB.version);
});