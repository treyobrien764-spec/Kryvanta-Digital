# Kryvanta Digital — typography, scheduling & phone update

## What changed
- Replaced missing/fallback Inter setup with DM Sans body and Manrope headlines (Google Fonts, loaded when online)
- Added a new free 15-minute consultation section at **contact.html#book-call**
- Linked the main navigation and homepage to consultation section
- Added optional click-to-call in desktop header, mobile navigation, contact page and footer
- Preserved the original Netlify `kryvanta-inquiry` contact form.

## Get booking ready (free)
1. Create an account at https://cal.com/ (or https://calendly.com/).
2. Connect your personal or work calendar to block already-busy periods.
3. Create a **15-minute Free Website Consultation** event; set the timezone, working hours, meeting location (phone or video), and any buffers.
4. Copy the **actual event link** (not just your general profile).
5. In Visual Studio Code open `site-config.js`. Set `bookingUrl` to your full HTTPS event link.
6. Set `phone` to the phone number to publicly display for Kryvanta Digital.
7. Save, commit, and push the changes to your connected GitHub repository. Netlify will deploy.

Until the booking URL is set, the consultation page truthfully offers **Request a Callback** through your already-configured Netlify quote form. Unconfigured phone numbers are hidden. There is **no working booking link** until you supply and save one.

## Updating the existing VS Code / GitHub project
- Extract this ZIP first.
- Copy the **contents** of `Kryvanta-Digital/` into your existing VS Code Kryvanta project folder, allowing file overwrites.
- Do not remove the existing `.git` folder from your VS Code project.
- Review the changes in Source Control; commit and click Sync Changes / Push.
- Check Netlify Deploys for Published, then test on desktop/mobile.
- Test the quote form once more after publishing to confirm notifications still arrive.

## Security and privacy
Do not put passwords, private phone numbers, API keys, calendar API tokens or any other secrets into `site-config.js` — its contents are publicly visible when served as a static file. `phone` is specifically for the number you want to advertise to visitors.
