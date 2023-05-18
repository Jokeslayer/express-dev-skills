// Convention is to name the model in uppercase and singular
const Skill = require('../models/skills');

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All skills'
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

function newSkill(req,res){
  res.render('skills/new', {title: 'New Skill'});
}

function create(req,res){
  // Models are responible for CRUD'ing the data
  Skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function deleteSkill(req,res){
  console.log(req.params.id);
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit To-Do',
    skill
  });
}

function update(req,res){
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};