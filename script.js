let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length -1; 
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
let currentWord = words[currentWordIndex];
let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
        letter.className = "letter out";
    },i * 80);
});

nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
        letter.className = "letter in";
    },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)


//sticky navbar//

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

//menu-icon//

let menuIcon = document.querySelector("#menuicon");
let navagationlist = document.querySelector(".navagationlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navagationlist.classList.toggle("open");
}


