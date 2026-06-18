const post = [
     {name: Ilan1,text: "Happy birthday 1 !"},
     {name: Ilan2,text: "Happy birthday 2 !"},
     {name: Ilan3,text: "Happy birthday 3 !"},
     {name: Ilan4,text: "Happy birthday 4 !"},
];
function render() {
  const randomText = Math.floor(Math.random() * post.length);
  return post[randomText];
}



