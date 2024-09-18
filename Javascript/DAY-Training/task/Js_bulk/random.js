let data = [
    {title:'“Be yourself; everyone else is already taken.”'},
    {title:'““So many books, so little time.””'},
    {title:'““You only live once, but if you do it right, once is enough.””'},
    {title:'“Be the change that you wish to see in the world.”'},
    {title:'“To live is the rarest thing in the world. Most people exist, that is all.”'},
    {title:'“We accept the love we think we deserve”'},
    {title:'“Without music, life would be a mistake.”'},
    {title:'“In the middle of difficulty lies opportunity.”'},
    {title:'“Life is what happens when you’re busy making other plans.”'},
    {title:'“The future belongs to those who believe in the beauty of their dreams.”'},
   
]

function my_fun(){
    let value = data[Math.floor(data.length * Math.random())];
    console.log('val',value);
    document.getElementById('get').innerText = `${value.title}`;
}

