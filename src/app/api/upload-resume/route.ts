import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json({ error: "Invalid multipart form data. Please upload a file." }, { status: 400 });
    }

    const file = formData.get("resume") as File | null;

    if (!file || typeof file === "string" || typeof file.arrayBuffer !== "function") {
      return NextResponse.json({ error: "Please upload a valid PDF or image file." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const publicDir = path.join(process.cwd(), "public");

    const fileNameLower = file.name.toLowerCase();
    const isPdf = fileNameLower.endsWith(".pdf");

    if (isPdf) {
      // Direct PDF save
      await fs.writeFile(path.join(publicDir, "resume.pdf"), buffer);
      await fs.writeFile(path.join(publicDir, "Abinaya_G_Resume.pdf"), buffer);
    } else {
      // It's an image (JPG or PNG)
      const imagePath = path.join(publicDir, "resume-preview.jpg");
      await fs.writeFile(imagePath, buffer);

      // Convert image to PDF using Python PIL for instant download compatibility
      try {
        await execAsync(
          `python -c "from PIL import Image; img = Image.open('public/resume-preview.jpg'); img.convert('RGB').save('public/resume.pdf', 'PDF', resolution=100.0); img.convert('RGB').save('public/Abinaya_G_Resume.pdf', 'PDF', resolution=100.0);"`
        );
      } catch (convErr) {
        console.warn("Image to PDF conversion notice:", convErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Resume successfully uploaded and updated as ${isPdf ? "PDF" : "Image & PDF"}!`,
      fileName: file.name,
      fileSize: file.size,
      updatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Resume upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to upload resume" },
      { status: 500 }
    );
  }
}
