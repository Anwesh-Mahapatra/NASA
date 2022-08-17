
const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    customer: ['ZTM','NASA'],
    upcoming: true,
    success: true,
};

//Mapping Launch to its flight number to distinguish between launches
// launches.set(launch.flightNumber, launch);

function addNewLaunch(launch){
    lastFlightNumber++;
    launches.set(lastFlightNumber,Object.assign(launch,{
        flightNumber: lastFlightNumber,
        upcoming: true,
        success: true,
        customer: ['Anwesh','NASA']
    }));
}


module.exports = {
    launches,
    addNewLaunch,
};