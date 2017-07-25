package analysis;

import data.DataReader;
import data.DataWriter;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Properties;

public class Analysis {
    private static final String FROM_PATH = "resource/to_analysis/";
    private static final String TO_PATH = "resource/result/result";
    private ArrayList<String> cases;

    public Analysis(String path) {
        cases = new ArrayList<>();
        cases.add(path);
    }

    public Analysis(ArrayList<String> cases) {
        this.cases = new ArrayList<>();
        this.cases = cases;
    }

    public Analysis(String[] cases) {
        this.cases = new ArrayList<>();
        for (String path : cases) {
            this.cases.add(path);
        }
    }

    private double mean(ArrayList<Integer> data) {

        double res = 0;
        for (int n : data) {
            res += (double) n;
        }
        res /= data.size();
        BigDecimal b = new BigDecimal(res);
        res = b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        return res;
    }

    private int max(ArrayList<Integer> data) {
        int res = data.get(0);
        for (int n : data) {
            if (res < n) {
                res = n;
            }
        }
        return res;
    }

    private int min(ArrayList<Integer> data) {
        int res = data.get(0);
        for (int n : data) {
            if (res > n) {
                res = n;
            }
        }
        return res;
    }

    private void function() {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Properties prop = System.getProperties();
        String os = prop.getProperty("os.name");
        for (String tc : cases) {
            String fromPath = FROM_PATH + tc;
            String toPath = TO_PATH;
            String index = tc.toUpperCase() + "\t\t" + df.format(new Date()) + "\t\t" + os + "\t\tMEAN: ";
            ArrayList<Integer> data = DataReader.readFile(fromPath);
            double res = mean(data);
            DataWriter.writeFile(index + res + "ms\t\t" + "MAX: " + max(data) + "\t\tMIN: " + min(data) + "\n", toPath);

        }
    }

    public static void main(String[] args) {
        // 在这里传入你想分析的文件的文件名，可以通过数组或arrayList传入多个文件
        String[] cases = {"total-trans"};
        Analysis analysis = new Analysis(cases);
        analysis.function();
    }
}
