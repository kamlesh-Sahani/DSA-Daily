public class Recursion3 {
    public static void printFact(int n,int fact){
        if(n==1){
            System.out.println("factorial is : "+fact);
            return;
        }
        fact*=n;
        printFact(n-1, fact);

    }
    public static void main(String args[]){
        printFact(5,1);
    }
}
