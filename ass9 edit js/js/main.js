// var q1=document.getElementById("demo")
// var a1=document.getElementById("author")

var quotearray=["“Don't think or judge, just listen.”",
"“Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.”",
"“Be mindful. Be grateful. Be positive. Be true. Be kind.”",
"“If you tell the truth, you don't have to remember anything.”",
"“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
"“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”"]

var autherarray=["-- Sarah Dessen, Just Listen" ,
" -- Roy T. Bennett",
"--Roy T. Bennett, The Light in the Heart",
"--Mark Twain",
"--Bill Keane",
"-- Jess C. Scott, The Intern"]

function quote() {
    var count=Math.floor(Math.random()*6);

        document.getElementById("demo").innerHTML=quotearray[count]
        document.getElementById("author").innerHTML=autherarray[count]
  

}