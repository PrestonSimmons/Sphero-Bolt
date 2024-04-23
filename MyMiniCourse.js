// Programmer: Preston Simmons
// Team Member: LaDanien Shelton
//Bolt ID:6B78
//Date: 4.16.2024
//Program:MyMiniCourse
//Program URL: https://edu.sphero.com/program/16743350/edit

async function startProgram() {
	await roll((getHeading() + 0), 60, 1.6);
	await delay(1);
	await roll((getHeading() - 95), 60, 1.9);
}
