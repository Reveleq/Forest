const firstBtn = document.querySelector(".more-offer__card-btn");
const secondBtn = document.querySelector(".more-offer__card-second-side-btn");
const firstSide = document.querySelector(".more-offer__card-first-side");
const secondSide = document.querySelector(".more-offer__card-second-side");
const firstSideTwo = document.querySelector('.card-first-two')
const secondSideTwo = document.querySelector('.card-second-two')
const firstBtnTwo = document.querySelector('.open-two')
const secondBtnTwo = document.querySelector('.close-two')
const firstSideThree = document.querySelector('.card-first-three')
const secondSideThree = document.querySelector('.card-second-three')
const firstBtnThree = document.querySelector('.open-three')
const secondBtnThree = document.querySelector('.close-three')
const firstSideFour = document.querySelector('.card-first-four')
const secondSideFour = document.querySelector('.card-second-four')
const firstBtnFour = document.querySelector('.open-four')
const secondBtnFour = document.querySelector('.close-four')
const firstSideFive = document.querySelector('.card-first-five')
const secondSideFive = document.querySelector('.card-second-five')
const firstBtnFive = document.querySelector('.open-five')
const secondBtnFive = document.querySelector('.close-five')

const showCard = () => {
	secondSide.classList.add("second-side-show");
	firstSide.classList.add("first-side-show");
};
const hideCard = () => {
	secondSide.classList.remove("second-side-show");
	firstSide.classList.remove("first-side-show");
};
const showCardTwo = () => {
	secondSideTwo.classList.add("second-side-show");
	firstSideTwo.classList.add("first-side-show");
};
const hideCardTwo = () => {
	secondSideTwo.classList.remove("second-side-show");
	firstSideTwo.classList.remove("first-side-show");
};
const showCardThree = () => {
	secondSideThree.classList.add("second-side-show");
	firstSideThree.classList.add("first-side-show");
};
const hideCardThree = () => {
	secondSideThree.classList.remove("second-side-show");
	firstSideThree.classList.remove("first-side-show");Three
}
const showCardFour = () => {
	secondSideFour.classList.add("second-side-show");
	firstSideFour.classList.add("first-side-show");
};
const hideCardFour = () => {
	secondSideFour.classList.remove("second-side-show");
	firstSideFour.classList.remove("first-side-show");
}
const showCardFive = () => {
	secondSideFive.classList.add("second-side-show");
	firstSideFive.classList.add("first-side-show");
};
const hideCardFive = () => {
	secondSideFive.classList.remove("second-side-show");
	firstSideFive.classList.remove("first-side-show");
};
firstBtn.addEventListener("click", showCard);
secondBtn.addEventListener("click", hideCard);
firstBtnTwo.addEventListener("click", showCardTwo);
secondBtnTwo.addEventListener("click", hideCardTwo);
firstBtnThree.addEventListener("click", showCardThree);
secondBtnThree.addEventListener("click", hideCardThree);
firstBtnFour.addEventListener("click", showCardFour);
secondBtnFour.addEventListener("click", hideCardFour);
firstBtnFive.addEventListener("click", showCardFive);
secondBtnFive.addEventListener("click", hideCardFive);
