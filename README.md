# Template for Website CV 
Frameworks used: Next.js and TailwindCSS
### Pictures of the template site
#### Eksample picture 1
![Picture one](https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/ec19d10c-0f9f-4db8-089c-c56edfb2e100/public)
#### Eksample picture 2
![Picture two](https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/9641123d-5be5-4d74-d7e7-5e286275d200/public)
#### Eksample picture 3
![Picture three](https://imagedelivery.net/x1uwLjrNlt5Jirxyo_Zhlg/acd61aaa-12d8-4163-91d5-8ff78c913800/public)

## Files you need to change

1. layout.tsx in root(app)
2. profile.tsx in components
3. experience.tsx in components
4. page.tsx in root (app)
5. footer.tsx in components
6. package in root(app) change name and version number if semantic reasons
7. replace the favicon, how you do it: delete the current favicon.ico, find an image that you want, rename it to favicon.ico and put it in the root folder (app) 

## Commands for terminal

1. npm i / npm install
2. npm run dev (to view it in a development environment)
3. npm run build (to see if your code works in deployment)

## Deployment on Cloudflare

1. Upload site to github
2. Buy a domain on cloudflare
3. Go to workers and pages
4. Click on pages and connect to git
5. Choose preset with next.js
6. After the build is done for to settings -> functions -> Compatibility flags -> configure production flags -> write nodejs_compat -> save
7. Click on custom domain and setup domain -> write in the domain you bought in step 2
8. Then click on activate and you are done!
9. If you want to have www infront of your domain go to website tab in cloudflare -> click on your domain -> DNS -> add record -> choose type: CNAME name:www target:[website address in the dns record with the @ tag] -> save (optional)
