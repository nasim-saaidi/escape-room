//vars
const choices = document.querySelectorAll(".choice");
const input = document.querySelector(".input");
const badEnding = document.querySelector('.bad-ending');
const choiceB = document.querySelector('.choice-2B-1');
const back = document.querySelector(".back")
const backTwoBtn = document.querySelector(".back2")
const isKeyInInventory = document.querySelector('.key');
const isBookInInventory = document.querySelector('.book-item');
const bookDiv =  document.querySelectorAll('.books');
const input2 = document.querySelector(".input-2");
const goodEnding = document.querySelector('.good-ending');

//default values
let done = false;
input.style.display = "none"
input2.style.display = "none"
isKeyInInventory.style.display = "none";
isBookInInventory.style.display = "none";
let tries = 2;//formula: tries + 1  dit zijn 3 tries
let speed = 40;
let ownKey = false;
let understood = false;
let breakKey = false

function scrollingText(className, message, speed){
    let i = 0;
    let interval = setInterval(function(){
        if(done == false)
        {
            document.querySelector(className).innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
                done = true;
                document.querySelector(className).innerHTML += "<br>";
            }
            done = false;
        }
    }, speed);
    //hoe lager het getal naast scrollingText, hoe sneller//
}



scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", speed );

setTimeout(() => {
    scrollingText(".text", "There should be a key somewhere in this empty room.", speed );
}, speed*110);

setTimeout(function(){
    document.querySelector('.text').innerHTML = "";
}, speed*175);

setTimeout(() => {
    scrollingText(".summaryText", "You wake up in an empty room", speed );
}, speed*200);

setTimeout(() => {
    scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
}, speed*240);

setTimeout(() => {
    scrollingText(".summaryText", "you can see a key lying on the floor", speed );
}, speed*330);

setTimeout(() => {
    scrollingText(".choice-1-1", " Walk to the door", speed );
}, speed*370);

setTimeout(() => {
    scrollingText(".choice-2-1", " Grab the key", speed );
}, speed*400);

setTimeout(() => {
    scrollingText(".choice-3-1", ' "What?" ', speed );
}, speed*430);

//choice 1
function choiceOneClick()
{
    console.log("clicked 1");

    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";
    document.querySelector('.choice-2B-1').innerHTML = "";
    scrollingText(".text", "You walk to the door, only to find a keyboard, somehow you recognize the language.", speed );
    setTimeout(() => {
        input.style.display = "block"; 
        scrollingText(".back", "Back.", speed );
    }, speed*65); 
    back.style.display = "block";

    
}

function backClick() {

    console.log("back clicked");

    document.querySelector('.text').innerHTML = "";
    back.style.display = "none";
    input.style.display = "none";

    scrollingText(".summaryText", "You wake up in an empty room", speed );

    setTimeout(() => {
        scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
    }, speed*40);
    

    if(ownKey == true) {

        setTimeout(() => {
            scrollingText(".summaryText", "you have a key in your hand", speed );
        }, speed*140);
        
    }
    else {
        setTimeout(() => {
            scrollingText(".summaryText", "you can see a key lying on the floor", speed );
        }, speed*140);
    }
    
    setTimeout(() => {
        scrollingText(".choice-1-1", " Walk to the door", speed );
    }, speed*170);
    

    if(ownKey == true) {
        if(breakKey == false)
        {
            setTimeout(() => {
                scrollingText(".choice-2B-1", " break the key", speed );
                back.style.display = "block";
            }, speed*200); 
        }
        else{
            setTimeout(() => {
                document.querySelector('.choice-2B-1').innerHTML = "";
                back.style.display = "block";
            }, speed*200); 
        }
    }
    else{
        setTimeout(() => {
            scrollingText(".choice-2-1", " Grab the key", speed );
        }, speed*400);
    }
   

    if (understood == true ) {
        document.querySelector('.choice-3-1').innerHTML = "";
    }
    else { 
        setTimeout(() => {
            scrollingText(".choice-3-1", ' "What?" ', speed );
        }, speed*230);
    }
    document.querySelector('.back').innerHTML = "";

}


function choiceTwoClick()
{
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = ""; 

    console.log("clicked 2");
    scrollingText(".text", "You find a key on the floor, it feels rather brittle.", speed);


    setTimeout(() => {
        document.querySelector('.text').innerHTML = "";
        scrollingText(".summaryText", "You wake up in an empty room", speed );
    }, speed*80);
    
    setTimeout(() => {
        scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
    }, speed*120);
    
    setTimeout(() => {
        scrollingText(".summaryText", "you have a key in your hand", speed );
    }, speed*210);
    
    setTimeout(() => {
        scrollingText(".choice-1-1", " Walk to the door", speed );
    }, speed*250);
    
    setTimeout(() => {
        scrollingText(".choice-2B-1", " break the key", speed );
        back.style.display = "block";
    }, speed*280); 

    if (understood == true ) {
        document.querySelector('.choice-3-1').innerHTML = "";
    }
    else { 
        setTimeout(() => {
            scrollingText(".choice-3-1", ' "What?" ', speed );
        }, speed*300);
    }

    

    ownKey = true;
    setTimeout(() => {
        isKeyInInventory.style.display = "block";
    }, speed*26 ); 
  
}

