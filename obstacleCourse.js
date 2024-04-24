// Programer: LaDanien Shelton
// Team Member: Prestion Simmons
// Blot ID:6B78
// Date:4.16.2024
// Program: Sphero Obstical Course #1 
// Progarm URL: https://edu.sphero.com/program/16700413/ed

//Check Point 1
//Programmer 1: Preston Simmons
async function startProgram() {
	await roll((getHeading() + 0), 60, 1.55);
	await delay(1);
	//Check point 2
    //Programmer 2: laDanien Shelton
	await roll((getHeading() + 90), 60, 1.3);
    await delay(1);
	
	
	
}