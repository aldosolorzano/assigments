const Express = require('express');
const router = Express.Router();
const submitted = {names:"",method:"",number:"",teams:""};

router.get('/',function(req,res){
  res.render('home/index',submitted);
});

router.post('/',function(req,res){
  let params = req.body;
  let namesArr = params.names.split(",");
  let numberTeams = parseInt(params.number);
  let method = params.method;
  console.log(params)
  if(method === "team-count"){
    params.teams = teamCount(namesArr,numberTeams);
  } else if (method == "per-team") {
    params.teams = perTeam(namesArr,numberTeams);
  }else{
    params.teams = [["Please select a method"]]
  }

  res.render('home/index',params);
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

  let randomator =  randomName(names);
  let nameslength = names.length;
  let teams = [];
    for(i=0; i < n; i++){
      teams.push([]);
    }

    for(e=0; e<teams.length; e++){
      console.log(teams)
      for(j = 0; j < Math.ceil(nameslength/n);j++){
          let name = randomator();
          if(name==undefined){
            return teams
          } else {teams[e].push(name[0]);}
      }
    }
  console.log(teams);
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
      } else {teams[i].push(name[0])}
    }
  }
  console.log(teams);
  return teams;
}

module.exports = router;
