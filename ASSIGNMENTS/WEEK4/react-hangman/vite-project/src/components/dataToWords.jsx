function dataToWords() {
)

  const dataToWords = () => { /* to convert data.json to a usable array  */
    let wordListArr = data.map((word) => [word])  /* maps each word from the list to an array */ 
    console.log(wordListArr)
    return (wordListArr)
  }
}