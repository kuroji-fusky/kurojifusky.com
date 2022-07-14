"""
This script generates an image of my fursona, name, skills,
and a nice and simple gradient in the background.

Written by skepfusky
"""
import os
import numpy as np
import textwrap
from datetime import date
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from random import choice as rnd

root_path = os.path.dirname(os.getcwd())
os.chdir(root_path)

BANNER_WIDTH, BANNER_HEIGHT = (1280, 630)

## Generate gradient
def gradient2d(start, stop, width, height):
  return np.tile(np.linspace(start, stop, height), (width, 1)).T

def gradient3d(width, height, start_list, stop_list):
  result = np.zeros((height, width, len(start_list)), dtype=float)

  for i, (start, stop) in enumerate(zip(start_list, stop_list)):
    result[:, :, i] = gradient2d(start, stop, width, height)

  return result

banner_gradient = gradient3d(BANNER_WIDTH, BANNER_HEIGHT, (47, 46, 48), (32, 31, 30))
banner_result = Image.fromarray(np.uint8(banner_gradient))

## Take the generated gradient, append text and align it to the center
header_text = "skepfusky"
banner_text = ImageDraw.Draw(banner_result)
font_heading = ImageFont.truetype("post-processing/fonts/Inter-ExtraBold.ttf", 55)
font_sub = ImageFont.truetype("post-processing/fonts/Inter-Medium.ttf", 19)

suffixes = [" broke ass", " lazy", ""]
furry_stuff = ["floofy", "fox-husky", "soft boi"]

def age(born):
  today = date.today()
  return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

age = age(date(2002, 3, 15))

sub_text = f"Hi! I'm a {age}-year-old {rnd(furry_stuff)} hobbyist as a{rnd(suffixes)} programmer," \
           " video editor, filmmaker, indie musician!"

sub_text_break = textwrap.wrap(sub_text, width=69)

banner_text.text((BANNER_WIDTH / 2, BANNER_HEIGHT / 2 + 100), header_text, font=font_heading, fill=(232, 232, 232, 255),
                 anchor="mt")

y_text = 180

for line in sub_text_break:
  height = font_sub.getlength(line[:4])
  banner_text.text((BANNER_WIDTH / 2, BANNER_HEIGHT / 2 + y_text), line, font=font_sub, fill=(232, 232, 232, 255),
                   anchor="mt")
  y_text += height

## Add the cutie to the banner
avatar_size = (300,300)

banner_avatar = Image.open("public/static/fursonas/comms/comm_for_davey_g2_catastrophe.jpg").resize(avatar_size)

avatar_mask = Image.new("L", avatar_size, 0)
avatar_draw = ImageDraw.Draw(avatar_mask)
avatar_draw.ellipse((0, 0, (avatar_size[0] - 3), (avatar_size[1] - 3)), fill=255)

banner_result.paste(banner_avatar, (int(BANNER_WIDTH / 2.6), 75), mask=avatar_mask)

## Save and print the final output
banner_result.save("public/static/meta/banner.png", "PNG", quality=90)
print("[SUCCESS] Banner saved!")
print(f"[RND OUTPUT] \"{sub_text}\"")