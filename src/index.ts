import { renderHtml } from "./renderHtml";
import { homeHtml } from "./home";
export default {
  async fetch(request, env) {
   /* const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
  const { results } = await stmt.all();*/ 

   /* return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html",
      },
    }); */
	const url = new URL(request.url);
	if (url.protocol === "http:") {
            url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
	return new Response(homeHtml(), {
	  headers: {
	    "content-type": "text/html",
	  },
	});
	
  },
} satisfies ExportedHandler<Env>;
