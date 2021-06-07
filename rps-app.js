function rps(choice){
  let randomNum=Math.floor(Math.random()*3);
  let choiceArray=['rock','paper','scissor'];
  let botChoice=choiceArray[randomNum];
  let dict={'rock':{'rock':0.5,
                   'paper':0,
                  'scissor':1
  } ,
    'paper':{'paper':0.5,
             'rock':1,
             'scissor':0
    },
  'scissor':{'scissor':0.5,
             'rock':0,
              'paper':1
  }}
  
  let gameResult=dict[choice.id][botChoice];
  let color_message={1:{'color':'rgb(40, 131, 191)',
    'message':'You won'
  },
   0:{'color':'rgb(184, 41, 31)',
    'message':'You lost'
  },
     
    
    0.5:{'color':'rgb(246, 255, 71)',
    'message':'Match tied'
  }
      
    }
  var bot=document.getElementById(botChoice);
  botImage=bot.src;
  playerImage=choice.src;
  message=color_message[gameResult]['message'];
  color=color_message[gameResult]['color'];
  removeAll();
  appendResult(botImage,playerImage,color,message);
  
  
}
function removeAll(){
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();
  
}
function appendResult(botImage,playerImage,color,message){
  console.log(color);
  var div=document.getElementById('rps-flex');
  
 
  var bot=document.createElement('img');
  bot.src=botImage;
  bot.style="  height:160px;width:40%;margin:5px;box-shadow:3px 5px 8px "+color+";";
  var player=document.createElement('img');
  player.src=playerImage;
  player.style="  height:160px;width:40%;margin:5px;box-shadow:3px 5px 8px "+color+';';
  div.appendChild(player);
  var result=document.createElement('h1');
  result.append(message);
  result.style= "text-weight:600;color:" + color + ";";
  div.appendChild(result);
  div.appendChild(bot);
  
}
