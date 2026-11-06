
 let bar=document.querySelector(".bar");

 let sinput=bar.querySelector("input");
 let button=document.querySelector("#searching");
 let result=document.querySelector(".result-container");

  



let jobs = [
    {
        id: 1,
        name: "Frontend Developer",
        company: "TCS",
        location: "Mumbai",
        type: "Full Time",
        salary: "3-5 LPA"
    },
    {
        id: 2,
        name: "Backend Developer",
        company: "Infosys",
        location: "Pune",
        type: "Full Time",
        salary: "4-6 LPA"
    },
    {
        id: 3,
        name: "React Developer",
        company: "Wipro",
        location: "Mumbai",
        type: "Internship",
        salary: "15000/month"
    },
    {
        id: 4,
        name: "Python Developer",
        company: "Capgemini",
        location: "Bangalore",
        type: "Full Time",
        salary: "3-4 LPA"
    },
    {
        id: 5,
        name: "UI Developer",
        company: "Accenture",
        location: "Pune",
        type: "Internship",
        salary: "10000/month"
    },
    {
        id: 6,
        name: "Web Developer",
        company: "Tech Mahindra",
        location: "Mumbai",
        type: "Full Time",
        salary: "3-5 LPA"
    }
];



 function searchProduct(){
   let val=sinput.value.toLowerCase().trim();
     
      let filterJobs = jobs.filter((item) => {
        return item.name.toLowerCase().includes(val);
    });

    result.innerHTML = "";

filterJobs.forEach((item) => {

    result.innerHTML += `
        

    <div class="job-card">
            <h3>${item.company}</h3>
            <p>${item.name}</p>
            
        </div>
        
        
    `;

})
 }
button.addEventListener("click", searchProduct);



 















  