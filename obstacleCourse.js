// Programmer: Preston Simmons
// Team Member: LaDanien Shelton
//Bolt ID:6B78
//Date: 4.16.2024
//Program:Obstacle Course
//Program URL: https://edu.sphero.com/program/16752737/edit
//Partner 1

// New Maze #2  

// LaDanien Shelton - PC # 15 - Checkpoint one - Red 
/*
async function startProgram() {
	setMainLed({ r: 225, g: 0, b: 0 });
	await roll((getHeading() + 0), 60, 2.7);
	await delay(1);
	
} 
*/


// Preston Simmons - PC #16 - Checkpoint two - blue + Sound
async function startProgram() {
	setMainLed({ r: 225, g: 0, b: 0 });
	await roll((getHeading() + 0), 60, 2.3);
	await delay(1);
	await Sound.Menu.Accept.play(true);
	setMainLed({ r: 0, g: 0, b: 225 });
	await roll((getHeading() + 90), 60, 1.3);
	await delay(1);
} 

