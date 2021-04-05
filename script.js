window.addEventListener("load", function() {

   function myContainer(json,index){
      //container.innerHTML = `
      return `
      <div class="astronaut">
      <div class="bio">
         <h3>${json[index].firstName} ${json[index].lastName}</h3>
         <ul>
            <li>Hours in space: ${json[index].hoursInSpace}</li>
            <li>Active: ${json[index].active}</li>
            <li>Skills: ${json[index].skills[0]}, ${json[index].skills[1]}</li>
         </ul>
      </div>
      <img class="avatar" src="${json[index].picture}">
      </div>"
     `
   }


    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {

         const container = document.getElementById("container");
         container.innerHTML = `
         ${myContainer(json,0)}
         ${myContainer(json,1)}
         ${myContainer(json,2)}
         ${myContainer(json,3)}
         ${myContainer(json,4)}
         ${myContainer(json,5)}
         ${myContainer(json,6)}
        
      `;
        
});
});
});









