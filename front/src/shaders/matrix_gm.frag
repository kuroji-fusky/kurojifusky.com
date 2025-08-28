#ifdef GL_ES
precision mediump float;
#endif

// The texture (our image) that we'll be processing
uniform sampler2D u_texture;

// The resolution of our off-screen buffer (e.g., 32x32)
uniform vec2 u_resolution;

// The size of each character block in pixels (e.g., 16.0)
uniform float u_blockSize;

// The texture coordinate passed from the vertex shader
varying vec2 vTexCoord;

// Luminance calculation weights for RGB
const vec3 luma = vec3(0.299, 0.587, 0.114);

void main() {
  // Calculate the size of a single pixel in texture coordinates (0.0 to 1.0)
  vec2 onePixel = vec2(1.0 / u_resolution.x, 1.0 / u_resolution.y);

  // Find the coordinate of the center of the block this pixel belongs to; this "snaps" the coordinates to a grid
  vec2 blockCoord = floor(vTexCoord / onePixel / u_blockSize) * u_blockSize * onePixel + (u_blockSize * onePixel * 0.5);

  // Get the color from the original texture at the center of the block
  vec4 color = texture2D(u_texture, blockCoord);

  // Calculate the luminance (brightness) of the color
  float luminance = dot(color.rgb, luma);

  // Output the luminance as a grayscale color the rgb channels will all hold the same brightness value
  gl_FragColor = vec4(vec3(luminance), 1.0);
}