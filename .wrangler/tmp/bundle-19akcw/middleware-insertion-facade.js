				import worker, * as OTHER_EXPORTS from "/home/sven/GitHub/burpee-counter/.wrangler/tmp/pages-HP3UYk/u5kp0l41xyb.js";
				import * as __MIDDLEWARE_0__ from "/home/sven/GitHub/burpee-counter/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/home/sven/GitHub/burpee-counter/.wrangler/tmp/pages-HP3UYk/u5kp0l41xyb.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;