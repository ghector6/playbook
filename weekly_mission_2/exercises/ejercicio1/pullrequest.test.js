import pullRequest from './pullrequest'

test('2) Getting Pr from new explorer', () => {
    const newPr = new pullRequest ('ghector6')
    expect(newPr.name).toBe('ghector6');

});