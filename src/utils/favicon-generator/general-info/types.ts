export interface GeneralInfoOptions {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: "fullscreen" | "standalone" | "minimal-ui" | "browser";
  theme_color: string;
  background_color: string;
  path: string;
}
