public class pattern {
    public static void main(String[] args) {
        int k = 6;
        int flag = 0;
        int i=1;
        int changeK = 0;
        int j=1;
        for ( i = 1; i < 6; i++) {    
            if(flag==1){
                changeK = i;
            }
            int sonu = changeK != 0 ? changeK : k - i;
            for ( j = 1; j<=sonu; j++) {
                System.out.print(j);
            }
            System.out.println();
            if (i == 5) {
                
                if (flag == 1) {
                    return;
                }

                flag = 1;
                i = 0;
                k = 0;
                j=1;
        
            }
        }

        // for(int i=1;i<6;i++){
        // for(int j=1;j<=i;j++){
        // System.out.print(j);
        // }
        // System.out.println();
        // }

    }
}
