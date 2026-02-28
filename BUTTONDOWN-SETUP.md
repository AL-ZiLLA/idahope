# Buttondown Newsletter Setup

## Quick Setup (5 minutes)

### 1. Create Buttondown Account
- Go to https://buttondown.email
- Sign up with Emily's email
- Free for first 100 subscribers

### 2. Get API Key
- Log in to Buttondown
- Go to Settings → Programming
- Copy your API key

### 3. Add to Vercel
- Go to https://vercel.com/idahope
- Go to Settings → Environment Variables
- Add: `BUTTONDOWN_API_KEY` = [paste your API key]
- Redeploy the site

### 4. Test It
- Visit https://idahopetherapy.com/blog
- Subscribe with a test email
- Check Buttondown dashboard to see the subscriber

## Auto-Send New Blog Posts

In Buttondown settings:
1. Go to Settings → Emails
2. Enable "RSS to Email"
3. Add RSS feed: `https://idahopetherapy.com/feed.xml` (if we add RSS)
4. OR manually send emails when new posts publish

## Features

✅ Email collection on blog page
✅ Double opt-in (Buttondown sends confirmation email)
✅ Unsubscribe link in every email
✅ Subscriber management dashboard
✅ Analytics (open rates, click rates)
✅ Can send one-time emails to list
✅ Tags subscribers as "idahope-blog"

## Sending Emails

**Option 1: Automatic (RSS)**
- Set up RSS feed → Buttondown auto-sends new posts

**Option 2: Manual**
- Write email in Buttondown
- Send to all subscribers
- Good for announcements, special content

## Migration Later

If you outgrow 100 subscribers:
- Export CSV from Buttondown
- Import to ConvertKit/Mailchimp/etc.
- Takes 5 minutes
