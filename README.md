```
 _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \ / _` | '_ \ / _` | '_ ` _ \ / _` | '_ \ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\__,_|_| |_|\__, |_| |_| |_|\__,_|_| |_|
                    __/ |                      
                   |___/  
```

# Background                   
**Hangman** is a popular word guessing game where the player attempts to build a missing word by guessing one letter at a time. After a certain number of incorrect guesses, the game ends and the player loses.

# Objective
Build a command line version of Hangman which is usable from a Browser's console. Stubs for a HangmanGame class and functions are there in `main.js`. A typical game would look like this -

```
const hm = new HangmanGame('yellow');

> hm.guess('a');
_ _ _ _ _ _
attempts left 4

> hm.guess('e');
_ E _ _ _ _
attempts left 4

> hm.guess('l');
_ E L L _ _
attempts left 4

> hm.guess('y');
Y E L L _ _
attempts left 4

> hm.guess('o');
Y E L L O _
attempts left 4

> hm.guess('w');
sweet! you guessed it
the word was YELLOW

```