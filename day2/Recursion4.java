public class Recursion4 {
    public static void printFibnacci(int a,int b,int n){
        if(n==0){
          
            return;
        }
        int c= a+b;
        System.out.println(c);
        printFibnacci(b, c, n-1);
    }
    public static void main(String[] args) {
        int a=0,b=1;
        int n=7;
        System.out.println(a);
        System.out.println(b);
        printFibnacci(a,b,n-2);
    }
}
