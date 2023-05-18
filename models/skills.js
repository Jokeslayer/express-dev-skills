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
    getOne,
    create,
    deleteOne,
    update
  };
	
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }