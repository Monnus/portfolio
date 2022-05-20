/*
Dom selections
*/
const img=document.createElement("img");
img.setAttribute("src","../pictures/myProfilePic.jpg");
img.setAttribute("style","width:100%;height:100%")
const domIMG=document.querySelector("#myPicture");
domIMG.insertAdjacentElement("afterbegin",img);


console.log(myPicture);



/*
data
*/
const bio={
    "education":{
highestEdu:"",
currentEmplostatus:'',

    },
    PersonalInfo:{
        Language:["English","Afrikanns"]
    },
 EXPskills:{
     programing:["html","css","Javascript"],
     years:3
 }
,
employHistory:{
    history:`<ul> 
    <li>Updating members information, </li>
    <li> Handle telephone queries inbound and outbound </li>
    <li> Meet standards and service level agreements</li>
    <li> Professionally handle all client communications</li>

    <li>Ensure delivery targets and objectives are met and operate in a supportive manner to achieve successful service delivery  </li>
    <li>Assist with member Contribution payments </li>
    <li>Assisting members with general inquiries on their medical aids</li>

    <li>Assist members with arrears and capture payment arrangements as per the debt mandate.</li>
    <li> Escalate unresolved inquiries to higher levels </li>

    </ul>`
},

Reference:{
    ContactPerson:"Rosy Gilchrist",
  Capacity:"Team leader",
  ContactNumber:"0117588602 (+27743710912)"
 },

 endOfEmployment:{
     date:"01 March 2021 - 31  August 2021",
     position: "Call centre agent"
 },
 PersonalProfile:{
    CriminalRecord:"none",
    PersonalAttributes:`
    <p>
    
    I am enthusiastic, self-motivated and a diligent person, and always willing to get involved. Through experience, I have learned how to set goals and engage in action-orientated behaviour. I am well organized, highly motivated, and always willing to accept responsibility for my work. My open-minded and sociable personality allows me to relate well to people.
    My objective is to gain comprehensive knowledge and experience within this institution that demands high standards and encourages growth and innovation and to work in an environment that strives for solutions and productivity throughout.
    With the skills, knowledge, and abilities that I have acquired, I will be able to combine my insight and creativity to contribute to the company and protect its most important asset. Their Brand.
    
    </p>`
 
 }
}




/*  
rendering
*/




