"""
This script randomly generates an image of my fursona, tech stack,
and stable gradient in the background.

Written by skepfusky
"""
import argparse
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Parser stuff
parser = argparse.ArgumentParser(
  description='A script that randomly generates an image of my fursona, tech stack, and other cool shit')
parser.add_argument("-o", "--show-output", action="store_true", help="Show the output image")
args = parser.parse_args()


# Generate a simple, dark af gradient
def gradient2d(start, stop, width, height, is_horizontal):
  if is_horizontal:
    return np.tile(np.linspace(start, stop, width), (height, 1))
  else:
    return np.tile(np.linspace(start, stop, height), (width, 1)).T

def gradient3d(width, height, start_list, stop_list, is_horizontal_list):
  result = np.zeros((height, width, len(start_list)), dtype=float)

  for i, (start, stop, is_horizontal) in enumerate(zip(start_list, stop_list, is_horizontal_list)):
    result[:, :, i] = gradient2d(start, stop, width, height, is_horizontal)

  return result

gradient_color = gradient3d(1280, 720, (47, 46, 48), (32, 31, 34), (False, False, False))
Image.fromarray(np.uint8(gradient_color)).show()
