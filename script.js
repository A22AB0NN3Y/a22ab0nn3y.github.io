function menuClick(choice,newshow) {
  
  thisid = choice.id;
  
  alldivs = document.getElementsByClassName('main show')
  
  for (let data of alldivs) {
    console.log(data.id)
      document.getElementById(data.id).className="main noshow";
  }
  document.getElementById(newshow).className="main show";
}
