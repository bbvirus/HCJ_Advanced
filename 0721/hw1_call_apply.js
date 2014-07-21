/*
 *      //상속이 먼저가 아닙니다. 이때도 apply, call을 사용할 수 있지만, 그건 상속단계에서의 활용에 대한 예일 뿐입니다.
 *
	call과 apply는 prototype에서 상속받은 메소드로
	call이나 apply를 사용하는 함수 내에서 특정 객체를 this로 사용할 수 있도록 만들어준다.
	첫 번째 인자가 해당 함수 내의 this가 된다.
	call은 그냥 파라미터로 파라미터를 전달하지만 apply는 배열 형태로 파라미터를 전달한다.
	예1) 함수.call(this로 사용할 객체, 인자, 인자, 인자)
	예2) 함수.apply(this로 사용할 객체, [인자, 인자, 인자])
*/

var couple = {
	firstPerson: "",
	secondPerson: "",
	love: " loves "
}

var makeCouple = function(firstPerson, secondPerson) {
	this.firstPerson = firstPerson;
	this.secondPerson = secondPerson;
	return this.firstPerson + this.love + this.secondPerson;
}

/*
	makeCouple이 call과 apply를 사용했다.
	첫 번째 인자인 couple이 makeCouple 함수의 this가 된다.
	콘솔창에 chulsu loves younghee 라고 출력된다.
*/
console.log(makeCouple.call(couple, "chulsu", "younghee"));
console.log(makeCouple.apply(couple, ["chulsu", "younghee"]));
