import { homeHtml } from "./home";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 强制 HTTPS 重定向
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // 处理 POST /join 请求
    if (url.pathname === "/join" && request.method === "POST") {
      try {
        const data = await request.json();
        const email = data.email;

        // 简单验证
        if (!email || typeof email !== "string" || !email.includes("@")) {
          return new Response("Invalid email address", { status: 400 });
        }

        // 查找是否已存在
        const exists = await env.DB.prepare("SELECT email FROM emails WHERE email = ?")
          .bind(email)
          .first();

        if (exists) {
          return new Response("Already joined", { status: 200 });
        }

        // 插入数据库
        await env.DB.prepare("INSERT INTO emails (email) VALUES (?)")
          .bind(email)
          .run();

        return new Response("Joined successfully!", { status: 200 });

      } catch (err) {
        return new Response("Error processing request", { status: 500 });
      }
    }

    // 其他请求返回首页
    return new Response(homeHtml(), {
      headers: { "content-type": "text/html" },
    });
  }
} satisfies ExportedHandler<Env>;
