"""
A script that blurs images to achieve a specific effect
similar to CSS filter and clip-path. The blurred images
is accompanied by the background-size effect.

Written by skepfusky
"""
import argparse
import os
from PIL import Image, ImageFilter
from concurrent.futures import ThreadPoolExecutor

"""
Argparse stuff

*** Will work on this when there are multiple directories ***
"""
parser = argparse.ArgumentParser(description='Blur images in a folder')
parser.add_argument("--blur-fursonas", action="store_true", help="Blur the fursonas directory")
parser.add_argument("--blur-projects", action="store_true", help="Blur the project directory")
parser.add_argument("--blur-banners", action="store_true", help="Blur the banners directory")
parser.add_argument("--blur-all", action="store_true", help="Blur all images in the folder")
args = parser.parse_args()

# Goes to root directory
root_path = os.path.dirname(os.getcwd())
os.chdir(root_path)

"""
Some functions to blur crap
"""
def blur_img(input_img, output_img):
  img = Image.open(input_img)
  # if "_blur" in img:
  #   print(f"[NOTICE] {input_img} is already blurred!")
  #   return output_img

  if img.format == 'JPEG':
    print(f"Found JPEG image: {input_img}")
    gau_blur = img.filter(ImageFilter.GaussianBlur(radius=4))
    gau_blur.save(output_img.replace('.jpg', '_blur.png'), 'JPEG')
    return output_img
  else:
    print(f"Found PNG image: {input_img}")
    gau_blur = img.filter(ImageFilter.GaussianBlur(radius=4))
    # Resize images to 20% of their original size for optimization
    gau_blur.thumbnail((0.2 * gau_blur.width, 0.2 * gau_blur.height))
    gau_blur.save(output_img.replace('.png', '_blur.png'), 'PNG')
    return output_img

def blur_folder(input_folder):
  for img in os.listdir(input_folder):
    if "_blur" in img:
      print(f"[NOTICE] {img} is already blurred!")

    else:
      input_img = input_folder + img
      blur_img(input_img, input_img)

  return input_folder

def main():
    blur_folder(f"{os.getcwd()}/public/static/fursonas/comms/")

with ThreadPoolExecutor(max_workers=50) as executor:
  executor.map(main, range(100))

if __name__ == "__main__":
    main()