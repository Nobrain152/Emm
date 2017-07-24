package data;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.FileReader;
import java.util.ArrayList;

public class DataReader {
    private static final String INDEX = "   test time is: ";

    /**
     * read file
     *
     * @param path the file path
     * @return all valid time in terms of integer
     */
    public static ArrayList<Integer> readFile(String path) {
        File file = new File(path);
        BufferedReader reader = null;
        ArrayList<Integer> array = new ArrayList<>();
        try {
            reader = new BufferedReader(new FileReader(file));
            String temp;
            while((temp = reader.readLine()) != null) {
                if (temp.contains(INDEX)) {
                    String num = temp.substring(INDEX.length());
                    //System.out.println(num);
                    array.add(Integer.parseInt(num));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return array;
    }

    /**
     *  for test
     * @param args no use
     */
    public static void main(String[] args) {
        System.out.println(readFile("resource/to_analysis/tc6"));
    }
}
