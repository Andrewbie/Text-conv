import java.util.*;
public class hehe {
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        int size= sc.nextInt();
        int numbers[]= new int[size];

        System.out.println("inter the numbers: ");

        for(int i=0; i<size; i++){
            numbers[i]=sc.nextInt();
        }

        for(int i=0; i<size; i++){
            System.out.println(numbers[i]);
      }
}

}