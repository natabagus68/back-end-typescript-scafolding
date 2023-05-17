import { IMulterFile } from "@/presentation/validation/types";
import fs from "fs-extra";
import path from "path";

export class FileSystem {
    public static store(file: IMulterFile, dest: string): string {
        const destPath = path.join(
            "storage",
            dest,
            file.filename + "." + `${file.originalname}`.split(".").reverse()[0]
        );
        fs.moveSync(file.path, destPath);
        return destPath;
    }
}
