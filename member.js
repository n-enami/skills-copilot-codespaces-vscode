function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 30000,
        getSkills: function() {
            return this.skills;
        }
    };

    return member;
}