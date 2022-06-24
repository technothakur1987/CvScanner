console.log("this is my index.js")
/* oour website is a portal whwer we will pull the data from an api(including pics also ) */
//assumming the data is pulled from an api ...

//data is an array of objects which contains details about the candidates 
const data = [
    {
        name: "Rohan Das",
        age: 18,
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/78.jpg"           // open randomuser.api in new tab 

    },
    {
        name: "Rohan Das",
        age: 18,
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"           // open randomuser.api in new tab 

    },
    {
        name: "Shubham Sharma",
        age: 28,
        city: "Banglore",
        language: "Javascript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/79.jpg"           // open randomuser.api in new tab 

    },
    {
        name: "Camella cabello",
        age: 18,
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/women/73.jpg"           // open randomuser.api in new tab 

    },
    {
        name: "Aishwarya Rai",
        age: 42,
        city: "Mumbai",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/72.jpg"           // open randomuser.api in new tab 

    },
    {
        name: "Rohit Sharma ",
        age: 34,
        city: "Jharkand",
        language: "Go",
        framework: "GO-framewrk",
        image: "https://randomuser.me/api/portraits/men/71.jpg"           // open randomuser.api in new tab 

    }
]
/*We need to make a website in which we can iterate this data and choose any one of the following */
//first we make a iterator;

function cvIterator(data) {
    let counter = 0;
    return {
        next: function () {
            if (counter < data.length + 1) {
                counter++;
                return {
                    done: false, value: data[counter - 1]
                }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}




//button listener for next btn 

let next = document.getElementById("next");
next.addEventListener("click", nextCv);
const nu = cvIterator(data);
nextCv();//once nextcv is called because when the page opens atleast i st value is visuisble in profile and images 

function nextCv(data) {
    console.log("Running nextCv ");

    const val = nu.next().value;
    console.log(val);
    console.log(val.image);
    console.log(val.name)


    
        let image = document.getElementById(`image`);
        image.innerHTML = `<img src='${val.image}'>`

        let profile = document.getElementById(`profile`);
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">name:    ${val.name}</li>
        <li class="list-group-item">age  :   ${val.age}yrs old</li>
        <li class="list-group-item">lives in:${val.city}</li>
        <li class="list-group-item">Primarily works on ${val.language}</li>
        <li class="list-group-item">${val.framework}framework</li>
        </ul>`
        
    }

    
      
  