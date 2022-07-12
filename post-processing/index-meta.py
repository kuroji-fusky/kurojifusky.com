"""
This script randomly generates an image of my fursona, tech stack,
and stable gradient in the background.

Written by skepfusky
"""
import argparse
import numpy as np
from PIL import Image, ImageDraw

# Parser stuff
parser = argparse.ArgumentParser(
  description='A script that randomly generates an image of my fursona, tech stack, and other cool shit')
parser.add_argument("-o", "--show-output", action="store_true", help="Show the output image")
args = parser.parse_args()

# Generate a simple, dark af gradient
def gradient2d(start, stop, width, height):
  return np.tile(np.linspace(start, stop, height), (width, 1)).T

def gradient3d(width, height, start_list, stop_list):
  result = np.zeros((height, width, len(start_list)), dtype=float)

  for i, (start, stop) in enumerate(zip(start_list, stop_list)):
    result[:, :, i] = gradient2d(start, stop, width, height)

  return result

gradient_color = gradient3d(1280, 720, (47, 46, 48), (127, 31, 100))
gradient_result = Image.fromarray(np.uint8(gradient_color))
gradient_result.show()

print("Gradient done lol")
