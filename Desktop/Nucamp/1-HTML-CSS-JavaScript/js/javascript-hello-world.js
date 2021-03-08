function getName() {
    const userName = promptt('What is your name?')
    sayHello(userName);
}
function sayHello(name){ 
    
    alert('Hello ' + name + '!');
} 