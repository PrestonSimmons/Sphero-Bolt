// Programmer: Preston Simmons
// Team Member: LaDanien Shelton
//Bolt ID: 6B78
//Date: 4.30.2024
//Program: Maze Competition
//Program URL:https://edu.sphero.com/program/16788335/edit

async function startProgram() {
	// Programmer: Preston Simmons - Start Text & Audio Checkpoint Commit - Date:04/30/24
	   await scrollMatrixText('Start!', {R: 66, G: 56, b: 255}, 90, true)
	   await delay(1)
	   await speak("Start", true);



	// Programmer:LaDanien Shelton- Blue LED Cheackpoint Commit - Date: 05/01/24
	await roll((getHeading() + 0), 60, 2.6);
   	await delay(1);



   //Programmer:Preston Simmons - Sound One Checkpoint Commit - Date:
	setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 90), 60, 1.8);
	await delay(1);
	await Sound.Menu.Accept.play(true);





	// Programmer Preston Simmons- Red LED Checkpoint Commit - Date: 5/2/24
	await roll((getHeading() + 90), 60, 1.3);
	await delay(1);
	await roll((getHeading() + 30), 60, 1.1);
	setMainLed({ r: 255, g: 0, b: 0});
	await delay(1);



	//Programmer: Preston Simmons - Sound Two Checkpoint Commit - Date: 5/2/24
	await roll((getHeading() - 90), 60, 0.6);
	await delay(1);
	await roll((getHeading() - 73), 60, 1.2);
	await Sound.Menu.Accept.play(true);
	



	// Programmer Preston Simmons - Green LED Checkpoint Commit - Date: 5/3/24
	await roll((getHeading() + 90), 60, 0.85);
	await delay(1);
	await roll((getHeading() + 50), 60, 0.5);
	await delay(1);
	await roll((getHeading() - 90), 60, 0.8);
	setMainLed({ r: 0, g: 255, b: 0});
	




	// Programmer 			- Purple LED & Sound Three Checkpoint Commit - Date:




	// Programmer			- Finish Text & Audio Checkpoint Commit - Date
}




	