function choiceBClick() {

    console.log("goeie knop");
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";
    choices[3].innerHTML = "";
    document.querySelector('.choice-2B-1').innerHTML = "";


    scrollingText(".text", "You fling the key against the wall , it's brittle, it breaks in half. dust particles fly through the room. You find that glowing text appears on the wall spelling: “I’m as swift as a coyote, I sting like a bee and I carve like a beaver, what am I?”. You put the other half of the key, with the base, in your pocket  ", speed );
    
    setTimeout(() => {
        isKeyInInventory.src = "/images/broken-key.png";
    }, speed*20);

    setTimeout(() => {
        scrollingText(".back", "Back.", speed );
    }, speed*320);
    
    breakKey = true

   //speed
    

}

function book() {

}

function choiceTreeClick()
{
    console.log("clicked 3");

    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";

    scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", speed );

setTimeout(() => {
    scrollingText(".text", "There should be a key somewhere in this empty room.", speed );
}, speed*110);

setTimeout(() => {
    document.querySelector('.text').innerHTML = "";
}, speed*175);

setTimeout(() => {
    scrollingText(".summaryText", "You wake up in an empty room", speed );
}, speed*200);

setTimeout(() => {
    scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
}, speed*240);

if(ownKey == true) {

    setTimeout(() => {
        scrollingText(".summaryText", "you have a key in your hand", speed );
    }, speed*330);
    
}
else {
    setTimeout(() => {
        scrollingText(".summaryText", "you can see a key lying on the floor", speed );
    }, speed*330);
}


setTimeout(() => {
    scrollingText(".choice-1-1", " Walk to the door", speed );
}, speed*370);

if(ownKey == true ) {
    setTimeout(() => {
        scrollingText(".choice-2B-1", " break the key", speed );
        back.style.display = "block";
    }, speed*280); 
}
else {
    setTimeout(() => {
        scrollingText(".choice-2-1", " Grab the key", speed );
    }, speed*400);
}

understood = true
}

function choice22Click() {

    console.log("JAAAAAA");

    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-2').innerHTML = "";
    document.querySelector('.choice-2-2').innerHTML = "";
    bookDiv[0].style.display = "block";
    isBookInInventory.style.display = "block";
    setTimeout(() => {
        document.querySelector('.booktext-one').innerHTML = "A six-year-old was found dead in the basement of the family Ramsey's home in December 1996. Early that morning the victim’s mother had called 911 and stated that her daughter was missing, and that a ransom note was found in the house demanding $118,000 for her return. A few hours later the family and the police discovered that the victim had never left the house. When prompted to conduct a second search of the house, the father found her body in the basement. She’d been bound, gagged and killed with a blow to the head and had been asphyxiated with a cord made from one of the mothers' paintbrushes.";
        document.querySelector('.booktext-two').innerHTML = "Investigators later revealed that the victim had also been sexually assaulted. Suspects soon emerged, including an intruder, a family friend, who had played Santa in their home, the victim’s parents and her nine-year-old brother. This case was unsolved as the investigation was done irresponsibly. Soon after the police first arrived at the Ramsey’s home, before it could be thoroughly combed for physical evidence, friends of the family arrived to show support for them, and the police allowed them to traverse the house freely. If conclusive physical evidence had existed, it would be almost immediately destroyed. ";
    }, speed*10);

    backTwoBtn.style.display = "block";
    backTwoBtn.innerHTML = "Back";
}


if(choices[0])
{
    choices[0].addEventListener('click', choiceOneClick)
}

if(choices[1])
{
    choices[1].addEventListener('click', choiceTwoClick)
}

if(choices[3])
{
    choices[3].addEventListener('click', choiceTreeClick)
}

if(choiceB) {
    choiceB.addEventListener('click', choiceBClick);
}

if(choices[4])
{
    choices[4].addEventListener('click', choice12Click );
}

if(choices[5])
{
    choices[5].addEventListener('click', choice22Click)
}




if(back) {
    back.addEventListener('click', backClick);
}

