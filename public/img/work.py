import io
import os
from PIL import Image

# Open the AVIF image
for file in os.listdir("./"):
    if file != "work.py":
        image = None
        with io.open(file, "rb") as input:
            image = Image.open(input)
            print(image.format)
            if image.format == 'WEBP' or image.format == 'AVIF':
                image.load()

            # Convert the image to JPEG format
            image = image.convert("RGB")
            input.close()
        # Save the image as a JPEG file
        with io.open(file, "wb") as output:
            image.save(output, "JPEG")
            output.close()
