const issue = {
    title: "Live 'x' semana 'x'",
    repositoryNameAssociated: "Mission NodeJs",
    status: "Open",
    numberOfComments: (Math.random() * 10) + 1,
    labels: ["live","Week","status"],
    author: "ghector6",
    dateCreated: "",
    lastUpdated: new Date(),
    getTitleAndAuthor: function() {
        return this.title + this.author
    },
    getGeneralInfo: function() {
        return `This Issue ${this.title} was created by and was updated on
         ${this.lastUpdated} total of comments = ${Math.floor(this.numberOfComments)}`
    },
}
//console.log(Math.floor(issue.numberOfComments) )
//console.log(prompt(issue.dateCreated))
//console.log(issue.labels)
console.log(issue.getGeneralInfo()); //Funciona en navegador pero aquí no por el PROMPT!

test('1) Printing Correctly', () => {
   issue.title = "Live 'x' semana 'x'",
    expect(issue.title).toBe("Live 'x' semana 'x'")
})