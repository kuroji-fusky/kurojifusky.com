"""
This script randomly generates an image of my fursona, tech stack,
and stable gradient in the background.

Written by skepfusky
"""
import argparse
from generativepy.drawing import make_image, setup
from generativepy.color import Color
from generativepy.geometry import Rectangle, LinearGradient
from PIL import Image, ImageDraw, ImageFont

# Parser stuff
parser = argparse.ArgumentParser(
  description='A script that randomly generates an image of my fursona, tech stack, and other cool shit')
parser.add_argument("-o", "--show-output", action="store_true", help="Show the output image")
args = parser.parse_args()

