const Express = require('express');
const router = Express.Router();
const submitted = {names:"",method:"",number:"",teams:{value:""}};

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

  if(method === "team-count"){
    let namesArr = names.split(",");
    res.cookie('teams',{value:teamCount(namesArr,numberTeams)});
  } else if (method == "per-team") {
    let namesArr = names.split(",");
    res.cookie('teams',{value:perTeam(namesArr,numberTeams)});
  }else{
    res.cookie('teams',{value:[["Hello, enter some values"]]});
  }
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
    for(i=0; i < n; i++){
      teams.push([]);
    }

    for(e=0; e<teams.length; e++){
      for(j = 0; j < Math.ceil(nameslength/n);j++){
          let name = randomator();
          if(name==undefined){
            return teams
          } else {
            teams[e].push(name);
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
  for(i = 0; i < names.length/n; i++){
    teams.push([]);
  }
  for(i=0; i<teams.length;i++){
    for(e=0; e<n;e++){
      let name = randomator()
      if(name==undefined){
        return teams
      } else {teams[i].push(name)}
    }
  }
  return teams;
}

module.exports = router;
