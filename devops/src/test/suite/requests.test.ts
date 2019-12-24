import * as vscode from 'vscode';

import * as assert from 'assert';

import * as requests from '../../requests';

suite('Requests Class Test Suite', () => {
    vscode.window.showInformationMessage('Start Requests test...');

    test('GET request test', () => {
        // do get request test
        var req = new requests.HttpClient.Requests;
        var res = req.get('https://www.baidu.com');
        assert.notEqual(res, undefined);
        res.then((resp) => {
            assert.equal(resp.statusCode, 200);
            assert.notEqual(resp.body, null);
            assert.notEqual(resp.body, undefined);
            console.log("Status code: " + resp.statusCode);
            console.log("Response: " + resp.body);
        });
        res.catch((err) => {
            assert.equal(err, undefined);
        });
    });

    test('POST request test', () => {
        // do post request test
        var req = new requests.HttpClient.Requests;
        req.post();
    });

    test('PUT request test', () => {
        // do put request test
        var req = new requests.HttpClient.Requests;
        req.put();
    });

    test('DELETE request test', () => {
        // do delete request test
        var req = new requests.HttpClient.Requests;
        req.delete();
    });
});
