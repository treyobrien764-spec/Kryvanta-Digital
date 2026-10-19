# Kryvanta Digital — typography and consultation scheduling

## What changed
- Replaced missing/fallback Inter setup with DM Sans body and Manrope headlines (Google Fonts, loaded when online)
- Added a new free 15-minute consultation section at **contact.html#book-call**
- Linked the main navigation and homepage to consultation section
- Removed publicly displayed phone links and the public phone setting per owner request. Website visitors can submit a quote or schedule a consultation.
- Preserved the original Netlify `kryvanta-inquiry` contact form.

## Get booking ready (free)
1. Create an account at https://cal.com/ (or https://calendly.com/).
2. Connect your personal or work calendar to block already-busy periods.
3. Create a **15-minute Free Website Consultation** event; set the timezone, working hours, meeting location (phone or video), and any buffers.
4. Copy the **actual event link** (not just your general profile).
5. In Visual Studio Code open `site-config.js`. Set `bookingUrl` to your full HTTPS event link.
6. Save, commit, and push the changes to your connected GitHub repository. Netlify will deploy.

The booking link is configured to open the online scheduler. If unavailable, customers can use the existing Netlify quote form. The website does not publicly display a phone number.

## Updating the existing VS Code / GitHub project
- Extract this ZIP first.
- Copy the **contents** of `Kryvanta-Digital/` into your existing VS Code Kryvanta project folder, allowing file overwrites.
- Do not remove the existing `.git` folder from your VS Code project.
- Review the changes in Source Control; commit and click Sync Changes / Push.
- Check Netlify Deploys for Published, then test on desktop/mobile.
- Test the quote form once more after publishing to confirm notifications still arrive.

## Security and privacy
Do not put passwords, personal phone numbers, API keys, calendar API tokens or other secrets into `site-config.js` — this file is publicly visible when served. There is no phone-number setting.
