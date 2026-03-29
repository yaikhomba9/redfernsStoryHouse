// server.js - CommonJS version for your package.json
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Your bot token and chat ID from environment variables
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📨 Received contact request:', req.body);
  
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields (name, email, message) are required' 
    });
  }
  
  // Format the message for Telegram
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const formattedMessage = `
📬 *NEW CONTACT FORM SUBMISSION*
━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:*
${message}

━━━━━━━━━━━━━━━━━━━━
🕐 *Submitted:* ${formattedDate}
🌐 *Source:* Contact Form
━━━━━━━━━━━━━━━━━━━━

✨ *Response Needed:* Yes
  `;

  // Telegram API URL
  const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    // Using fetch (Node.js 18+ has it built-in)
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: formattedMessage,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', data);
      throw new Error(data.description || 'Failed to send message to Telegram');
    }

    console.log('✅ Message sent successfully to Telegram');
    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
    
  } catch (error) {
    console.error('❌ Error sending to Telegram:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send message. Please try again later.' 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`✅ Health check: http://localhost:${PORT}/api/health`);
  console.log(`📝 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`\n📋 Make sure your .env file has:`);
  console.log(`   TELEGRAM_BOT_TOKEN=your_token_here`);
  console.log(`   TELEGRAM_CHAT_ID=your_chat_id_here`);
});