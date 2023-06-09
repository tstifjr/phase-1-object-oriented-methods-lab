function BoardMember (arg1, arg2, arg3){
    this.name = arg1;
    this.homeState = arg2;
    this.training = arg3;

    // this.veto = function() {
    //     return "No, I must disagree";  
    // }
}

BoardMember.prototype.veto = function (){
    return "No, I must disagree";
}

BoardMember.prototype.approve = function (){
    return "You can do that!";
}

BoardMember.prototype.doCharity = function(){
    return "I like to help people.";
}

BoardMember.prototype.releasePressStatement = function (){
    return `You will see great things from Scuber.`
}

BoardMember.prototype.sayHi = function (){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}