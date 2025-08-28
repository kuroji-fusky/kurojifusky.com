precision mediump float;
            
varying vec2 vTexCoord;
uniform sampler2D u_image;
uniform sampler2D u_chars;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_mosaicScale;
uniform float u_charSize;
uniform bool u_animate;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float getLuminance(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 charGrid = floor(vTexCoord * u_resolution / u_charSize);
  vec2 charUV = mod(vTexCoord * u_resolution, u_charSize) / u_charSize;

  vec2 mosaicUV = (charGrid + 0.5) * u_charSize / u_resolution;
  vec3 imageColor = texture2D(u_image, mosaicUV).rgb;
  float luminance = getLuminance(imageColor);

  float charIndex = random(charGrid);
  if (u_animate) {
    charIndex = random(charGrid + floor(u_time * 2.0));
  }

  float charRow = floor(charIndex * 8.0);
  float charCol = floor((charIndex * 8.0 - charRow) * 8.0);

  vec2 charTexCoord = vec2(charCol / 8.0 + charUV.x / 8.0,
  charRow / 8.0 + charUV.y / 8.0);

  float charMask = 1.0 - length(charUV - 0.5) * 2.0;
  charMask = smoothstep(0.0, 1.0, charMask);

  float opacity = luminance * charMask;
  if (u_animate) {
    float wave = sin(u_time + charGrid.x * 0.5 + charGrid.y * 0.3) * 0.3 + 0.7;
    opacity *= wave;

    float stream = random(vec2(charGrid.x, floor(u_time * 0.1)));
    if (stream > 0.995) {
      opacity = 1.0;
    }
  }

  vec3 matrixGreen = vec3(0.0, 1.0, 0.0);
  gl_FragColor = vec4(matrixGreen * opacity, opacity);
}