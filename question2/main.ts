  public static int Find(int[] integers)
  {
  int numerOfOdds = 0;
              int numberOfEvens = 0;
              int integerOutlier;


                for(int i = 0; i < integers.Length ;i++){
                  if ( integers[i]%2 == 0){
                    numberOfEvens++;
                  }else{
                    numerOfOdds++;
                  }  
                }

                if ( numberOfEvens > numerOfOdds){
                  integerOutlier = 1;    
                }else{
                  integerOutlier = 0;
                }

               for(int i = 0; i < integers.Length; i++){
  if (Math.Abs(integers[i]%2) == integerOutlier){
    return integers[i];
  }
}

              return 0;
  
  }
