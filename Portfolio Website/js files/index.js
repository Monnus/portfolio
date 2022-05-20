//data
const intro={
    project:["forikify"],
    githubLink:"",
    softItro:`
    My name s MonnusI'v been a self-study web developer for 3 years.
    I specialise in HTML, CSS and Javascript.
   I have a deep passion for creating stunning smooth websites I believe that having a good website functional website helps clients or consumer
   find information that's most crucial to them this helps build trust among those who visit the website and the person who owns it.
   I am a person who believes one should always try to better themselves by facing new challenges,"
   always doing what your best at is not  improving on your self" this is especially true to coding,
   having this mindset provides a perfect candidate for any particular problem you may have
    `
}
// Domm elements
const imgDiv=document.querySelector("#img-div");
const pargraphIntro=document.createElement("p");
pargraphIntro.innerText=intro.softItro;

const img=document.createElement("img");
img.setAttribute("src","../pictures/myProfilePic.jpg")
img.setAttribute("style","width:100%;height:100%;")
imgDiv.appendChild(img)

const introAbout=document.querySelector("#headingIntro").insertAdjacentElement("afterend",pargraphIntro);
console.log(img,introAbout);


const logo=document.querySelector("#logo");




const name= "Maundrian";
const surnam="Velsket";
const number="076 9099 742";
const email='maun2velsket@gmail.com';
const myImg=`<img src="../pictures/my profile pic.jpg"/>`;

console.log(intro.gith);

