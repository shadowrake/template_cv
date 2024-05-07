# Template for Website CV 
Frameworks used: Next.js and TailwindCSS

## Files you need to change

1. layout.tsx in root(app)
2. profile.tsx in components
3. experience.tsx in components
4. page.tsx in root (app)
5. footer.tsx in components

## Commands for termianl

1. npm i / npm install
2. npm run dev (to view it in a development environment)
3. npm run build (to see if your code works in deployment)

## Deployment on Cloudflare

1. Upload site to github
2. Buy a domin on cloudflare
3. Go to workers and pages
4. Click on pages and connect to git
5. Choose preset with next.js
6. After the build is done for to settings -> functions -> Compatibility flags -> configure production flags -> write nodejs_compat -> save
7. Click on custom domain and setup domain -> write in the domain you bought in step 2
8. Then click on activate and you are done!
9. If you want to have www. infront of your domain go to website tab in cloudflare -> click on your domain -> DNS -> add record -> choose type: CNAME name:www target:[website address in the dns record with the @ tag] -> save (optional)
