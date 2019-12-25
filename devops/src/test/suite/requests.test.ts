import * as vscode from 'vscode';

import * as assert from 'assert';

import * as requests from '../../requests';

suite('Requests Class Test Suite', () => {
    vscode.window.showInformationMessage('Start Requests test...');

    test('GET request test', () => {
        // do get request test
        var options = {
            open_timeout: 20000,
            headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': 'WXUvDDXJdK79HfqopV7g'
            }
        };
        var req = new requests.HttpClient.Requests;
        var res = req.get('https://gitlab.com/api/v4/version', options);
        assert.notEqual(res, undefined);
        res.then((resp) => {
            assert.equal(resp.statusCode, 200);
            assert.notEqual(resp.body, null);
            assert.notEqual(resp.body, undefined);
            assert.notEqual(resp.body.version, undefined);
            assert.notEqual(resp.body.revision, undefined);
            console.log("Status code: " + resp.statusCode);
            console.log("GitLab version: " + resp.body.version);
            console.log("GitLab revision: " + resp.body.revision);
        });
        res.catch((err) => {
            assert.equal(err, undefined);
            console.log("Get Error: " + err);
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
