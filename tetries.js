//캔버스 설정
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ROW = 20;
const COL = 10;
const SQ = 20;
const VACANT = "white";

// 캔버스에 사각형 그리기 함수
function drawSquare(x, y, color) {
  ctx.
 
fillStyle = color;
  ctx.
  ctx

 
fillRect(x * SQ, y * SQ, SQ, SQ);

  ctx.

 


strokeStyle = "black";
  ctx.
 
strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// 보드 초기화
let board = [];
for (r = 0; r < ROW; r++) {
  board[r] = [];
  
  board[r] = [];
 

  board[r] = [];

 
for (c = 0; c < COL; c++) {
    board[r][c] = 
    board[r][c] = V

    board[r][

   
VACANT;
  }
}


  }
// 보드에 그리기
function drawBoard() {
  
 
for (r = 0; r < ROW; r++) {
    
   
for (c = 0; c < COL; c++) {
      
      drawSquare

      draw

     
drawSquare(c, r, board[r][c]);
    }
  }
}


    }
  }
}

draw

    }
  }
}


    }
 

    }

   
drawBoard();

// 테트로미노 블록 생성
class Piece {
  
 
constructor(tetromino, color) {
    
   
this.tetromino = tetromino;
    this.color = color;

    

   


this.tetrominoN = 0; // 현재 모양
    
   
this.activeTetromino = this.tetromino[this.tetrominoN];

    

   


this.x = 3;
    
   
this.y = -2;
  }

  
  }

 

  }


 
// 블록 그리기
  
 
fill(color) {
    
   
for (r = 0; r < this.activeTetromino.length; r++) {
      
     
for (c = 0; c < this.activeTetromino.length; c++) {
        
       
if (this.activeTetromino[r][c]) {
          
         
drawSquare(this.x + c, this.y + r, color);
        }
      }
    }
  }

  
        }
      }
    }
  }

 

        }
      }
    }
  }


        }
      }
    }
 

        }
      }

       
// 블록 지우기
  
 
unfill() {
    
   
for (r = 0; r < this.activeTetromino.length; r++) {
      
     
for (c = 0; c < this.activeTetromino.length; c++) {
        
       
if (this.activeTetromino[r][c]) {
          
          drawSquare

          draw

         
drawSquare(this.x + c, this.y + r, VACANT);
        }
      }
    }
  }

  
        }
      }
    }
  }

 

        }
      }
    }
  }


        }
      }
    }
 

        }
      }
    }

        }
      }
   

        }
      }

        }
     

        }

       
// 블록 이동
  
 
moveDown() {
    
   
if (this.collision(0, 1, this.activeTetromino)) {
      
     
this.lock();
      p = 
     
randomPiece();
    } 
   
else {
      
     
this.unfill();
      
     
this.y++;
      
     
this.fill(this.color);
    }
  }

  
    }
  }

 

    }
  }


    }
 

    }
moveRight() {
    
   
if (!this.collision(1, 0, this.activeTetromino)) {
      
     
this.unfill();
      
     
this.x++;
      
     
this.fill(this.color);
    }
  }

  
    }
  }

 

    }
  }


    }
 

    }

   
moveLeft() {
    
   
if (!this.collision(-1, 0, this.activeTetromino)) {
      
     
this.unfill();
      
     
this.x--;
      
     
this.fill(this.color);
    }
  }

  
    }
  }

 

    }
  }


    }
 

    }

   
rotate() {
    
   
let nextPattern = this.tetromino[
      (
     
this.tetrominoN + 1) % this.tetrom