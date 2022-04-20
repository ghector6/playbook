const missionCommander = require('./../app/missionCommander')

test('1) Creating a new missionCommander', () => {
    const myMissionCommander = new missionCommander('Debussy')
    expect(myMissionCommander.name).toBe('Debussy'); // Corrige esta prueba
  });
