import java.util.ArrayList;
import java.util.Collections;
public class arrayList1 {
    public static void main(String[] args) {
        
        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(0);
        list.add(77);
        list.add(3);
        list.add(32);

        System.out.println(list);

        // revoming the element
        list.remove(0);
        System.out.println("after deleted :"+list);

        //tarversing;
        for(int i=0;i<list.size();i++){
            System.out.println("list: "+i+": " +list.get(i));
        }

        //ading the element at specific index ;
        list.add(3,222);
        System.out.println("after the adding: "+list);

        Collections.sort(list);

        System.out.println("after the sorting :"+list);
        
    }
}
