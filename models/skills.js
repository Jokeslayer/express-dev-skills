const skills = [
    {id: 32479, skill: 'HTML', proficiency: 'High'},
    {id: 56244, skill: 'CSS', proficiency: 'High'},
    {id: 00073, skill: 'Java', proficiency: 'High'},
    {id: 08965,skill: 'Javascript', proficiency: 'Intermediate'},
    {id: 45652,skill: 'ExpressNode', proficiency: 'Low'},
    {id: 64799,skill: 'C', proficiency: 'Intermediate'},
    {id: 61489,skill: 'C++', proficiency: 'Intermediate'},
    {id: 93569,skill: 'Python', proficiency: 'Low'},
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }