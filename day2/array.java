import java.util.Scanner;

class array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size of Array");
        int size = sc.nextInt();
        int[] marks = new int[size];

        for(int i=0;i<size;i++){
            System.out.println("Enter the Marks of : "+(i+1)+" Student");
            marks[i]=sc.nextInt();
        }

        for(int i=0;i<marks.length;i++){
            System.out.println("Student "+(i+1)+" marks: "+marks[i]);
        }

    }
}