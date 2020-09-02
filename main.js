class HangmanGame {
    constructor(wordToBeGuessed) {
      this._setInitialState(wordToBeGuessed);
    }
  
    _setInitialState(wordToBeGuessed) {
        this.chances=5;
        // var myArray = [
        //   "Apples",
        //   "Bananas",
        //   "Pears"
        // ];

        // var word=myArray[Math.floor(Math.random()*myArray.length)];
        var word= wordToBeGuessed;
        var curr_word= new String("");
        for(let i=0;i<word.length ; i++)
        {
          curr_word+="_";
        }
        this.play(this.chances, word, curr_word);
    

    }

    play(chances, word , curr_word)
    {
        while(chances>0)
        {
          console.log(curr_word);
          console.log("You have" + chances + "left");
          // let next_char=window.prompt("Enter the letter");
          let flag=false;
          for(let j=0;j<word.length;j++)
          {
            if(word[j] == next_char)
            {
              flag=true;
              // curr_word[j]=next_char;
              curr_word= curr_word.substr(0,j)+next_char + curr_word.substr(j+1);

            }
          }

          if(this.check_win(curr_word , word ) == true)
          {
            console.log("you won");
            this.restart();
          }
          if(flag==false)
          {
            chances--;
          }
        }

        console.log("You Lost");
        this.restart();
    }

    
    check_win(curr_word , word)
    {
      for(let i=0;i<word.length;i++)
      {
        if(word[i]!=curr_word[i])
        {
          return false;
        }
      }
      return true;
    }

    _isValidInput() {

    }

    _printState() {

    }
  
    guess(input) {

    }
  
    restart() {
      this._setInitialState('yellow');

    }

  
}

function check_win(curr_word, word)
{
  for(let i=0;i<word.length;i++)
  {
    if(curr_word[i*2]!=word[i])
    {
      return false;
    }
  }
  return true;
}

function buttonPressed(id)
{
  let next_char=document.getElementsByTagName('button')[id].innerHTML;
  document.getElementsByTagName('button')[id].disabled = true;
  let curr_chance=document.getElementById('chances').innerText;
  let curr_word=document.getElementById('curr_word').innerHTML;
  let word="yellow";
  

  let flag=false;
  for(let j=0;j<word.length;j++)
  {
    if(word[j] == next_char)
    {
      flag=true;
      curr_word= curr_word.substr(0,j*2)+next_char + curr_word.substr(2*j+1);
    }
  }

    if(flag==false)
    {
      curr_chance--;
    }
    if(curr_chance == 0)
    {
      document.getElementById('status').innerHTML="You Lost";
      return;
    }
    if(check_win(curr_word,word) == true)
    {
      document.getElementById('curr_word').innerText=curr_word;
      document.getElementById('status').innerHTML="You Won";
      return;
    }
    document.getElementById('curr_word').innerText=curr_word;
    document.getElementById('chances').innerText=curr_chance;
    return;

}

function restart()
{
  window.location.reload();
  // for(let i=0;i<26;i++)
  // {
  //   document.getElementsByTagName('button')[i].disabled = false;
  // }
  // document.getElementById('chances').innerText=

}

  


  
// const hm = new HangmanGame('yellow');