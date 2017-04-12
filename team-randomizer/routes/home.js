
const Express = require('express');
const router = Express.Router();
const submitted = {names:"",method:"",number:"",teams:{value:""}};
const pg = require('pg')

const config = require('../config'); // This automagically reads the config.json file

const pool = new pg.Pool(config);

router.get('/',function(req,res){
  let cookies = req.cookies;
  if(cookies.names == undefined){
    res.render('home/index',submitted);
  } else{
    if(cookies.teams.value == undefined){
      res.cookie('teams',{value:[["Wating to display teams"]]});
    }
    res.render('home/index',cookies);
  }
});

router.post('/',function(req,res){
  let params = req.body;
  let numberTeams = parseInt(params.number);
  let method = params.method;
  let names = params.names;
  res.cookie('names',names);
  res.cookie('number',numberTeams);
  let cookies = req.cookies;
  let namesArr = names.split(",");

  if(method === "team-count"){
    res.cookie('teams',{value:teamCount(namesArr,numberTeams)});
  } else if (method == "per-team") {
    res.cookie('teams',{value:perTeam(namesArr,numberTeams)});
  }else{
    res.cookie('teams',{value:[["Hello, enter some values"]]});
  }

  pool.connect((err,client, done)=>{
    if(err) return console.error("Error cant connect to pool (%s)" % err);
    client.query('INSERT INTO namehistory (names) VALUES($1)', [names]);
    (qERR)=>{
      done();
      if(qERR) return console.error("problem with query")
    }
  });

  res.redirect('/');
})

function randomName(names){
  let namesLeft = names;
  return function(){
    let index= Math.floor(Math.random()*namesLeft.length)
    return  namesLeft.splice(index,1)[0];
  }
}

function teamCount(names,n) {
  if(n>names.length){
    let teams = [["Please write a lower number"]]
    return teams;
  }else if (n<=0) {
    let teams = [["Please write a higher number"]]
    return teams;
  }

  let randomator =  randomName(names)
  let nameslength = names.length;
  let teams = [];
    for(let i=0; i < n; i++){
      teams.push([]);
    }

    for(let i=0; i<teams.length; i++){
      for(let j = 0; j < Math.ceil(nameslength/n);j++){
          let name = randomator();
          if(name==undefined){
            teams.splice(i)
            return teams
          } else {
            teams[i].push(name);
          }
      }
    }
  return teams;
}
function perTeam(names,n){
  if(n>names.length){
    let teams = [["Please write a lower number"]]
    return teams;
  } else if (n<=0) {
    let teams = [["Please write a higher number"]]
    return teams;
  }
  let randomator =  randomName(names);
  let teams = []
  for(let i = 0; i < names.length/n; i++){
    teams.push([]);
  }
  for(let i=0; i<teams.length;i++){
    for(let e=0; e<n;e++){
      let name = randomator()
      if(name==undefined){
        return teams
      } else {teams[i].push(name)}
    }
  }
  return teams;
}

module.exports = router;
