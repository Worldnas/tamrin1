/*var emt1=[20,19,18]
var emt2=[17,16,15,14,13,12,11,10]
emt1=emt1.concat(emt2)
for(var i=0;i<emt1.length;i++)
{
	var element=emt1[i] 
	alert(element)
}*/

















/*//slice
var emt1=[20,19,18,17,16,15,14,13,12,11];
//emt1=emt1.slice(2,8)
emt1=emt1.slice(3,-3)
for(var i=0;i<emt1.length;i++)
{
	for(var j=0;j<emt1.length;j++)
	{
		if(emt1[i]<emt1[j])
		{var temp=emt1[i]
		 emt1[i]=emt1[j]
		 emt1[j]=temp
		}
	}	
	
}
for(var i=0;i<emt1.length;i++)
{
	alert(emt1[i])
}*/








/*var al=['ali','reza','hasan']
var a1=['mohammad','hosein','jafar']
for(var i=0;i<al.length;i++)
{
	var element=al[i] 
	a1.push(element)
}
for(var i=0;i<a1.length;i++)
{ 
	var elements=a1[i]
	alert(elements)
}
a1.join()
al.join()*/








/*var animal={
	name:'jack',
	age :'2 years old',
	weight:'60kg
	
	talk:function(y){
	
	alert('my name is'+this.name+' i have'+this.age+'my weight is'+this.weight)
	}
};
animal.talk('hello ')*/






function animal(_name,_age,_height,_color,){
	this._name=_name || "unknown";
	this._age=_age || "unknown";
	this._height=_height || "unknown";
	this._color=_color || "unnown";
	this.talk=function(){
		alert('my name is'+this._name+' i have'+this._age+ 'years old'+ 'my height is'+this._height+'and my hair color is' + this._color)
	}
}
var a1= new
animal('bethany','2','100cm','yellow')
a1.talk()

var a2 = new 
animal()
a2.talk()