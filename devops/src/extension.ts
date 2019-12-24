// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('GitLab devops management start...');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gldevops.precheck', () => {
		// The code you place here will be executed every time your command is executed
		let gitlabUrl = vscode.workspace.getConfiguration('gitlabDevopsMgt').instanceUrl;
		let gitlabToken = vscode.workspace.getConfiguration('gitlabDevopsMgt').personalAccessToken;
		console.log('GitLab URL: ' + gitlabUrl + ' GitLab Token:' + gitlabToken);
		// Display a message box to the user
		vscode.window.showInformationMessage('Begin to do precheck...');
		if (gitlabUrl && gitlabToken) {
			vscode.window.showInformationMessage("Check GitLab URL and Token if it possible.");
			// 通过检测 GitLab 的 version 来确定连接是否 OK。
		} else {
			vscode.window.showErrorMessage("Failed to get validate GitLab URL and Token.");
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
