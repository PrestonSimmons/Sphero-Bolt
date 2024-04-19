// Programmer: Preston Simmons
// Team Member: LaDanien Shelton
//Bolt ID:
//Date: 4.16.2024
//Program: Hello World - Sandbox
//Program URL: https://sites.google.com/sphero.com/sphero-edu-javascript-wiki


async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
