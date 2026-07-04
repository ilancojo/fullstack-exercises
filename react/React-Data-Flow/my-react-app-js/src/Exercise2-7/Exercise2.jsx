
import { useState } from "react";



function Conversation(props) {
  const messages = props.convo.map((message ,index) => {
    const displaySender = (message.sender === "self")? "Me" : props.sender  ;

      return (
        <div key={index}>
          <span className="sender">{displaySender}</span>
          : {message.text}
        </div>
      )
    })

  return (
    <div>
      <button className="back" onClick={props.backToList} >back</button>
      {messages}
    </div>
  )
}


function Contact(props) {
  return (
    <div onClick={() => props.displayConvo(props.name)}>
      {props.name}
    </div>
  )}

function List(props) {
  let contactName = props.contacts.map(contactName => (
    <Contact key={contactName} name={contactName} displayConvo={props.displayConvo} />
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
      displayConversation: null,
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

  function displayConvo(name){

    setChatState(previousState => ({
            ...previousState,
          displayConversation: name, 
          }));
  }

  function backToList(){
    setChatState(previousState => ({
            ...previousState,
          displayConversation: null,  
          }));     
  } 




  let selectedConversation = chatState.conversations.find(conversation => {
    return conversation.with === chatState.displayConversation
  });

  return (
    <div>             
        <div >
          {chatState.displayConversation === null ? <List contacts={contacts} displayConvo={displayConvo} /> :
           <Conversation convo = {selectedConversation.convo} sender = {chatState.displayConversation} backToList={backToList} />}
        </div>
    </div>
  );
}

export default Exercise2;

