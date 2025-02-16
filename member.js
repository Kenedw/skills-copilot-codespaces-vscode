function skillsMember() {
  return {
    memberSkills: {
      memberA: ['JavaScript', 'HTML', 'CSS'],
      memberB: ['Java', 'Spring', 'SQL'],
      memberC: ['Python', 'Django', 'SQL'],
      memberD: ['Ruby', 'Rails', 'SQL'],
    },
    getMemberSkills(member) {
      return this.memberSkills[member];
    }
  }
}