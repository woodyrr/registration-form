let firstStep = document.querySelector(".stepone")
let secondStep = document.querySelector(".steptwo")
let thirdStep  = document.querySelector('.step3')
const inputName = document.querySelector(".name")
const inputEmail = document.getElementById("email")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let sofware = document.querySelector(".bro1")
let experience = document.querySelector(".bro2")
let design = document.querySelector(".bro3")
let inname  = document.querySelector('.inname')
let inemail  = document.querySelector('.inemail')
let topic  = document.querySelector('.topic')
let currentStep = document.querySelector(".step")
let step = 1
let dot2 = document.querySelector(".dot2")
let dot3 = document.querySelector(".dot3")
let out2 = document.querySelector(".out2")
let out3 = document.querySelector(".out3")
// bg-[#652CD1]
// bg-[#4D5562]
function steps(e,a,b){
    currentStep.innerHTML = `
        <div class="px-2 text-[#4D5562]">step ${e} of 3</div>
        <div class="bg-[#4D5562] rounded-full w-5 h-5 flex justify-center items-center">
            <div class="dot1  border-none rounded-full w-3.5 h-3.5 bg-[#652CD1] "></div>
        </div>
        <div class="out2 bg-[#4D5562] rounded-full w-5 h-5 flex justify-center items-center">
            <div class="dot2  border-none rounded-full w-3.5 h-3.5  ${a}"></div>
        </div>
        <div class="out3 bg-[#4D5562] rounded-full w-5 h-5 flex justify-center items-center">
            <div class="dot3  border-none rounded-full w-3.5 h-3.5 ${b}"></div>
        </div>
    `
}

// changing different steps/modals
function first(){
    firstStep.classList.toggle('hidden')
    secondStep.classList.toggle('hidden')
    step = 2
    dot2.classList.toggle('active')
    out2.classList.toggle('active')
    let bg = "bg-[#652CD1]"
    steps(step,bg)
}

function second(){
    secondStep.classList.toggle('hidden')
    thirdStep.classList.toggle('hidden')
    step = 3
    let bg = "bg-[#652CD1]"
    steps(step,bg,bg)
    dot3.classList.toggle('active')
    out3.classList.toggle('active')
}


// changing bg-colors of step 2.
function sofwareChange(){
    sofware.classList.toggle("active") 
}
function experienceChange(){
    experience.classList.toggle("active")
}
function designChange(){
    design.classList.toggle("active")
}

// first step initiation/ validation.
function begin(){
    if(inputName.value > 0 || inputEmail.value.includes('@') ){
        first()
    }
    else{
        alert("Please fill in form")
    }
}
function end(){
    alert("✅ Success")
}

// button/eventlisteners
btn1.addEventListener("click", begin);
sofware.addEventListener("click", sofwareChange )
design.addEventListener("click", designChange )
experience.addEventListener("click", experienceChange )

//third step
function middle(){
    const items = [sofware, experience, design]
    items.forEach(i => {
        if(i.classList.value.includes("active")){
            let li = document.createElement('li');
            li.innerText = i.innerHTML
            topic.appendChild(li)
        }
        else{
            console.log("NOOOOO")
        }
        
    });
    inname.innerHTML = inputName.value
    inemail.innerHTML = inputEmail.value
    // end()
    second()
    end()
}

btn2.addEventListener("click",middle);