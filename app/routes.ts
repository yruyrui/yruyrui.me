import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog/index.tsx"),
    route("blog/:id", "routes/blog/_id.tsx"),
  ]),
] satisfies RouteConfig;
