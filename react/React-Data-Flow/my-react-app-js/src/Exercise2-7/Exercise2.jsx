
import { useState } from "react";



function List(){
  return(
    <div>
      List
    </div>
  )
}

function Conversation(){
  return(
    <div>
      Conversation
    </div>
  )
}


function Exercise2() {

  const [chatState, setChatState ] = useState(
  {
      displayConversation: null,  //if null display conversations
      conversations: [
          {
              with: "Laura", convo: [
                  { text: "Hi", sender: "self" },
                  { text: "You there?", sender: "self" },
                  { text: "Yeah, hi, what's up?", sender: "other" }
              ]
          },
          {
              with: "Dad", convo: [
                  { text: "Have you finished your school work yet?", sender: "other" },
                  { text: "Yes.", sender: "self" },
                  { text: "What do you mean, yes?", sender: "other" },
                  { text: "??", sender: "self" }
              ]
          },
          {
              with: "Shoobert", convo: [
                  { text: "Shoobert!!!", sender: "self" },
                  { text: "Dude!!!!!!!!", sender: "other" },
                  { text: "Shooooooooo BERT!", sender: "self" },
                  { text: "You're my best friend", sender: "other" },
                  { text: "No, *you're* my best friend", sender: "self" },
              ]
          }
      ]
  });






  return (
    <div>             
        <div >
          {chatState.displayConversation === null ? <List /> : <Conversation />}
        </div>
    </div>
  );
}

export default Exercise2;

