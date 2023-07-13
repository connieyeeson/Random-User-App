
let userBars = document.querySelectorAll(".userBar")
let data;
let generateBtn = document.getElementsByTagName("button")[0];
let parentDiv = document.querySelector(".parentDiv")

generateBtn.addEventListener('click', ()=> {
    console.log(parentDiv)
    parentDiv.style.display = "flex";
    
})

function getData() {

    fetch( "https://randomuser.me/api/?results=3")
    .then(function(res){
        return res.json();
    })

    .then(function(data){
        for(let i = 0; i < userBars.length; i++){

            let userBar = userBars[i];

            let userInfo = `  <img src="${data.results[0].picture.large}" alt="" class="editImg"  >
            <div class="userInfo">
               <div> 
                <h3> ${data.results[0].name.first} ${data.results[0].name.last} </h3> 
                <p> ${data.results[0].gender} </p>
                </div>
              <div>
                <h4>${data.results[0].location.country}</h4>
                <p>${data.results[0].nat}</p>
               <p> ( Born: ${data.results[0].registered.date})</p>
             </div>
            </div>
            <a>${data.results[0].email}</a>`;
               userBars.forEach(function(user){
               user.innerHTML = userInfo;
               
            })
       

        }



    }) 

   
 }


 getData();
 setInterval(getData, 3000);
   

