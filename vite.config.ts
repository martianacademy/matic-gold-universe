import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["linked-dep"],
  },
  mode: "development",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,
  },
});
