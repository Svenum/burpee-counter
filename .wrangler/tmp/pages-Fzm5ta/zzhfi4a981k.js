// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.8.6.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/sven/GitHub/burpee-counter/.wrangler/tmp/pages-Fzm5ta/bundledWorker-0.2976675643117521.mjs";
import { isRoutingRuleMatch } from "/home/sven/GitHub/burpee-counter/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/sven/GitHub/burpee-counter/.wrangler/tmp/pages-Fzm5ta/bundledWorker-0.2976675643117521.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=zzhfi4a981k.js.map
