import * as assert from 'assert';

import * as vscode from 'vscode';

import * as requests from '../../requests';

suite('Requests Class Test Suite', () => {
    vscode.window.showInformationMessage('Start Requests test...');

    test('GET request test', () => {
        // do get request test
        var req = new requests.HttpClient.Requests;
        req.get();
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
