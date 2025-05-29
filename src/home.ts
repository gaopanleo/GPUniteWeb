export function homeHtml(content: string) {
  return `
    <!DOCTYPE html>
          <html lang="en">
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>GPUnite - Unleash GPU Power</title>
                  <script src="https://cdn.tailwindcss.com"></script>
                  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                      <style>
                          #bg-animation {
                              position: fixed;
                          top: 0;
                          left: 0;
                          width: 100vw;
                          height: 100vh;
                          z-index: -1;
                          background: linear-gradient(135deg, #0f0f1b 0%, #1a1a2e 100%);
            }
                          body {
                              font - family: 'Inter', sans-serif;
            }
                          .gradient-text {
                              background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #F43F5E 100%);
                          -webkit-background-clip: text;
                          background-clip: text;
                          color: transparent;
                          background-size: 200% auto;
                          animation: gradient 3s ease infinite;
            }
                          @keyframes gradient {
                              0 % { background- position: 0% 50%; }
                          50% {background - position: 100% 50%; }
                          100% {background - position: 0% 50%; }
            }
                          .card-hover {
                              transition: all 0.3s ease;
                          transform: translateY(0);
            }
                          .card-hover:hover {
                              transform: translateY(-5px);
                          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
                          .feature-icon {
                              width: 60px;
                          height: 60px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          border-radius: 16px;
                          margin-bottom: 20px;
                          background: rgba(139, 92, 246, 0.1);
            }
                          .glow-on-hover {
                              transition: all 0.3s ease;
            }
                          .glow-on-hover:hover {
                              box - shadow: 0 0 15px rgba(236, 72, 153, 0.5);
            }
                          .step-number {
                              width: 40px;
                          height: 40px;
                          border-radius: 50%;
                          background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
                          color: white;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-weight: bold;
                          margin-right: 16px;
                          flex-shrink: 0;
                          align-self: center; /* Add this line */
                          margin-top: 0; /* Ensure no top margin is pushing it down */
            }
                      </style>
                      <script>
                          const translations = {
                              en: {
                              heroTitle: "GPUnite",
                          heroDesc: "Harness the world's idle GPU power. Decentralized. Inclusive. Efficient.",
                          joinButton: "Join the Revolution",
                          aboutTitle: "What is GPUnite?",
                          aboutDesc: "GPUnite is a decentralized platform that allows anyone to contribute their idle GPU resources for distributed AI inference and computing tasks. By sharing, you earn. By uniting, we empower.",
                          features: [
                          {title: "Distributed Power", desc: "Connect thousands of GPUs worldwide to handle large-scale tasks efficiently." },
                          {title: "Open to All", desc: "No special hardware required. Any GPU can help—and earn rewards." },
                          {title: "Green & Sustainable", desc: "Maximize existing resources. No need to build more datacenters." }
                          ],
                          howItWorksTitle: "How It Works",
                          steps: [
                          "Download our lightweight client.",
                          "Share idle GPU power securely when you're not using it.",
                          "Get rewarded with tokens or points based on your contribution."
                          ],
                          readyTitle: "Ready to Join?",
                          readyDesc: "Leave your email and we'll notify you when we launch!",
                          notifyBtn: "Notify Me",
                          footer: " 2025 GPUnite. All rights reserved."
                },
                          zh: {
                              heroTitle: "GPU联盟",
                          heroDesc: "汇聚全球闲置 GPU 算力，去中心化，共享共赢。",
                          joinButton: "立即加入",
                          aboutTitle: "什么是 GPUnite？",
                          aboutDesc: "GPUnite 是一个去中心化平台，让任何人都可以贡献闲置 GPU 资源来参与分布式 AI 推理与计算。分享即收益，团结即力量。",
                          features: [
                          {title: "分布式算力", desc: "连接全球数千 GPU 高效处理大规模任务。" },
                          {title: "人人可参与", desc: "无需专业设备，任何 GPU 都可以贡献并获取收益。" },
                          {title: "绿色可持续", desc: "充分利用现有资源，无需建设新数据中心。" }
                          ],
                          howItWorksTitle: "运行方式",
                          steps: [
                          "下载我们的轻量客户端。",
                          "在你空闲时安全共享 GPU 算力。",
                          "根据贡献获取积分或收益。"
                          ],
                          readyTitle: "准备好加入了吗？",
                          readyDesc: "留下你的邮箱，我们上线后第一时间通知你！",
                          notifyBtn: "通知我",
                          footer: " 2025 GPUnite 版权所有"
                }
            };
                          function setLang(lang) {
                const t = translations[lang];
                          document.getElementById('hero-title').textContent  = t.heroTitle;
                          document.getElementById('hero-desc').textContent  = t.heroDesc;
                          document.getElementById('join-btn').textContent  = t.joinButton;
                          document.getElementById('about-title').textContent  = t.aboutTitle;
                          document.getElementById('about-desc').textContent  = t.aboutDesc;
                          document.getElementById('feature1-title').textContent  = t.features[0].title;
                          document.getElementById('feature1-desc').textContent  = t.features[0].desc;
                          document.getElementById('feature2-title').textContent  = t.features[1].title;
                          document.getElementById('feature2-desc').textContent  = t.features[1].desc;
                          document.getElementById('feature3-title').textContent  = t.features[2].title;
                          document.getElementById('feature3-desc').textContent  = t.features[2].desc;
                          document.getElementById('how-title').textContent  = t.howItWorksTitle;
                          document.getElementById('step1').textContent  = t.steps[0];
                          document.getElementById('step2').textContent  = t.steps[1];
                          document.getElementById('step3').textContent  = t.steps[2];
                          document.getElementById('ready-title').textContent  = t.readyTitle;
                          document.getElementById('ready-desc').textContent  = t.readyDesc;
                          document.getElementById('notify-btn').textContent  = t.notifyBtn;
                          document.getElementById('footer-text').textContent  = t.footer;
            }
            window.onload  = () => {
                              setLang('en');
                          tsParticles.load("bg-animation",  {
                              fullScreen: {enable: false },
                          background: {color: "#0f0f1b" },
                          particles: {
                              number: {value: 80 },
                          size: {value: 3, random: true },
                          links: {
                              enable: true,
                          distance: 150,
                          color: "#8B5CF6",
                          opacity: 0.4,
                          width: 1
                        },
                          move: {enable: true, speed: 1.5 },
                          color: {value: "#EC4899" },
                          shape: {
                              type: "circle",
                          stroke: {
                              width: 0,
                          color: "#000000"
                            }
                        },
                          opacity: {
                              value: 0.5,
                          random: true
                        }
                    },
                          interactivity: {
                              events: {
                              onHover: {
                              enable: true,
                          mode: "repulse",
                          parallax: {
                              enable: true,
                          force: 60,
                          smooth: 10
                                }
                            }
                        },
                          modes: {
                              repulse: {
                              distance: 100,
                          duration: 0.4
                            }
                        }
                    }
                });
            };
                      </script>
                </head>
                  <body class="bg-gray-950 text-white">
                      <div id="bg-animation"></div>
    
                      <!-- Navigation -->
                      <nav class="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center">
                          <div class="flex items-center">
                              <svg class="w-8 h-8 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                              </svg>
                              <span class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">GPUnite</span>
                          </div>
                          <div class="flex items-center space-x-4">
                              <button onclick="setLang('en')" class="text-sm px-3 py-1 rounded-md hover:bg-gray-800 transition">EN</button>
                              <button onclick="setLang('zh')" class="text-sm px-3 py-1 rounded-md hover:bg-gray-800 transition">中文</button>
                          </div>
                      </nav>
    
                      <!-- Hero Section -->
                      <section class="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
                          <div class="max-w-4xl mx-auto">
                              <h1 id="hero-title" class="text-6xl md:text-7xl font-bold mb-6 gradient-text animate__animated animate__fadeIn">
                                  GPUnite
                              </h1>
                              <p id="hero-desc" class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
                                  Harness the world's idle GPU power. Decentralized. Inclusive. Efficient.
                              </p>
                              <a id="join-btn" href="#join" class="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group animate__animated animate__fadeIn animate__delay-2s glow-on-hover" style="background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);">
                                  <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500"></span>
                                  <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></span>
                                  <span class="relative z-10">Join the Revolution</span>
                                  <svg class="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                  </svg>
                              </a>
                          </div>
                          <div class="absolute bottom-10 left-0 right-0 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
                              <a href="#about" class="text-gray-400 hover:text-white transition">
                                  <svg class="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                  </svg>
                              </a>
                          </div>
                      </section>
    
                      <!-- About Section -->
                      <section id="about" class="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
                          <div class="max-w-6xl mx-auto">
                              <div class="text-center mb-16">
                                  <h2 id="about-title" class="text-4xl font-bold mb-6 text-white">What is GPUnite?</h2>
                                  <p id="about-desc" class="text-xl text-gray-300 max-w-3xl mx-auto">
                                      GPUnite is a decentralized platform that allows anyone to contribute their idle GPU resources for distributed AI inference and computing tasks. By sharing, you earn. By uniting, we empower.
                                  </p>
                              </div>
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 card-hover">
                                      <div class="feature-icon">
                                          <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                          </svg>
                                      </div>
                                      <h3 id="feature1-title" class="text-xl font-semibold mb-4 text-white">Distributed Power</h3>
                                      <p id="feature1-desc" class="text-gray-400">Connect thousands of GPUs worldwide to handle large-scale tasks efficiently.</p>
                                  </div>
                                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 card-hover">
                                      <div class="feature-icon">
                                          <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                          </svg>
                                      </div>
                                      <h3 id="feature2-title" class="text-xl font-semibold mb-4 text-white">Open to All</h3>
                                      <p id="feature2-desc" class="text-gray-400">No special hardware required. Any GPU can help—and earn rewards.</p>
                                  </div>
                                  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 card-hover">
                                      <div class="feature-icon">
                                          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                          </svg>
                                      </div>
                                      <h3 id="feature3-title" class="text-xl font-semibold mb-4 text-white">Green & Sustainable</h3>
                                      <p id="feature3-desc" class="text-gray-400">Maximize existing resources. No need to build more datacenters.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
    
                      <!-- How It Works -->
                      <section class="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
                          <div class="max-w-4xl mx-auto">
                              <div class="text-center mb-16">
                                  <h2 id="how-title" class="text-4xl font-bold mb-6 text-white">How It Works</h2>
                              </div>
                              <div class="space-y-8">
                                  <div class="flex items-center">
                                      <div class="step-number">1</div>
                                      <div>
                                          <p id="step1" class="text-xl text-gray-300">Download our lightweight client.</p>
                                      </div>
                                  </div>
                                  <div class="flex items-center">
                                      <div class="step-number">2</div>
                                      <div>
                                          <p id="step2" class="text-xl text-gray-300">Share idle GPU power securely when you're not using it.</p>
                                      </div>
                                  </div>
                                  <div class="flex items-center">
                                      <div class="step-number">3</div>
                                      <div>
                                          <p id="step3" class="text-xl text-gray-300">Get rewarded with tokens or points based on your contribution.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
    
                      <!-- Call to Action -->
                      <section id="join" class="py-24 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
                          <div class="max-w-2xl mx-auto">
                              <h2 id="ready-title" class="text-4xl font-bold mb-6 text-white">Ready to Join?</h2>
                              <p id="ready-desc" class="text-xl text-gray-300 mb-8">Leave your email and we'll notify you when we launch!</p>
                              <form class="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                                  <input type="email" placeholder="you@example.com" class="px-6 py-4 rounded-xl w-full sm:w-auto flex-1 text-black focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                                  <button id="notify-btn" type="submit" class="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-xl shadow-xl group glow-on-hover" style="background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);">
                                      <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500"></span>
                                      <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></span>
                                      <span class="relative z-10">Notify Me</span>
                                  </button>
                              </form>
                          </div>
                      </section>
    
                      <!-- Footer -->
                      <footer class="py-12 px-6 border-t border-gray-800 text-center">
                          <div class="max-w-6xl mx-auto">
                              <div class="flex justify-center mb-8">
                                  <svg class="w-10 h-10 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                  </svg>
                                  <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">GPUnite</span>
                              </div>
                              <p id="footer-text" class="text-gray-500"> 2025 GPUnite. All rights reserved.</p>
                          </div>
                      </footer>
                  </body>
    </html>
`;
}
