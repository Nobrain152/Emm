package analysis;

import data.DataReader;
import data.DataWriter;

import java.util.ArrayList;
import java.util.Date;

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
        for (String path: cases) {
            this.cases.add(path);
        }
    }

    private double mean(ArrayList<Integer> data) {
        double res = 0;
        for (int n: data) {
            res += (double)n;
        }
        res /= data.size();
        return res;
    }

    private void function() {
        for (String tc: cases) {
            String fromPath = FROM_PATH + tc;
            String toPath = TO_PATH;
            String index = tc.toUpperCase() + "---" + new Date().toString() + "---";
            ArrayList<Integer> data = DataReader.readFile(fromPath);
            double res = mean(data);
            DataWriter.writeFile(index + res + "ms\n", toPath);
        }
    }

    public static void main(String[] args) {
        // 在这里传入你想分析的文件的文件名，可以通过数组或arrayList传入多个文件
        Analysis analysis = new Analysis("tc6");
        analysis.function();
    }
}
