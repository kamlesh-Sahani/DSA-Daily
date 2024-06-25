import java.util.*;

class array2D {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enetr the row of Array");
        int row = sc.nextInt();
        System.out.println("Enter the column of Array");
        int column = sc.nextInt();

        int[][] metrix = new int[row][column];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < column; j++) {
                System.out.println("Enter the element of: (" + i + "," + j + ")");
                metrix[i][j] = sc.nextInt();
            }
        }

        for(int i=0;i<row;i++){
            for(int j=0;j<column;j++){
                System.out.println("element of: (" + i + "," + j + ") : " + metrix[i][j]);
            }
        }
    }
}