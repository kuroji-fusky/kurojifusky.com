// These are default attributes and uniforms provided by p5.js
attribute vec3 aPosition;
attribute vec2 aTexCoord;

// This is a varying variable that will be passed to the fragment shader
varying vec2 vTexCoord;

void main() {
  // Pass the texture coordinate to the fragment shader
  vTexCoord = aTexCoord;

  // Standard WebGL position calculation
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}