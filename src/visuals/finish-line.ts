import * as THREE from "three";

/** Physical overhead banner plus a checkered stripe across the whole carriageway. */
export function createFinishLine(): THREE.Group {
  const group = new THREE.Group();
  const canvas = document.createElement("canvas"); canvas.width = 1024; canvas.height = 192;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#fffdf3"; ctx.fillRect(0, 0, 1024, 192);
  ctx.fillStyle = "#16272b";
  for (let row = 0; row < 6; row++) for (let col = 0; col < 32; col++) {
    if ((row + col) % 2 === 0 && (col < 6 || col > 25)) ctx.fillRect(col * 32, row * 32, 32, 32);
  }
  ctx.font = "900 128px Arial"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText("FINISH", 512, 104);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const banner = new THREE.Mesh(new THREE.BoxGeometry(2, 1.15, .08), new THREE.MeshStandardMaterial({map: texture, roughness: .7}));
  banner.position.y = 4.2; group.add(banner);
  const metal = new THREE.MeshStandardMaterial({color: 0x5d6567, metalness: .65, roughness: .35});
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, 4.85, 8), metal);
    post.position.set(side * 1.04, 2.425, 0); group.add(post);
  }
  const white = new THREE.MeshStandardMaterial({color: 0xfaf6e6, roughness: .9});
  const black = new THREE.MeshStandardMaterial({color: 0x20272a, roughness: .9});
  for (let row = 0; row < 2; row++) for (let col = 0; col < 16; col++) {
    const tile = new THREE.Mesh(new THREE.BoxGeometry(.125, .014, .38), (row + col) % 2 ? white : black);
    tile.position.set(-1 + (col + .5) / 8, .095, (row - .5) * .38); group.add(tile);
  }
  return group;
}
