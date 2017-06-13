import java.io.File;
import java.io.IOException;

public class FilRename {


    public static void main(String[] argv) throws IOException {

        File folder = new File("img/");
        File[] listOfFiles = folder.listFiles();
        for (int i = 0; i < listOfFiles.length; i++) {

            if (listOfFiles[i].isFile()) {

                File f = new File("img/"+listOfFiles[i].getName());
                String pre = f.toString();
                String[] ending = pre.split("\\.");
                boolean conversionTest = f.renameTo(new File("img/"+i+"." + ending[1]));
                System.out.println("Konverterer: " + pre + " til " + i + "<filending>" + " - " + conversionTest);
            }
        }

        System.out.println("conversion is done");
    }
}
