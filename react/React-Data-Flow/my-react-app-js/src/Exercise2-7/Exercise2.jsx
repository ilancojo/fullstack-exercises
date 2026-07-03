
import { useState } from "react";





function Conversation(){
  return(
    <div>
      Conversation
    </div>
  )
}

function Contact(props){
  return(
    <div>
      {name}
    </div>
  )
}

function List(props) {
  let contactName = props.contacts.map(contactName => (
    <Contact key={contactName} name={contactName} />
  ))
  return (
    <div>
      {contactName}
    </div>
  )
}
/*  אותו רעיון מחשבה 
function List(props) {
  let contactElements = []
  for (let name of props.contacts) {
    contactElements.push(<Contact key={name} name={name} />)
  }
  return (
    <div>
      {contactElements}
    </div>
  )
}
*/




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

  const contacts  = chatState.conversations.map(contact =>{
       return contact.with    //["Laura", "Dad", "Shoobert"]
  })




  return (
    <div>             
        <div >
          {chatState.displayConversation === null ? <List contacts={contacts} /> : <Conversation />}
        </div>
    </div>
  );
}

export default Exercise2;

