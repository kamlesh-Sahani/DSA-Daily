import java.util.*;
public class Strinngs {
    public static void main(String args[]){
        String firstName = "kamlesh";
        String lastName = "kumar";
        // concatenation 
        String fullName = firstName +" "+ lastName;
        System.out.println("Your full name is : "+fullName);

        // compare two string;
        // str1>str2 = +ve number
        // str1== str2 = 0
        // str1<str2 = -ve number
        String str1 = "jack";
        String str2="kack";
        System.out.println(str1.compareTo(str2));


        // traves the strings 

        for (int i=0;i<fullName.length();i++){
            System.out.println("character "+i+" :" + fullName.charAt(i));
        }

        // get the string value form the user
        System.out.println("Enter the strings ");
        Scanner sc = new Scanner(System.in);
        String userStr = sc.nextLine();
        System.out.println("Your string is : "+ userStr);
    }
}
