# AI Chatbot Setup Guide

## Quick Setup (2 minutes)

### 1. Add Your OpenAI API Key

Edit the `.env.local` file in the root directory and replace `your_openai_api_key_here` with your actual API key:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

**Where to find your API key:**
- Go to https://platform.openai.com/api-keys
- Click "Create new secret key"
- Copy the key (starts with `sk-`)
- Paste it in `.env.local`

### 2. Restart Your Development Server

```bash
# Stop your current dev server (Ctrl+C)
# Then restart it:
npm run dev
```

### 3. Test It Out!

Look for the floating purple chat button in the bottom-right corner of your website. Click it and ask questions like:
- "What projects has Pranav worked on?"
- "Tell me about the AI Transcript Agent"
- "What skills does Pranav have?"
- "How can I contact Pranav?"

## How It Works

The chatbot uses:
- **OpenAI GPT-4o-mini** for fast, cost-effective responses
- **Custom system prompt** with all your portfolio information
- **Beautiful UI** matching your portfolio theme
- **~$0.01 per conversation** (very affordable)

## Customizing the Chatbot

### Update Information About You

Edit `/app/api/chat/route.ts` and modify the `SYSTEM_PROMPT` section with:
- New projects
- Additional skills
- Updated experience
- Different personality/tone

### Change the Model

In `/app/api/chat/route.ts`, line 67, you can change:
```typescript
model: "gpt-4o-mini", // Cheapest, fast
// OR
model: "gpt-4o",      // More intelligent, slightly more expensive
```

### Customize the UI

Edit `/components/chatbot.tsx` to change:
- Colors (gradients, backgrounds)
- Position (bottom-left instead of bottom-right)
- Size (width/height)
- Initial greeting message

## Cost Estimate

- **GPT-4o-mini**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **Average conversation**: ~500 tokens total = **$0.0003** (less than a penny!)
- **100 conversations/day**: ~$0.03/day = **$1/month**

Very affordable for a portfolio site! 💰

## Troubleshooting

### "OpenAI API key not configured" error
- Make sure `.env.local` exists in the root directory
- Check that the API key starts with `sk-`
- Restart your dev server after adding the key

### Chat button doesn't appear
- Clear your browser cache
- Check browser console for errors
- Make sure you imported `<Chatbot />` in `app/page.tsx`

### Responses are slow
- This is normal for the first request (cold start)
- Consider upgrading to gpt-4o-mini turbo mode
- Check your internet connection

## Features

✅ Floating chat button with pulse animation
✅ Smooth expand/collapse animations
✅ Message history within session
✅ Typing indicators
✅ Mobile responsive
✅ Matches your portfolio theme
✅ Powered by AI badge
✅ Enter key to send messages

Enjoy your AI assistant! 🤖✨
