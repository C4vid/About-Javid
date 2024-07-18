function repeatString(word) {
    if (word.charAt(0).toUpperCase() === 'M') {
      for (let i = 0; i < 3; i++) {
        console.log(word);
      }
    }else{
        console.log('bu string m herfi ile baslamir');
    }
  }

  repeatString('')