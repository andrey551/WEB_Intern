var totalPoint = 0;
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt("Enter a number from 1 to 6: " ));
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    if(isNaN(userNumber)) {
      reject(new Error("Wrong Input Type!"));
    } else if(userNumber > 6 || userNumber < 1) {
      reject(new Error("Number is not in range 1 .. 6!"));
    } else {
      if(userNumber === randomNumber) {
        resolve({
          point: 2,
          randomNumber
        });
      } else if(userNumber === randomNumber + 1 ||
                userNumber === randomNumber - 1
      ) {
        resolve({
          point: 1,
          randomNumber
        });
      } else {
        resolve({
          point: 0,
          randomNumber
        })
      }
    };
  })
}

const continueGame = () => {
  return new Promise((resolve) => {
    if(window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGuess = () => {
  enterNumber()
    .then((result) => {
        totalPoint += result.point;
        alert(`Dice : ${result.randomNumber}: you got ${totalPoint}`);

        continueGame().then((result) => {
          if(result) {
            handleGuess();
          } else {
            alert(`Total point you got: ${totalPoint}`)
          }
        })
    })
    .catch((error) => {
      alert(error);
      handleGuess();
    })
}

handleGuess();