/* guaitaAngles — service worker (SPDX-License-Identifier: AGPL-3.0-only)
   Copyright (c) 2026 SBS BiM Consulting, Jordi Subirós
   Desa l'app a la memòria cau perquè funcioni sense connexió. */
const VERSION='guaitaAngles-0.3.1';
const FILES=['./','./guaitaAngles_0.3.1.html','./manifest.webmanifest','./HLP%20guaitaAngles-ajuda.html','../icones/icona-180.png','../icones/icona-192.png','../icones/icona-512.png','../icones/icona-512-maskable.png','../icones/favicon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{
  if(r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match('./guaitaAngles_0.3.1.html'))))});
