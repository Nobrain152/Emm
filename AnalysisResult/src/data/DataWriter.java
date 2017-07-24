package data;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class DataWriter {

    /**
     * write file
     * @param content what you want to write
     * @param path file path
     * @return success or not
     */
    public static boolean writeFile(String content, String path) {
        File file = new File(path);
        FileWriter writer;
        try {
            writer = new FileWriter(file, true);
            writer.write(content);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
