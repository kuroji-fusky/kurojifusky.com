"""
This script generates an image of my fursona, name, skills,
and a nice and simple gradient in the background.

Written by skepfusky
"""
import os
import textwrap
import random as rnd
import numpy as np
from PIL import Image, ImageDraw, ImageFont

BANNER_WIDTH, BANNER_HEIGHT = (1280, 630)

# Generate a simple dark purple gradient
def gradient2d(start, stop, width, height):
  return np.tile(np.linspace(start, stop, height), (width, 1)).T


def gradient3d(width, height, start_list, stop_list):
  result = np.zeros((height, width, len(start_list)), dtype=float)

  for i, (start, stop) in enumerate(zip(start_list, stop_list)):
    result[:, :, i] = gradient2d(start, stop, width, height)

  return result


banner_gradient = gradient3d(BANNER_WIDTH, BANNER_HEIGHT, (47, 46, 48), (32, 31, 30))
banner_result = Image.fromarray(np.uint8(banner_gradient))

# Append text and align it to the center
header_text = "skepfusky"

# Take the generated gradient and append text on it
banner_text = ImageDraw.Draw(banner_result)
font_heading = ImageFont.truetype("fonts/Inter-ExtraBold.ttf", 55)
font_sub = ImageFont.truetype("fonts/Inter-Medium.ttf", 19)

suffixes = ["broke ass", "a lazy"]
furry_stuff = ["pattable floof", "fox-husky dude", "soft boi"]
age = 20

sub_text = f"Hi! I'm a {age}-year-old {rnd.choice(furry_stuff)} hobbyist as a {rnd.choice(suffixes)} programmer," \
             " filmmaker, indie musician!"

sub_text_break = textwrap.wrap(sub_text, width=69)

banner_text.text((BANNER_WIDTH / 2, BANNER_HEIGHT / 2 + 100), header_text, font=font_heading, fill=(240, 240, 240, 255),
                 anchor="mt")

y_text = 180

for line in sub_text_break:
  # TODO: fix this damn deprecationerror
  width, height = font_sub.getsize(line)
  banner_text.text((BANNER_WIDTH / 2, BANNER_HEIGHT / 2 + y_text), line, font=font_sub, fill=(240, 240, 240, 255),
                   anchor="mt")
  y_text += height

# Show that nice image baby
# banner_result.show()

# Goes to root directory
root_path = os.path.dirname(os.getcwd())
os.chdir(root_path)
print(root_path)