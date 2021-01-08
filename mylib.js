function isTouching(Rect1,Rect2){
    if(abs(Rect1.x-Rect2.x)<Rect2.width/2+Rect1.width/2&&
      abs(Rect1.y-Rect2.x)<Rect2.height/2+Rect1.height/2 ) 
      {
        return true;
    }
    else{
      return false;
    }
  }