function backTwo() {
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";

    input.style.display = "none";
    input2.style.display = "none";
    back.style.display = "none";

    setTimeout(() => {
        scrollingText(".text", "Well hello, you confusion is predictable, you're not outside, there is still more to this.", speed);
    }, speed*140);


    setTimeout(() => {
        document.querySelector('.text').innerHTML = "";
    }, speed*310);

    setTimeout(() => {
        scrollingText(".summaryText", 'you walk into another room, there is, again, a computer there, this time with a book next to it, the title reads: "a crime not committed is your key to progress" ', speed);
    }, speed*320);    

    setTimeout(() => {
        scrollingText(".choice-1-2", "walk to the door.", speed);
    }, speed*490);

    setTimeout(() => {
        scrollingText(".choice-2-2", "Grab and read the book.", speed);
    }, speed*530);


    bookDiv[0].style.display = "none";
    backTwoBtn.style.display = "none";

    isBookInInventory.style.display = "none";
}

if(backTwoBtn) {
    backTwoBtn.addEventListener('click', backTwo);
}

function nextLvl()
{
    console.log("test");
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";
    backTwoBtn.innerHTML = "";

    input.style.display = "none";
    back.style.display = "none";

    setTimeout(() => {
        scrollingText(".text", "Well hello, you confusion is predictable, you're not outside, there is still more to this.", speed);
    }, speed*170);


    setTimeout(() => {
        document.querySelector('.text').innerHTML = "";
    }, speed*310);

    setTimeout(() => {
        scrollingText(".summaryText", 'you walk into another room, there is, again, a computer there, this time with a book next to it, the title reads: "a crime not committed is your key to progress" ', speed);
    }, speed*320);    

    setTimeout(() => {
        scrollingText(".choice-1-2", "walk to the door.", speed);
    }, speed*490);

    setTimeout(() => {
        scrollingText(".choice-2-2", "Grab and read the book.", speed);
    }, speed*530);
}

function choice12Click()
{
    tries = 2;
    backTwoBtn.style.display = "block";
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-2').innerHTML = "";
    document.querySelector('.choice-2-2').innerHTML = "";
    document.querySelector('.back2').innerHTML = "";
    scrollingText(".text", "You walk to the door, there is a keyboard in a different language again, you seem to recognize it.", speed );
    setTimeout(() => {
        input2.style.display = "block"; 
        scrollingText(".back2", "Back", speed);
    }, speed*65); 
    back.style.display = "none";
    
}

function keyInput(event){
    if(event.key == "Enter")
    {
        if(tries > 0)
        {
            if(input.value == "Hummingbird" || input.value == "hummingbird") {
                document.querySelector('.text').innerHTML = "";
                document.querySelector('.back').innerHTML = "";
                input.style.display = "none";
                scrollingText(".text", "correct, you opened the door and walk out of it.", speed );
                document.querySelector('.text').innerHTML = "";
                nextLvl();
                input.value = "";
                input.style.display = "none";
            }
            else{
                document.querySelector('.text').innerHTML = "";
                tries --;
                scrollingText(".text", "wrong, you have " + (tries + 1) + " tries left", speed );
            }
        }
        else {
            document.querySelector('.text').innerHTML = "";
            back.style.display = "none";
            input.style.display = "none";
            badEnding.style.display = "block";
            scrollingText(".text", "you were wrong three times. The door is permanently locked. That wasn't supposed to happen. I'm sorry, there's nothing I can do for you", speed )
            setTimeout(() => {
                document.querySelector('.text').innerHTML = "";
                scrollingText(".bad-ending", "you're stuck", speed );
            }, speed*150);
        }
    }
}
function keyInput2(event){
    if(event.key == "Enter")
    {
        if(tries > 0)
        {
            if(input2.value == "hostage" || input2.value == "hostage") {
                document.querySelector('.text').innerHTML = "";
                document.querySelector('.back').innerHTML = "";
                input2.style.display = "none";
                backTwoBtn.style.display = "none";
                scrollingText(".text", '"congratulations, you did what i couldnt, your freedom was earned, goodbye" .', speed );
                input2.value = "";
                input2.style.display = "none";
                goodEnding.style.display = "block"
                setTimeout(() => {
                    document.querySelector('.text').innerHTML = "";
                    scrollingText(".good-ending", "you're free", speed );
                }, speed*150);

            }
            else{
                document.querySelector('.text').innerHTML = "";
                tries --;
                scrollingText(".text", "wrong, you have " + (tries + 1) + " tries left", speed );
            }
        }
        else {
            document.querySelector('.text').innerHTML = "";
            back.style.display = "none";
            backTwoBtn.style.display = "none";
            input2.style.display = "none";
            badEnding.style.display = "block";
            scrollingText(".text", "you were wrong three times. The door is permanently locked. you've come so far, I'm sorry, there's nothing I can do for you", speed )
            setTimeout(() => {
                document.querySelector('.text').innerHTML = "";
                scrollingText(".bad-ending", "you're stuck", speed );
            }, speed*150);
        }
    }
}







if(input)
{
    input.addEventListener('keydown', keyInput)
}

if(input2)
{
    input2.addEventListener('keydown', keyInput2)
}







