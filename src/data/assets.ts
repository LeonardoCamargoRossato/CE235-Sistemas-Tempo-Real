const ASSET_VERSION = "20260924-v8";

function publicAsset(path: string) {
  const cleanPath = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleanPath}?v=${ASSET_VERSION}`;
}

export const assets = {
  hero: publicAsset("assets/ce235-satellite-brazil-hero.png"),
  profile: publicAsset("assets/fotoperfil.png"),
  itaLogo: publicAsset("assets/ITA_logo.png"),
} as const;
